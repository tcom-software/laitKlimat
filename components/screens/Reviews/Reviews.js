import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";

import { Hgroup } from "@molecules";
import { Text, Button } from "@atoms";

import Review from "./Review";
import { Container } from "./styles";

const Reviews = () => {
  const dispatch = useDispatch();
  const addReview = useCallback(() => {
    dispatch(
      showModal({
        modalType: "filter",
      })
    );
  }, []);

  return (
    <Container className="container">
      <Hgroup h1="Отзывы наших клиентов" />
      <Review />
      <Review />
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
