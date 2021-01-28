import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import YM from "utils/yandex";
import GTAG from "utils/gtag";

import { Container } from "./styles";
import { Icon, Button, Text, Input } from "@atoms";
import { getCurrentCategoryTitle } from "@redux/selectors/site";

import PhoneInput from "react-phone-number-input/input";
import { isValidPhoneNumber } from "react-phone-number-input";

const banks = {
  tinkoff: "Тинькофф банк",
};

const data = {
  hiddenInputs: [
    { name: "shopId", value: "xolodnoeleto" },
    { name: "showcaseId", value: "02134756-d7d0-4e9a-a389-3495bf3baacd" },
    { name: "promoCode", value: "default" },
    { name: "sum", value: "ref:price" },
    { name: "itemName_0", value: "ref:productName" },
    { name: "itemQuantity_0", value: "1" },
    { name: "itemPrice_0", value: "ref:price" },
    { name: "itemCategory_0", value: "ref:categoryTitle" },
    { name: "orderNumber", value: "ref:date" },
  ],
};

const BankOrder = ({
  modalRef,
  hideModal,
  modalProps: { price, productName },
}) => {
  const [bank, setBank] = useState("");
  const [loading, setLoading] = useState(false);
  const categoryTitle = useSelector(getCurrentCategoryTitle);

  // send data
  const handleSubmit = e => {
    e.preventDefault();

    YM.OstavitNomerAll();
    GTAG.OstavitNomerAll();
  };

  const hiddenData = {
    price,
    productName,
    categoryTitle: categoryTitle?.subSubCategory,
    date: Date.now(),
  };

  return (
    <Container ref={modalRef} role="dialog">
      {/* <div>
        <Icon name="close" width={20} height={20} onClick={hideModal} />
      </div> */}
      <div className="modal-content">
        <div className="modal-header">
          {/* <Icon name="close" className="close" width={20} height={20} onClick={hideModal} /> */}
          <Text tag="p" sz="normal" clr="primary">
            {bank || "Выберите банк"}
          </Text>
        </div>
        <div className="modal-body">
          {Boolean(bank) || (
            <div onClick={() => setBank(banks.tinkoff)}>
              <div className="banks">
                <img
                  src="/images/logo/tinkoff.jpg"
                  alt="tinkoffbank"
                  height="100px"
                />
                <Text tag="p" sz="normal" clr="tercary">
                  Тинькофф банк
                </Text>
              </div>
            </div>
          )}
          {Boolean(bank) && (
            <>
              <Text tag="h1" clr="secondary">
                Заявка на получение кредита в Тинькофф банке
              </Text>
              <Text tag="p" clr="primary" sz="small">
                1. Ставка по кредиту от 16% годовых
              </Text>
              <Text tag="p" clr="primary" sz="small">
                2. Для каждого клиента ставка по кредиту рассчитывается
                индивидуально
              </Text>
              <Text tag="p" clr="primary" sz="small">
                3. Срок кредитования от 3 до 24 месяцев
              </Text>
              <Text tag="p" clr="primary" sz="small">
                4. Одобрение от 2х минут после получения заявки банком
              </Text>
              <form
                method="post"
                target="_blank"
                onSubmit={handleSubmit}
                action="https://loans.tinkoff.ru/api/partners/v1/lightweight/create"
              >
                {data.hiddenInputs.map(({ name, value }) => (
                  <input
                    name={name}
                    value={
                      value.startsWith("ref")
                        ? hiddenData[value.split(":")[1]]
                        : value
                    }
                    type="hidden"
                  />
                ))}

                <input
                  type="submit"
                  value="Купи в кредит"
                  style={{ display: "none" }}
                />

                <Input
                  required
                  type="text"
                  placeholder="ФИО:"
                  autoComplete="off"
                  name="customerName"
                />
                <Input
                  required
                  type="text"
                  autoComplete="off"
                  name="customerEmail"
                  placeholder="Адрес электронной почты:"
                />
                <PhoneInput
                  // required
                  // type="tel"
                  // autoComplete="off"
                  // name="customerPhone"
                  // placeholder="Номер телефона:"
                  required
                  international
                  placeholder="номер"
                  name="customerPhone"
                />

                <div className="btn-group">
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => setBank("")}
                  >
                    Назад
                  </Button>
                  <Button variant="primary" type="submit">
                    Далее
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default BankOrder;
