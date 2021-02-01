import { Fragment } from "react";
import { Text } from "@atoms";

// const table = [
//   {
//     title: "Основные характеристики",
//     table: {
//       "Обслуживаемая площадь до": "20 м2",
//       "Мощность в режиме охлаждения": "1.47",
//       "Потребляемая мощность при охлаждении": "0.57",
//     },
//   },
//   {
//     title: "Дополнительные режимы",
//     table: {
//       "режим вентиляции (без охлаждения и обогрева)": "f",
//     },
//   },
//   { title: "Управление", table: {} },
//   {
//     title: "Особенности",
//     table: {
//       "Тип хладагента": "R 410A",
//       Фаза: "однофазный",
//     },
//   },
//   {
//     title: "Габариты",
//     table: {
//       "Внутреннего блока кондиционера (В)": "408",
//       "Внутреннего блока кондиционера (C)": "651",
//       "Внутреннего блока кондиционера (D)": "562",
//       "Вес внутреннего блока": "51",
//     },
//   },
// ];

const Characteristics = ({ data: { description, characteristics } }) => {
  return (
    <section className="characteristics">
      <div className="title">
        <Text tag="h4" sz="larg" className="container">
          Подробные характеристики
        </Text>
      </div>

      {characteristics.map(({ title, table }, idx) => (
        <Fragment key={idx}>
          <div className="line">
            <Text tag="p" sz="larg" className="container">
              {title || ""}
            </Text>
          </div>
          <table className="container">
            <tbody>
              {Object.entries(table).map(([key, value], idx) => (
                <tr key={idx}>
                  <td>
                    <Text tag="span" sz="normal" clr="primary">
                      {key}
                    </Text>
                  </td>
                  <td>
                    <Text tag="span" sz="normal" clr="secondary">
                      {value}
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      ))}
      <div className="title"></div>
      <Text tag="p" sz="normal" clr="primary" className="container">
        {description}
      </Text>
    </section>
  );
};

export default Characteristics;
