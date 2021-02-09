import { Container } from "./styles";
import { Text, Icon } from "@atoms";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";
import { useCallback } from "react";
import cn from "classnames";

const Review = ({ data, loading }) => {
  const dispatch = useDispatch();

  const handleShowImage = useCallback(url => {
    dispatch(
      showModal({
        modalType: "imageView",
        modalProps: {
          url,
          alt: "review photo",
          responsive: false,
        },
      })
    );
  }, []);

  const {
    date,
    name,
    images,
    rating,
    comment,
    last_name,
    advantages,
    limitations,
    admin_comment,
    installed_conditioner,
  } = data;

  return (
    <Container className={cn({ "g-loading": loading })}>
      <div className="profile">
        <img src="/images/profile.png" alt="user" />
      </div>

      <div className="title">
        <div className="name">
          <Text tag="h4" clr="secondary" sz="larg">
            {`${name} ${last_name}`}
          </Text>
          {/* <Text tag="p" clr="primary" sz="normal" className="city">
            {city}
          </Text> */}
        </div>
        <div className="stars">
          {[...Array(rating)].map((_, idx) => (
            <Icon name="star" key={idx} />
          ))}
        </div>
      </div>

      <div className="main">
        {advantages && (
          <div className="review">
            <Text tag="span" clr="tercary" sz="normal" bold>
              Преимущества
            </Text>
            <Text tag="p" clr="primary" sz="normal">
              {advantages}
            </Text>
          </div>
        )}
        {limitations && (
          <div className="review">
            <Text tag="span" clr="tercary" sz="normal" bold>
              Недостатки
            </Text>
            <Text tag="p" clr="primary" sz="normal">
              {limitations}
            </Text>
          </div>
        )}
        {comment && (
          <div className="review">
            <Text tag="span" clr="tercary" sz="normal" bold>
              Описание
            </Text>
            <Text tag="p" clr="primary" sz="normal">
              {comment}
            </Text>
          </div>
        )}

        <ul className="conditioner">
          {installed_conditioner && (
            <li>
              <Text tag="span" clr="tercary" sz="normal" bold>
                Установленный кондиционер:
              </Text>
              <Text tag="span" clr="primary" sz="normal">
                {installed_conditioner}
              </Text>
            </li>
          )}
          <li>
            <Text tag="span" clr="tercary" sz="normal" bold>
              Дата установки:
            </Text>
            <Text tag="span" clr="primary" sz="normal">
              {date}
            </Text>
          </li>
        </ul>
        <div className="admin">
          <Text tag="span" clr="tercary" sz="normal" bold>
            {"Администратор сайта Лайт Климат"}
          </Text>
          <Text tag="p" clr="primary" sz="normal">
            {admin_comment}
          </Text>
        </div>
        {images && (
          <div className="images">
            {images.map(({ path }, idx) => (
              <img
                key={idx}
                alt="photo"
                src={path}
                onClick={() => handleShowImage(path)}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Review;
