import { Image, Icon, Text } from "@atoms";

const Location = ({ className = "location", size = "small", icon }) => {
  return (
    <div className={className}>
      {icon ? (
        <Icon name="location" />
      ) : (
        <Image path="/images/footer/location" type="png" />
      )}
      <Text tag="span" sz={size} clr="white">
        {"127254, г. Москва,\n Огородный проезд д.6 стр.1"}
      </Text>
    </div>
  );
};

export default Location;
