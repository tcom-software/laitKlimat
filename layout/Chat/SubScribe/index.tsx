import { useState } from "react";
import Button from "@atoms/Button";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "utils/cookies";
import GTAG from "utils/gtag";
import YM from "utils/yandex";

// @ts-ignore
import Input from "react-phone-number-input/input";
import { isValidPhoneNumber } from "react-phone-number-input";

const SubScribe = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (!isValidPhoneNumber(phone)) {
      setShowError(true);
      return;
    }

    const product_id = router.query.product;

    let is_unique: any = getCookie("is_unique");
    if (is_unique === null) {
      setCookie("is_unique", true, 365);
      is_unique = true;
    } else if (is_unique) {
      setCookie("is_unique", false, 365);
      is_unique = false;
    }

    const body = JSON.stringify({
      name: e.target.name.value || "",
      email: e.target.email.value || "",
      url: router.query.asPath,
      in_cart: Boolean(product_id),
      product_id,
      is_unique,
      phone,
    });

    YM.OstavitNomerChat();
    GTAG.OstavitNomerChat();

    YM.OstavitNomerAll();
    GTAG.OstavitNomerAll();

    setLoading(true);
    fetch("/api/chatFeedBack", {
      method: "POST",
      body: body,
    }).finally(() => setLoading(false));

    console.log(body);
  };

  return (
    <form className="fielads" onSubmit={handleOnSubmit}>
      <legend>Заполните пожалуйста информацию</legend>
      <label>
        <span>Ваше имя: </span>
        <input autoComplete="off" name="name" />
      </label>
      <label>
        <span>Телефон: </span>
        <span className="required">*</span>
        <Input required international value={phone} onChange={setPhone} />
      </label>
      <label>
        <span>Эл. почта: </span>
        <input autoComplete="off" name="email" type="email" />
      </label>
      {showError && !isValidPhoneNumber(phone) && (
        <span style={{ color: "#ff9b9b", fontWeight: "bold" }}>
          Неправильный номер телефона
        </span>
      )}
      <Button
        type="submit"
        variant="secondary"
        title="Отправить"
        loading={loading}
        loadingMode="light"
      />
    </form>
  );
};

export default SubScribe;
