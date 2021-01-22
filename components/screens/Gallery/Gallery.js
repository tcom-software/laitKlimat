import { Hgroup } from "@molecules";
import { Container } from "./styles";

import ImageView from "./ImageView";

const IMAGE_COUNT = 53;

const Gallery = () => {
  return (
    <Container className="container">
      <Hgroup
        h1="Фото наших монтажей"
        h2="Мы установили более 50 000 кондиционеров."
      />
      <div className="gallery">
        {[...Array(IMAGE_COUNT)].map((_, idx) => (
          <ImageView key={idx} name={idx + 1} count={IMAGE_COUNT} />
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
