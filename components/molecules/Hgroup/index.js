import { Text } from "@atoms";
import { StyledHgroup } from "./styles";

const Hgroup = ({ h1, h2, className = "" }) => {
  return (
    <StyledHgroup className={className} id="title">
      <Text tag="h1" sz="larg" clr="primary">
        {h1}
      </Text>
      {h2 && (
        <Text tag="h2" sz="normal" clr="primary">
          {h2}
        </Text>
      )}
    </StyledHgroup>
  );
};

export default Hgroup;
