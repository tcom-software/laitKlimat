import { useState } from "react";
import Button from "@atoms/Button";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "utils/cookies";
import GTAG from "utils/gtag";
import YM from "utils/yandex";

const SubScribe = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    const product_id = router.query.product;

    let is_unique: any = getCookie("is_unique");
    if (is_unique === null) {
      setCookie("is_unique", true, 365);
      is_unique = true;
    } else if (is_unique) {
      setCookie("is_unique", false, 365);
      is_unique = false;
    }

    const data = JSON.stringify({
      name: e.target.name.value || "",
      phone: e.target.phone.value,
      email: e.target.email.value || "",
      url: router.query.asPath,
      in_cart: Boolean(product_id),
      product_id,
      is_unique,
    });

    GTAG.NeDozvonilis();
    YM.NeDozvonilis();

    setLoading(true);
    fetch("http://back.projects-backend.ru/api/chatFeedBack", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    }).finally(() => setLoading(false));
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
        <input autoComplete="off" type="tel" name="phone" required />
      </label>
      <label>
        <span>Эл. почта: </span>
        <input autoComplete="off" name="email" type="email" />
      </label>
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
