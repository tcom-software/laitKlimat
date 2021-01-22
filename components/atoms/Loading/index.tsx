import { Container } from "./styles";
import cn from "classnames";
import { FC } from "react";

interface Props {
  mode: "dark" | "light";
  className?: string;
}

const Loading: FC<Props> = ({ mode, className }) => {
  return (
    <Container className={cn([className])}>
      <img src={`/images/loading.svg`} className={cn([mode])} alt="loader" />
    </Container>
  );
};

export default Loading;
