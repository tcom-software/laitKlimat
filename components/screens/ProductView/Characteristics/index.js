import { Fragment } from "react";
import { Text } from "@atoms";

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
