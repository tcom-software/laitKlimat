import { FC } from "react";
import ReactPaginate from "react-paginate";
import { Container } from "./styles";

interface Props {
  pages: number;
  forcePage?: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  initialPage?: number;
  perPage?: number;
}

const Pagination: FC<Props> = ({
  pages,
  forcePage,
  onPageChange,
  initialPage = 0,
  perPage = 10,
}) => {
  return (
    <Container>
      <ReactPaginate
        containerClassName="pagination"
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
        {...(forcePage ? { forcePage } : {})}
        initialPage={initialPage}
        onPageChange={onPageChange}
        disableInitialCallback={false}
      />
    </Container>
  );
};

export default Pagination;
