import { FC, memo } from "react";
import ReactPaginate from "react-paginate";
import { Container } from "./styles";

interface Props {
  pages: number;
  forcePage?: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  initialPage?: number;
  perPage?: number;
  className?: string;
}

const Pagination: FC<Props> = ({
  pages,
  forcePage,
  onPageChange,
  initialPage = 0,
  perPage = 12,
  className,
}) => {
  return (
    <Container>
      <ReactPaginate
        containerClassName={"pagination " + className}
        pageCount={Math.ceil(pages / perPage) || 1}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        previousLabel={
          <span className="arrow-icons" data-direction="left">
            &#x3c;
          </span>
        }
        nextLabel={
          <span className="arrow-icons" data-direction="right">
            &#x3e;
          </span>
        }
        {...(forcePage || forcePage === 0 ? { forcePage } : {})}
        initialPage={initialPage}
        onPageChange={onPageChange}
        disableInitialCallback={false}
      />
    </Container>
  );
};

export default memo(Pagination);
