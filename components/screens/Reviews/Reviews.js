import { useCallback } from "react";
import { Text, Button } from "@atoms";
import { Hgroup } from "@molecules";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";

import { Container } from "./styles";
import Review from "./Review";

const Reviews = () => {
  const dispatch = useDispatch();
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
      <Review />
      <Review />
      <Text tag="span" clr="primary" sz="normal">
        Рейтинг нашей компании! 5 звезд на основе 15 отзывов
      </Text>
      <Button variant="primary" title="Добавить отзыв" onClick={addReview} />
    </Container>
  );
};

export default Reviews;
