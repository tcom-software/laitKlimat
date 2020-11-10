import {
  InputFromTo,
  InputCheckbox,
  InputCheckboxImage,
  InputCheckboxImageSearch,
} from "@molecules";

import { Container } from "./styles";

const Filter = () => {
  return (
    <Container>
      <InputCheckboxImageSearch
        title="Производитель"
        inputName="brand"
        checkboxes={[
          { label: "Китай", image: "Ballu.png", count: "15", value: "20" },
          { label: "Корея", image: "Hisense.png", count: "8", value: "21-25" },
          { label: "США", image: "Hisense.png", count: "28", value: "26-35" },
          { label: "Япония", image: "Hitachi.png", count: "9", value: "36-50" },
          { label: "Япония", image: "Hisense.png", count: "9", value: "36-50" },
          { label: "Корея", image: "Hisense.png", count: "8", value: "21-25" },
          { label: "США", image: "Dantex.png", count: "28", value: "26-35" },
          { label: "Япония", image: "Hisense.png", count: "9", value: "36-50" },
          { label: "Япония", image: "Denko.png", count: "9", value: "36-50" },
          { label: "Корея", image: "Dahatsu.png", count: "8", value: "21-25" },
          { label: "США", image: "Dantex.png", count: "28", value: "26-35" },
          { label: "Япония", image: "Denko.png", count: "9", value: "36-50" },
          { label: "Япония", image: "Denko.png", count: "9", value: "36-50" },
        ]}
      />
      <InputCheckbox
        title="Охлаждение / обогрев"
        inputName="cool_hot"
        checkboxes={[
          { label: "охлаждение", value: "cool" },
          { label: "обогрев", value: "hot" },
        ]}
      />
      <InputFromTo title="цена" inputName="price" />
      <InputFromTo
        title="Мощность в режиме охлаждения"
        inputName="power_cool"
      />
      <InputFromTo title="Мощность в режиме обогрева" inputName="power_hot" />
      <InputFromTo
        title="Потребляемая мощность при обогреве"
        inputName="necessary_power_hot"
      />
      <InputFromTo
        title="Потребляемая мощность при охлаждении"
        inputName="necessary_power_cool"
      />
      <InputCheckbox
        title="Режим приточной вентиляции"
        inputName="mode_cool_hot"
        checkboxes={[
          { label: "охлаждение", value: "cool" },
          { label: "обогрев", value: "hot" },
        ]}
      />
      <InputCheckbox
        inputName="some_radio_???"
        checkboxes={[
          { label: "На обогрев до -30 °С", value: "hot" },
          { label: "На охлаждения до -40 °С", value: "cool" },
          { label: "Инверторный", value: "invert" },
        ]}
      />
      <InputCheckbox
        title="Класс энергопотребления"
        inputName="energy_class"
        checkboxes={[
          { label: "A", value: "A" },
          { label: "A+", value: "A+" },
          { label: "A++", value: "A++" },
          { label: "A+++", value: "A+++" },
          { label: "A+++", value: "A+++" },
          { label: "A+++", value: "A+++" },
          { label: "B", value: "B" },
          { label: "C", value: "C" },
          { label: "D", value: "D" },
          { label: "E", value: "E" },
          { label: "F", value: "" },
        ]}
      />
      <InputCheckbox
        title="Обслуживаемая площадь"
        inputName="serviced_area"
        checkboxes={[
          { label: "до 20 м2", value: "20" },
          { label: "21 - 25 м2", value: "21-25" },
          { label: "26 - 35 м2", value: "26-35" },
          { label: "36 - 50 м2", value: "36-50" },
          { label: "51 - 70 м2", value: "51-70" },
          { label: "71 - 100 м2", value: "71-100" },
        ]}
      />
      <InputCheckboxImage
        title="Страна производителя"
        inputName="manufacturer_country"
        checkboxes={[
          { label: "Китай", image: "1.png", value: "20" },
          { label: "Корея", image: "2.png", value: "21-25" },
          { label: "США", image: "3.png", value: "26-35" },
          { label: "Япония", image: "1.png", value: "36-50" },
          { label: "Израиль", image: "2.png", value: "51-70" },
          { label: "Малайзия", image: "3.png", value: "71-100" },
          { label: "Россия", image: "1.png", value: "71-100" },
          { label: "Великобритания", image: "2.png", value: "71-100" },
        ]}
      />
      <InputCheckboxImage
        title="Страна бренда"
        inputName="brand_country"
        checkboxes={[
          { label: "Китай", image: "1.png", value: "20" },
          { label: "Корея", image: "2.png", value: "21-25" },
          { label: "США", image: "3.png", value: "26-35" },
          { label: "Япония", image: "1.png", value: "36-50" },
          { label: "Израиль", image: "2.png", value: "51-70" },
          { label: "Малайзия", image: "3.png", value: "71-100" },
          { label: "Россия", image: "1.png", value: "71-100" },
          { label: "Великобритания", image: "2.png", value: "71-100" },
          { label: "Малайзия", image: "3.png", value: "71-100" },
          { label: "Россия", image: "1.png", value: "71-100" },
          { label: "Великобритания", image: "2.png", value: "71-100" },
          { label: "Великобритания", image: "2.png", value: "71-100" },
        ]}
      />
    </Container>
  );
};

export default Filter;
