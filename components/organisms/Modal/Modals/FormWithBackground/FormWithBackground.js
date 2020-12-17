import { Button, Text, Icon, Input, Textarea } from "@atoms";
import { rest } from "lodash";
import { StyledForm } from "./styles";

const FormWithBackground = ({
  hideModal,
  children,
  footerRenderProps,
  handleSubmit,
  id,
}) => {
  return (
    <StyledForm onSubmit={handleSubmit} id={id}>
      <header>
        <div className="close" onClick={hideModal}>
          <Icon name="close" fill="secondary" />
        </div>
      </header>
      <main>{children}</main>
      <footer>{footerRenderProps()}</footer>
    </StyledForm>
  );
};

export default FormWithBackground;
