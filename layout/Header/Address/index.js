import SocialIcons from "@molecules/SocialIcons";
import Location from "@molecules/Location";
import WorkHours from "@molecules/WorkHours";

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
