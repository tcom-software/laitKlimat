import { useCallback } from "react";
import { showModal } from "@redux/actions/modal";

// atoms
import Text from "@atoms/Text";
import Icon from "@atoms/Icon";
import Image from "@atoms/Image";
import Button from "@atoms/Button";

// buttons
import ButtonOrderOneClick from "@atoms/Button/ButtonOrderOneClick";
import ButtonAddToBasket from "@atoms/Button/ButtonAddToBasket";
import ButtonCredit from "@atoms/Button/ButtonCredit";
import { useDispatch } from "react-redux";

const TableComponent = ({ data }) => {
  const types = {
    text: Text,
    image: Image,
  };
  const Component = types[data.type];
  return <Component {...data.value}>{data.value.text}</Component>;
};

const Info = ({
  data: { table, creditFrom, productName, price, articule },
}) => {
  const dispatch = useDispatch();

  const openCompare = () => {
    dispatch(
      showModal({
        modalType: "compare",
        modalProps: {
          productId: articule,
        },
      })
    );
  };

  // name = "head" | "body" | "footer"
  const renderTableRows = name => {
    return (
      <>
        {table[name].map(({ key, value, className, notRender }, idx) =>
          !notRender ? (
            <tr className={className} key={idx}>
              <td {...(key.colSpan ? { colSpan: key.colSpan } : {})}>
                <TableComponent data={key} />
              </td>
              <td>{value && <TableComponent data={value} />}</td>
            </tr>
          ) : null
        )}
      </>
    );
  };

  return (
    <section className="right-side">
      <table>
        <thead>{renderTableRows("head")}</thead>
        <tbody>{renderTableRows("body")}</tbody>
        <tfoot>{renderTableRows("footer")}</tfoot>
      </table>
      <div className="row">
        <Icon name="compare" fill="tercary" onClick={openCompare} />
        <Text tag="span" sz="normal" clr="tercary">
          Сравнить
        </Text>
      </div>
      <div className="btn-group">
        <ButtonAddToBasket product={{ id: articule, price }} />
        <ButtonOrderOneClick />
        <ButtonCredit creditData={{ price, productName }} />
        <Button
          variant="tercary"
          title={`В кредит от <strong>${creditFrom}</strong>/месяц`}
        />
      </div>
    </section>
  );
};

export default Info;
