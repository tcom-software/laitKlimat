import { Icon, Text } from "@atoms";

const WorkHours = ({ className = "work-hours" }) => {
  return (
    <div className={className}>
      <Icon name="clock" fillRule="evenodd" />
      <span>
        <Text tag="span" sz="small" clr="white">
          ПН–ПТ: 09:00 – 21:00
        </Text>
        <Text tag="span" sz="small" clr="white">
          СБ-ВС: 10:00 – 20:00
        </Text>
      </span>
    </div>
  );
};

export default WorkHours;
