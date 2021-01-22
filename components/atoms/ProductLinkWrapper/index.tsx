import Link from "next/link";
import { FC } from "react";

interface Props {
  articule: number;
}

const ProductLinkWrapper: FC<Props> = ({ children, articule }) => {
  return (
    <Link href={`/products/[product]`} as={`/products/${articule}`}>
      <a>{children}</a>
    </Link>
  );
};

export default ProductLinkWrapper;
