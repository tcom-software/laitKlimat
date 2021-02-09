import isEmpty from "lodash/isEmpty";

export const filterSearchParams = (router: any) => {
  let {
    // utm_campaign,
    // utm_source,
    // utm_medium,
    // utm_content,
    // utm_term,
    // yclid,

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
  } = router.query as any;

  const otherRanges: any = {
    range2,
    range1,
    range4,
    range5,
  };

  const serializedOtherRanges: any = {};

  for (let key in otherRanges) {
    if (otherRanges[key]) {
      serializedOtherRanges[key.slice(-1)] = otherRanges[key]
        .split(" ")
        .map((val: string) => (isNaN(+val) ? null : Number(val)));
    }
  }

  for (let key in checkboxes) {
    if (!Number(key)) {
      delete checkboxes[key]
      continue;
    }

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

  if (!isEmpty(serializedOtherRanges)) {
    body.fromTo = body.fromTo || {};
    body.fromTo = {
      ...body.fromTo,
      ...serializedOtherRanges,
    };
  }

  if (manufacturerCountries) {
    body.manufacturerCountries = manufacturerCountries.split(" ");
  }

  if (!isEmpty(checkboxes)) {
    body.checkboxes = checkboxes;
  }

  return { body, category, page };
};
