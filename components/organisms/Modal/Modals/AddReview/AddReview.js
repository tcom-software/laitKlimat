import { useState, useRef } from "react";
import { Button, Text, Icon, Input, Textarea } from "@atoms";
import { Container } from "./styles";

const AddReview = ({ modalRef, hideModal }) => {
  const [stars, setStars] = useState(2);
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const advantagesRef = useRef(null);
  const descriptionRef = useRef(null);
  const disadvantagesRef = useRef(null);

  return (
    <Container ref={modalRef}>
      <div className="wrapper">
        <header>
          <div className="close" onClick={hideModal}>
            <Icon name="close" fill="secondary" />
          </div>
        </header>
        <main>
          <Input type="text" inputRef={nameRef} label={"Имя"} />
          <Input type="text" inputRef={surnameRef} label={"Фамилия"} />
          <div className="stars">
            <Text tag="p" clr="secondary" sz="normal">
              Оценка
            </Text>
            {[...Array(5)].map((_, idx) => (
              <Icon
                key={idx}
                name="star"
                data-fill={stars <= idx}
                onClick={() => setStars(idx + 1)}
              />
            ))}
          </div>
          <Textarea
            type="text"
            inputRef={disadvantagesRef}
            label={"Недостатки"}
          />
          <Textarea
            type="text"
            inputRef={advantagesRef}
            label={"Преимущества"}
          />
          <Textarea type="text" inputRef={descriptionRef} label={"Описание"} />
          <div className="images">
            <div className="add-new">
              <Text tag="span" clr="primary" sz="small">
                загрузить изображение
              </Text>
            </div>
            <div>
              <img src="/images/gallery/1_min.jpg" alt="photo" />
            </div>
            <div>
              <img src="/images/gallery/2_min.jpg" alt="photo" />
            </div>
            <div>
              <img src="/images/gallery/3_min.jpg" alt="photo" />
            </div>
          </div>
        </main>
        <footer>
          <Button variant="primary" title="Отправить" />
        </footer>
      </div>
    </Container>
  );
};

export default AddReview;
