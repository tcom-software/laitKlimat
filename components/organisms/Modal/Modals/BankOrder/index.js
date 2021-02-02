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

const BankOrder = ({
  modalRef,
  hideModal,
  modalProps: { products, totalPrice, callBack },
}) => {
  const phoneRef = useRef(null);

  const [bank, setBank] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (phoneRef.current) {
      if (!isValidPhoneNumber(phone)) {
        phoneRef.current.setCustomValidity("Invalid phone format");
      } else {
        phoneRef.current.setCustomValidity("");
      }
    }
  }, [phone]);

  // do order
  const handleOnSubmit = e => {
    e.preventDefault();

    const details = {
      sum: totalPrice,
      shopId: "xolodnoeleto",
      orderNumber: Date.now(),
      showcaseId: "02134756-d7d0-4e9a-a389-3495bf3baacd",
      customerName: e.target.customerName.value,
      customerEmail: e.target.customerEmail.value,
      customerPhone: e.target.customerPhone.value,
      ...products.reduce(
        (acc, { price, productName, count }, index) => ({
          ...acc,
          [`itemPrice_${index}`]: price,
          [`itemName_${index}`]: productName,
          [`itemQuantity_${index}`]: count ?? 1,
        }),
        {}
      ),
    };

    const formBody = new URLSearchParams(details).toString();

    fetch("/api/tinkoffOrder", {
      method: "POST",
      body: formBody,
    })
      .then(res => res.json())
      .then(data => {
        window.open(data.redirectUrl, "__blank");
      })
      .finally(() => {
        hideModal();
        callBack && callBack();
      });

    if (process.env.NODE_ENV === "production") {
      e.preventDefault();
      YM.OstavitNomerAll();
      GTAG.OstavitNomerAll();
      YM.KupitVKredit();
      GTAG.KupitVKredit();
    }
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
              <form onSubmit={handleOnSubmit}>
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
