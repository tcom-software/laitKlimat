import { useState, FC, useEffect, useCallback, useRef, useMemo } from "react";
import { Text, Checkbox, Icon } from "@atoms";
import SimilarProduct from "@organisms/Product/SimilarView";
import { Container } from "./styles";
import Search from "@organisms/Search";
import {
  getCachedProducts,
  getCachedProductsIds,
} from "@redux/selectors/products";
import { useDispatch, useSelector } from "react-redux";
import { addProductsCache } from "@redux/actions/products";
import { serializeProductData } from "helper/serializeProduct";
import { ProductService } from "api/ProductService";

interface CompareProps {
  modalRef: any;
  hideModal: any;
  modalProps: any;
}

const Compare: FC<CompareProps> = ({ modalRef, hideModal, modalProps }) => {
  const dispatch = useDispatch();
  const searchRef = useRef<HTMLInputElement>(null);
  const [lastProductId, setLastProductId] = useState(modalProps.productId);
  const [, setLoading] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const productIds: any[] = useSelector(getCachedProductsIds());
  const cachedProducts: any[] = useSelector(getCachedProducts());

  useEffect(() => {
    const hasProduct = productIds.includes(lastProductId);
    if (!hasProduct) {
      setLoading(true);
      ProductService.getProduct(lastProductId)
        .then(product => {
          dispatch(addProductsCache(lastProductId, product));
          const {
            characteristics: { characteristics },
          } = serializeProductData(product);
          product.characteristics = characteristics;
          setSelectedProducts(products => [...products, product]);
        })
        .finally(() => setLoading(false));
    } else {
      const product = cachedProducts[lastProductId];
      setSelectedProducts(products => [...products, product]);
    }
  }, [lastProductId]);

  const serializeCharacteristics = useMemo(() => {
    const chars = [];
    for (let product of selectedProducts) {
      let { characteristics } = product;
      // serialize characteristics
      characteristics = characteristics.map(({ title, table }: any) => ({
        title,
        characteristics: new Set(Object.keys(table)),
      }));

      for (let characteristic of characteristics) {
        const _char = chars.find(({ title }) => title === characteristic.title);
        if (_char) {
          // merge two characteristic with new title
          _char.characteristics = new Set([
            ..._char.characteristics,
            ...characteristic.characteristics,
          ]);
        } else {
          // push new characteristic
          chars.push(characteristic);
        }
      }
    }

    return chars;
  }, [selectedProducts]);

  const getCharacteristicValueByName = useCallback(
    (characteristics: any[], name: string) => {
      const characteristic = characteristics.find(({ table }) => table[name]);
      if (!characteristic?.table?.[name]) return "-";
      return characteristic.table[name];
    },
    []
  );

  const handleOnProductClick = useCallback((id: any) => {
    setLastProductId(id);
  }, []);

  return (
    <Container ref={modalRef}>
      <header>
        <div className="close" onClick={hideModal}>
          <Icon name="close" fill="secondary" />
        </div>
      </header>
      <div className="wrapper">
        {/* ******************* top => product carts ********************* */}
        <section className="top">
          <div className="selected-names">
            {selectedProducts.map(
              ({ product: { brand, series_name, model } }, idx) => (
                <div key={idx} className="item active">
                  <Checkbox checked />
                  <Text tag="span" clr="secondary" sz="normal">
                    {`${brand} ${series_name}-${model}`}
                  </Text>
                </div>
              )
            )}
            {Boolean(4 - selectedProducts.length) && (
              <Search
                inputRef={searchRef}
                handleOnProductClick={handleOnProductClick}
              />
            )}
          </div>
          {selectedProducts.map((data, idx) => (
            <div className="product-wrapper" key={idx}>
              <Icon
                name="close"
                className="close"
                fill="black"
                // @ts-ignore
                onClick={() =>
                  setSelectedProducts(p =>
                    p.filter(
                      ({ product: { articule } }) =>
                        articule !== data.product.articule
                    )
                  )
                }
              />
              <SimilarProduct
                data={data}
                key={data.product.articule}
                withHandleClose={() => {}}
                className="product selected"
              />
            </div>
          ))}
          {selectedProducts.length !== 4 && (
            <div
              className="product add-new"
              onClick={() => searchRef.current?.focus()}
            >
              <Icon name="close" fill="secondary" width="3em" height="3em" />
            </div>
          )}
        </section>

        {/* ***************** bottom => product characteristics ***************** */}
        <section className="bottom">
          <div className="row">
            <Text tag="h3" clr="white" sz="larg">
              ????????????????????????????
            </Text>
          </div>
          <div className="characteristics">
            {serializeCharacteristics.map(({ title, characteristics }) => (
              <div className="s" key={title}>
                <div className="table-row title">
                  <Text tag="span" clr="primary" sz="larg">
                    {title}
                  </Text>
                  <Text tag="span"> </Text>
                  <Text tag="span"> </Text>
                  <Text tag="span"> </Text>
                  <Text tag="span"> </Text>
                </div>
                {(Array.from(characteristics) as any[]).map((name: string) => {
                  return (
                    <div className="table-row" key={name}>
                      <Text tag="span" clr="primary" sz="normal">
                        {name}
                      </Text>
                      {selectedProducts.map(({ characteristics }, i) => (
                        <Text tag="span" clr="secondary" sz="normal" key={i}>
                          {getCharacteristicValueByName(characteristics, name)}
                        </Text>
                      ))}
                      {[...Array(4 - selectedProducts.length)].map((_, i) => (
                        <Text
                          tag="span"
                          clr="secondary"
                          sz="normal"
                          key={i + selectedProducts.length}
                        >
                          {" "}
                        </Text>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="row"></div>
        </section>
      </div>
    </Container>
  );
};

export default Compare;
