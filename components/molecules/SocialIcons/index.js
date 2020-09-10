import { Icon } from "@atoms";

const SocialIcons = ({ className = "icons" }) => {
  return (
    <div className={className}>
      <Icon name="instagram" />
      <Icon name="vk" />
      <Icon name="facebook" />
    </div>
  );
};

export default SocialIcons;
