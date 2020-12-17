import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";

import { Hgroup } from "@molecules";
import { Text, Button } from "@atoms";

import Review from "./Review";
import { Container } from "./styles";
import { serializeReview } from "./serializeReview";

const Reviews = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState(null);

  const addReview = useCallback(() => {
    dispatch(
      showModal({
        modalType: "addReview",
      })
    );
  }, []);

  useEffect(() => {
    fetch("api/getReviews", {
      method: "POST",
      body: JSON.stringify({ page }),
    })
      .then((response) => response.json())
      .then((data) => {
        const serilizeData = serializeReview(data);
        setReviews(serilizeData);
      });
  }, []);

  return (
    <Container className="container">
      <Hgroup h1="Отзывы наших клиентов" />
      {reviews?.map((review) => (
        <Review key={review.id} data={review} />
      ))}
      <Text tag="span" clr="primary" sz="normal">
        {
          "Рейтинг нашей компании! <strong>5 звезд</strong> на основе 15 отзывов"
        }
      </Text>
      <Button variant="primary" title="Добавить отзыв" onClick={addReview} />
    </Container>
  );
};

export default Reviews;
