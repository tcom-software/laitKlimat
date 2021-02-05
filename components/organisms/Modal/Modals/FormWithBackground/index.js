import { Button, Text, Icon, Input, Textarea } from "@atoms";
import { rest } from "lodash";
import { StyledForm } from "./styles";

let lastY;

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
      <main
        onTouchMove={function (e) {
          e.stopPropagation();
          lastY ?? (lastY = e.touches[0].clientY);
          if (e.touches[0].clientY < lastY) {
            e.currentTarget.scrollBy(0, 15);
          } else {
            e.currentTarget.scrollBy(0, -15);
          }
          lastY = e.touches[0].clientY;
        }}
      >
        {children}
      </main>
      <footer>{footerRenderProps()}</footer>
    </StyledForm>
  );
};

export default FormWithBackground;
