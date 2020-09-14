import { Image, Text, Button } from "@atoms";
import { Container } from "./styles";

const info = [
  { title: "Обслуживаемая площадь до", value: "20 м2" },
  { title: "Стоимость установки", value: "14 900 ₽" },
  { title: "Доставка в пределах МКАД", value: "бесплатно" },
  { title: "В кредит от", value: "645 р./месяц" },
];

const Product = () => {
  return (
    <Container>
      <div className="inner">
        <section className="product">
          <div className="articule">
            <span>{"Артикул:\n1464"}</span>
            <Image path="/images/product/market" type="png" />
          </div>
          <Image path="/images/product/product" type="png" />
          <div className="image-wrapper">
            <div className="sale">
              <Text tag="span" sz="small" bold>
                Получить скидку %
              </Text>
            </div>
            <Image path="/images/product/gift" type="png" className="gift" />
          </div>
        </section>
        <Text tag="span" sz="larg" clr="secondary" bold className="title">
          Besshof STARK-ZS/ZU-T07KC
        </Text>
        <section className="price row">
          <Image path="/images/product/logo" type="png" />
          <Button title="Купить в 1 клик" variant="tercary" />
          <Text tag="span" sz="larg" clr="tercary" bold className="price">
            15 494 ₽
          </Text>
        </section>
        <section className="info">
          <table>
            {info.map(({ title, value }, idx) => (
              <tr key={idx}>
                <td>
                  <Text tag="span" sz="normall">
                    {title}
                  </Text>
                </td>
                <td>
                  <Text tag="span" sz="normall">
                    {value}
                  </Text>
                </td>
              </tr>
            ))}
          </table>
        </section>
        <section className="btn-group row">
          <Button title="купить в кредит" variant="tercary" />
          <Button title="купить" />
        </section>
      </div>
    </Container>
  );
};

export default Product;
