import { StyledCeckbox } from "./styles";

const Checkbox = ({ name = "", value = "", ...rest }) => {
  return <StyledCeckbox type="checkbox" name={name} value={value} {...rest} />;
};

export default Checkbox;
