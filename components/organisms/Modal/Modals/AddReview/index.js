import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button, Text, Icon, Input, Textarea } from "@atoms";
import { Container } from "./styles";

import FormWithBackground from "../FormWithBackground";
import { showModal } from "@redux/actions/modal";
import { ReviewsService } from "api/ReviewsService";

const AddReview = ({ modalRef, hideModal }) => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [stars, setStars] = useState(5);
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // show add review success
  const showDone = () => {
    dispatch(
      showModal({
        modalType: "alert",
        modalProps: {
          heading: "Благодарим вас за оставленный отзыв",
        },
      })
    );
  };

  // add new review
  const addReview = async e => {
    e.preventDefault();
    setLoading(true);

    const tgt = e.target;
    const review = new FormData();
    review.append("name", tgt.name.value);
    review.append("last_name", tgt.last_name.value);
    review.append("installed_conditioner", tgt.installed_conditioner.value);
    review.append("limitations", tgt.limitations.value);
    review.append("advantages", tgt.advantages.value);
    review.append("comment", tgt.comment.value);
    review.append("date", tgt.date.value);
    review.append("rating", stars);
    for (const file of files) {
      review.append("file[]", file);
    }

    ReviewsService.addReview(review);

    setLoading(false);
    hideModal();
    setTimeout(showDone, 400);
  };

  return (
    <Container ref={modalRef}>
      <FormWithBackground
        id="fileUploadForm"
        hideModal={hideModal}
        handleSubmit={addReview}
        footerRenderProps={() => (
          <Button
            type="submit"
            title="Отправить"
            variant="primary"
            loading={loading}
          />
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
                  setImages(images =>
                    images.filter((_, index) => index !== idx)
                  );
                  setFiles(images =>
                    images.filter((_, index) => index !== idx)
                  );
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
