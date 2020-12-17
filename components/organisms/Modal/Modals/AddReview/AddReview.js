import { useState, useRef } from "react";
import { Button, Text, Icon, Input, Textarea } from "@atoms";
import { Container } from "./styles";

import FormWithBackground from "../FormWithBackground";

const AddReview = ({ modalRef, hideModal }) => {
  const [stars, setStars] = useState(2);
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const fileRef = useRef(null);

  const addReview = async e => {
    e.preventDefault();
    const {
      name,
      last_name,
      limitations,
      advantages,
      comment,
      rating,
      installed_conditioner,
      date,
    } = e.target;

    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("last_name", last_name.value);
    formData.append("installed_conditioner", installed_conditioner.value);
    formData.append("limitations", limitations.value);
    formData.append("advantages", advantages.value);
    formData.append("comment", comment.value);
    formData.append("date", date.value);
    formData.append("rating", stars);
    for (const file of files) {
      formData.append("file[]", file);
    }

    const projectId = "59";
    const fetchUrl = "http://projects-backend.ru/";
    const addReviewPath = "api/review";

    const url = `${fetchUrl}${addReviewPath}`;
    const json = await fetch(url, {
      method: "POST",
      headers: {
        projectId,
      },
      body: formData,
    });

    const response = await json.json();
  };

  return (
    <Container ref={modalRef}>
      <FormWithBackground
        id="fileUploadForm"
        hideModal={hideModal}
        handleSubmit={addReview}
        footerRenderProps={() => (
          <Button variant="primary" title="Отправить" type="submit" />
        )}
      >
        <Input type="text" label={"Имя"} name="name" required />
        <Input type="text" label={"Фамилия"} name="last_name" required />
        <Input
          type="text"
          label={"УСТАНОВЛЕННЫЙ КОНДИЦИОНЕР"}
          name="installed_conditioner"
        />
        <Input type="date" label={"ДАТА УСТАНОВКИ"} name="date" required />
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
        <Textarea type="text" name="limitations" label={"Недостатки"} />
        <Textarea
          type="text"
          name="advantages"
          label={"Преимущества"}
          required
        />
        <Textarea type="text" name="comment" label={"Описание"} />
        <input
          type="text"
          value={stars}
          name="rating"
          className="srOnly"
          required
        />
        <input
          type="file"
          name="file[]"
          className="srOnly"
          multiple
          ref={fileRef}
          onChange={e => {
            const { files } = e.target;
            setFiles(oldFiles => [...oldFiles, ...files]);

            for (const file of files) {
              let fr = new FileReader();
              fr.onload = function () {
                setImages(images => [fr.result, ...images]);
              };
              fr.readAsDataURL(file);
            }
          }}
        />
        <div className="images">
          <div className="add-new">
            <Text
              tag="span"
              clr="primary"
              sz="small"
              onClick={() => fileRef.current.click()}
            >
              загрузить изображение
            </Text>
          </div>
          {images?.map((image, idx) => (
            <div key={idx}>
              <img
                src={image}
                alt="photo"
                onClick={() => {
                  setImages(images => images.filter((_, index) => index !== idx));
                  setFiles(images => images.filter((_, index) => index !== idx));
                }}
              />
            </div>
          ))}
        </div>
      </FormWithBackground>
    </Container>
  );
};

export default AddReview;
