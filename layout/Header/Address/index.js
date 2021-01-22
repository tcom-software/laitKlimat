import { SocialIcons, Location, WorkHours } from "@molecules";

import { StyledAddress } from "./styles";

const Address = () => {
  return (
    <StyledAddress>
      <div className="inner container">
        <SocialIcons />
        <Location icon />
        <WorkHours />
      </div>
    </StyledAddress>
  );
};

export default Address;
