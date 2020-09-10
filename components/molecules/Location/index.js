import { Icon, Text } from "@atoms";

const Location = ({ className = "location" }) => {
  return (
    <div className={className}>
      <Icon name="location" />
      <Text tag="span" sz="small" clr="white">
        {"127254, г. Москва,\n Огородный проезд д.6 стр.1"}
      </Text>
    </div>
  );
};

export default Location;
