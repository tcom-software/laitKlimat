import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";

import { Pagination } from "@organisms";
import { Hgroup } from "@molecules";
import { Text, Button } from "@atoms";

import Review from "./Review";
import { Container } from "./styles";
import { serializeReview } from "./serializeReview";
import { ReviewsService } from "api/ReviewsService";

const Reviews = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    setLoading(true);
    ReviewsService.getReviews(page).then(data => {
      setReviews(serializeReview(data));
      setTotal(data.total);
      setLoading(false);
    });
  }, [page]);

  const addReview = useCallback(() => {
    dispatch(
      showModal({
        modalType: "addReview",
      })
    );
  }, []);

  return (
    <Container className="container">
      <Hgroup h1="Отзывы наших клиентов" />
      {reviews?.map(review => (
        <Review key={review.id} data={review} loading={loading} />
      ))}
      {!total || total === 0 ? (
        <Text tag="p" sz="normal" clr="tercary" className="no-reviews">
          Нет результатов
        </Text>
      ) : (
        <>
          <Text tag="span" clr="primary" sz="normal">
            {`Рейтинг нашей компании! <strong>5 звезд</strong> на основе ${total} отзывов`}
          </Text>
          <Pagination
            pages={total}
            forcePage={0}
            onPageChange={({ selected }) => setPage(selected + 1)}
          />
        </>
      )}
      <Button variant="primary" title="Добавить отзыв" onClick={addReview} />
    </Container>
  );
};

export default Reviews;
