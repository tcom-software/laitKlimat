import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";
import { Text, Image, Icon, Button } from "@atoms";
import { useCallback } from "react";

const Info = ({ data: { table, creditFrom } }) => {
  const dispatch = useDispatch();
  const openCompare = () => {
    dispatch(
      showModal({
        modalType: "compare",
      })
    );
  };

  const TableComponent = useCallback(({ data }) => {
    const types = {
      text: Text,
      image: Image,
    };
    const Component = types[data.type];
    return <Component {...data.value}>{data.value.text}</Component>;
  }, []);

  // name = "head" | "body" | "footer"
  const renderTRs = name => {
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
    <section className="info">
      <table>
        <thead>{renderTRs("head")}</thead>
        <tbody>{renderTRs("body")}</tbody>
        <tfoot>{renderTRs("footer")}</tfoot>
      </table>
      <div className="row">
        <Icon name="compare" fill="tercary" onClick={openCompare} />
        <Text tag="span" sz="normal" clr="tercary">
          Сравнить
        </Text>
      </div>
      <section className="btn-group">
        <Button variant="primary" title="купить" />
        <Button variant="tercary" title="Купить в 1 клик" />
        <Button variant="secondary" title="купить в кредит" />
        <Button variant="tercary" title={`В кредит от <strong>${creditFrom}</strong>/месяц`} />
      </section>
    </section>
  );
};

export default Info;
