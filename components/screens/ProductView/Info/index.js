import { Text, Image, Icon, Button } from "@atoms";

const Info = () => {
  return (
    <section className="info">
      <table>
        <thead>
          <tr>
            <td colSpan="2">
              <Text tag="h4" sz="normal" clr="secondary">
                Лучшая цена на рынке
              </Text>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <td>
              <Text tag="span" sz="normal" clr="primary">
                цена
              </Text>
            </td>
            <td>
              <Text tag="span" sz="larg" clr="tercary">
                15 494 ₽
              </Text>
            </td>
          </tr>
          <tr className="articule">
            <td>
              <Text tag="span" sz="normal" clr="primary">
                Артикул: 1464
              </Text>
            </td>
            <td></td>
          </tr>
          <tr className="market">
            <td>
              <Text tag="span" sz="normal" clr="primary">
                {"Товар выставлен на Маркете <br /> Есть в наличии"}
              </Text>
            </td>
            <td>
              <Image path="/images/product/market" type="png" />
            </td>
          </tr>
          <tr>
            <td>
              <Text tag="span" sz="normal" clr="primary">
                Стоимость установки
              </Text>
            </td>
            <td>
              <Text tag="span" sz="normal" clr="tercary">
                ₽13522
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text tag="span" sz="normal" clr="primary">
                Доставка в пределах МКАД
              </Text>
            </td>
            <td>
              <Text tag="span" sz="normal" clr="tercary">
                бесплатно
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text tag="span" sz="normal" clr="primary">
                Заказ от 40 000 руб. 3% предоплата
              </Text>
            </td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Text tag="h4" sz="normal" clr="secondary">
                Антибактериальный фильтр в подарок
              </Text>
            </td>
            <td>
              <Image path="/images/product/gift" type="png" />
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="row">
        <Icon name="compare" fill="tercary" />
        <Text tag="span" sz="normal" clr="tercary">
          Сравнить
        </Text>
      </div>
      <section className="btn-group">
        <Button variant="primary" title="купить" />
        <Button variant="tercary" title="Купить в 1 клик" />
        <Button variant="secondary" title="купить в кредит" />
        <Button variant="tercary" title="В кредит от 495 р./месяц" />
      </section>
    </section>
  );
};

export default Info;
