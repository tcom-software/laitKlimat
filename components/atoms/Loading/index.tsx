import { Container } from "./styles";
import cn from "classnames";
import { FC } from "react";

interface Props {
  mode: "dark" | "light";
}

const Loading: FC<Props> = ({ mode }) => {
  return (
    <Container>
      <img src={`/images/loading.svg`} className={cn([mode])} alt="loader" />
    </Container>
  );
};

export default Loading;
