import { useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductBoxView from "./BoxView";
import ProductHorizontalView from "./HorizontalView";

import { getCategoryLoader } from "@redux/selectors/loader";
import { addPreviousViews } from "@redux/actions/previousViews";
import { serializeProductCardData } from "helper/serializeProduct";

const Product = ({ view, data }) => {
  const dispatch = useDispatch();
  const loading = useSelector(getCategoryLoader);
  const serializedData = serializeProductCardData(data);
  const ProductView = view === "box" ? ProductBoxView : ProductHorizontalView;

  const addToPreviousViews = useCallback(() => {
    dispatch(addPreviousViews(serializedData));
  }, [serializedData]);

  return (
    <ProductView
      loading={loading}
      data={serializedData}
      addToPreviousViews={addToPreviousViews}
    />
  );
};

export default memo(Product);
