import { serialezeKey } from "@redux/reducers/filters";
import { GetServerSidePropsContext } from "next";
import { storage } from "constants/storageKeys";
import { readCookie } from "utils/cookies";
import getConfig from "next/config";
import isEmpty from "lodash/isEmpty";

const {
  serverRuntimeConfig: {
    fetchUrl,
    projectId,
    categoryPath,
    productsPath,
    productPath,
  },
} = getConfig();

const isFirstRender = (headers: any) => headers["sec-fetch-mode"] !== "cors";

export interface InitialReduxStateProps {
  ctx: GetServerSidePropsContext;
  store: any;
  initialStore: any;
  [x: string]: any;
}

export const initializeCategories = async ({
  ctx,
  store,
  initialStore,
  ...rest
}: InitialReduxStateProps) => {
  const { site } = store.getState();
  let categories: any;

  try {
    if (site.categories?.length === 0) {
      const response = await fetch(`${fetchUrl}${categoryPath}`, {
        method: "GET",
        headers: {
          projectId: "56",
        },
      });
      categories = await response.json();
    }
  } catch (error) {
    console.log(error);
  }

  return {
    ...rest,
    ctx,
    store,
    initialStore: {
      ...initialStore,
      categories,
    },
  };
};

export const initializeFilters = async ({
  ctx,
  store,
  initialStore,
  ...rest
}: InitialReduxStateProps) => {
  return {
    ...rest,
    ctx,
    store,
    initialStore: {
      ...initialStore,
      filters: ctx.query,
    },
  };
};

export const initializeProducts = async ({
  ctx,
  store,
  initialStore,
  ...rest
}: InitialReduxStateProps) => {
  const cachedKey = serialezeKey(ctx.query);
  const filters: string[] = JSON.parse(readCookie(ctx.req, storage.FILTERS));
  const isFirstRender = ctx.req.headers["sec-fetch-mode"] !== "cors";
  const hasCache = !isFirstRender && filters?.includes(cachedKey);
  const products = {
    hasCache,
    cachedKey,
    payload: {},
  };

  const {
    page,
    c: category,
    manufacturerCountries,
    price,
    // ranges "from to"
    range1,
    range2,
    range4,
    range5,
    ...checkboxes
  } = ctx.query as any;

  const otherRanges: any = {
    range2,
    range1,
    range4,
    range5,
  };
  const serialezedOtherRanges: any = {};

  for (let key in otherRanges) {
    if (otherRanges[key]) {
      serialezedOtherRanges[key.slice(-1)] = otherRanges[key]
        .split(" ")
        .map((val: string) => (isNaN(+val) ? null : Number(val)));
    }
  }

  for (let key in checkboxes) {
    checkboxes[key] = checkboxes[key]
      .split(" ")
      .map((val: string) => Number(val));
  }

  const body: any = {};

  if (price) {
    body.fromTo = body.fromTo || {};
    body.fromTo.price = price
      .split(" ")
      .map((val: string) => (isNaN(+val) ? null : Number(val)));
  }

  if (!isEmpty(serialezedOtherRanges)) {
    body.fromTo = body.fromTo || {};
    body.fromTo = {
      ...body.fromTo,
      ...serialezedOtherRanges,
    };
  }

  if (manufacturerCountries) {
    body.manufacturerCountries = manufacturerCountries.split(" ");
  }

  if (!isEmpty(checkboxes)) {
    body.checkboxes = checkboxes;
  }

  if (!hasCache) {
    const filters = `${category}?page=${page || 1}`;
    const url = `${fetchUrl}${productsPath}${filters}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { projectId, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const {
      products: _products,
      products_info: { characteristics, ...restInfo },
    } = await response.json();

    for (const characteristic of characteristics) {
      const product = _products.find(({ id }: any) => id === characteristic.id);
      product.characteristics = characteristic;
    }

    products.payload = { products: _products, products_info: restInfo };
  }

  return {
    ...rest,
    ctx,
    store,
    cachedKey,
    initialStore: {
      ...initialStore,
      products,
    },
  };
};

export const initializeProduct = async ({
  ctx,
  store,
  initialStore,
  ...rest
}: InitialReduxStateProps) => {
  const productId = ctx.query.product as string;
  const products: string[] = JSON.parse(readCookie(ctx.req, storage.PRODUCTS));
  const hasCache =
    !isFirstRender(ctx.req.headers) && products.includes(productId);
  const product = {
    hasCache,
    productId,
    payload: {},
  };

  if (!hasCache) {
    const url = `${fetchUrl}${productPath}${productId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { projectId },
    });
    product.payload = await response.json();
  }

  return {
    ...rest,
    ctx,
    store,
    initialStore: {
      ...initialStore,
      product,
    },
  };
};
