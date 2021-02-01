import { useEffect, useRef, useState } from "react";
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
  const phoneRef = useRef(null);

  const [bank, setBank] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const categoryTitle = useSelector(getCurrentCategoryTitle);

  useEffect(() => {
    if (phoneRef.current) {
      if (!isValidPhoneNumber(phone)) {
        phoneRef.current.setCustomValidity("Invalid phone format");
      } else {
        phoneRef.current.setCustomValidity("");
      }
    }
  }, [phone]);

  // send data
  const handleOnSubmit = e => {
    YM.OstavitNomerAll();
    GTAG.OstavitNomerAll();

    YM.KupitVKredit();
    GTAG.KupitVKredit();
  };

  const hiddenData = {
    price,
    productName,
    date: Date.now(),
    categoryTitle: categoryTitle?.subSubCategory,
  };

  return (
    <Container ref={modalRef} role="dialog">
      <div className="modal-content">
        <div className="modal-header">
          <Text tag="p" sz="normal" clr="primary">
            {bank || "Выберите банк"}
          </Text>
        </div>
        <div className="modal-body">
          {Boolean(bank) || (
            <div onClick={() => setBank(banks.tinkoff)}>
              <div className="banks">
                <img
                  height="100px"
                  alt="tinkoffbank"
                  src="/images/logo/tinkoff.jpg"
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
                onSubmit={handleOnSubmit}
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
                  type="email"
                  autoComplete="off"
                  name="customerEmail"
                  placeholder="Адрес электронной почты:"
                />
                <Input>
                  <PhoneInput
                    required
                    international
                    value={phone}
                    ref={phoneRef}
                    onChange={setPhone}
                    placeholder="номер"
                    name="customerPhone"
                  />
                </Input>

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
