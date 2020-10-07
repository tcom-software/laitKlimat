import { Container } from "./styles";
import { Text, Icon } from "@atoms";

const r = {
  fullName: "Сергей Поляков",
  city: "г. Москва",
  stars: 5,
  review: {
    title: "Отличный магазин",
    message:
      "“Это вторая компания, куда я обратился за установкой кондиционера. В отличии от предыдущей, все соглашения по просмотру и установке, были выполнены с высоким качеством. Первое- соглашения о дате всегда сопровождались контрольным звонком, все было в оговоренные сроки и время. Второе -профессиональная работа монтажников. Компания достойная уважения, побольше таких. Рекомендую всем.”",
  },
  conditioner: {
    name: "Fujitsu ASYG09LLCE-R/AOYG09LLCE-R",
    date: "14.04.2020",
  },
  admin: {
    title: "Администратор сайта Лайт Климат",
    message:
      "Администратор сайта Лайт Климат Здравствуйте, Сергей Поляков. Спасибо Вам за отзыв, всегда готовы Вам помочь.",
  },
};

const Review = () => {
  const { fullName, city, review, conditioner, admin, stars } = r;

  return (
    <Container>
      <div className="profile">
        <img src="/images/profile.png" alt="user" />
      </div>

      <div className="title">
        <div className="name">
          <Text tag="h4" clr="secondary" sz="larg">
            {fullName}
          </Text>
          <Text tag="p" clr="primary" sz="normal" className="city">
            {city}
          </Text>
        </div>
        <div className="stars">
          {[...Array(stars)].map((_, idx) => (
            <Icon name="star" key={idx} />
          ))}
        </div>
      </div>

      <div className="main">
        <div className="review">
          <Text tag="span" clr="tercary" sz="normal" bold>
            {review.title}
          </Text>
          <Text tag="p" clr="primary" sz="normal">
            {review.message}
          </Text>
        </div>
        <ul className="conditioner">
          <li>
            <Text tag="span" clr="primary" sz="normal">
              Установленный кондиционер:
            </Text>
            <Text tag="span" clr="tercary" sz="normal" bold>
              {conditioner.name}
            </Text>
          </li>
          <li>
            <Text tag="span" clr="primary" sz="normal">
              дата установки:
            </Text>
            <Text tag="span" clr="tercary" sz="normal" bold>
              {conditioner.date}
            </Text>
          </li>
        </ul>
        <div className="admin">
          <Text tag="span" clr="tercary" sz="normal" bold>
            {admin.title}
          </Text>
          <Text tag="p" clr="primary" sz="normal">
            {admin.message}
          </Text>
        </div>
        <div className="images">
          <img src="/images/gallery/1_min.jpg" alt="photo" />
          <img src="/images/gallery/2_min.jpg" alt="photo" />
        </div>
      </div>
    </Container>
  );
};

export default Review;
