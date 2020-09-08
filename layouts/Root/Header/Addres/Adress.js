import { Icon } from "@atoms";

import { StyledAddress } from "./styles";

const Address = () => {
  return (
    <StyledAddress>
      <div className="inner container">
        <div className="icons">
          <Icon name="instagram" />
          <Icon name="vk" />
          <Icon name="facebook" />
        </div>
        <div className="address">
          <Icon name="location" />
          <span>127254, г. Москва, Огородный проезд д.6 стр.1</span>
        </div>
        <div className="work-hours">
          <Icon name="clock" fillRule="evenodd" />
          <span>ПН–ПТ: 09:00 – 21:00</span>
          <span>СБ-ВС: 10:00 – 20:00</span>
        </div>
      </div>
    </StyledAddress>
  );
};

export default Address;
