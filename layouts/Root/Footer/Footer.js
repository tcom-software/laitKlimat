import { Icon, Link, Text, NextLink, Image } from "@atoms";
import { StyledFooter } from "./styles";

const menu = [
  {
    id: 1,
    title: "O компании",
    list: [
      "Наши сертификаты",
      "Наши клиенты",
      "Фото наших монтажей",
      "Отзывы наших клиентов",
    ],
  },
  {
    id: 2,
    title: "Сервисы",
    list: [
      "Установка и монтаж",
      "Доставка и оплата",
      "Сервис центр",
      "Контакты",
    ],
  },
  {
    id: 3,
    title: "Категории",
    list: [
      "Кондиционеры и увлажнители",
      "Системы вентиляции",
      "Отопление и водоснабжение",
      "Обогреватели и камины",
      "Холодильное оборудование",
    ],
  },
  {
    id: 4,
    title: "Свяжитесь с нами",
    list: [
      "+7[495] 668-65-11",
      "Оставить мой номер",
      "zakup@laitklimat.ru",
      "info@laitklimat.ru",
      "support@laitklimat.ru",
    ],
  },
  {
    id: 5,
    title: "Способы оплаты",
    imageType: "png",
    paths: [
      "maestro",
      "master-card",
      "uniteller",
      "american-express",
      "mir",
      "visa",
    ],
  },
];

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container inner">
        <NextLink href="/" className="link-wrapper">
          <Image
            alt="logo"
            path="/images/logo/logo"
            type="png"
            className="logo"
          />
        </NextLink>
        <section className="menu">
          <ul>
            {menu.map(({ id, title, list, paths, imageType }, idx) => (
              <li key={id}>
                <Text tag="span" clr="white" sz="larg">
                  {title}
                </Text>
                {list ? (
                  <ul className="list">
                    {list.map((text, idx) => (
                      <li key={idx}>
                        <Text tag="span" clr="white" sz="normal">
                          {text}
                        </Text>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="icons">
                    {paths.map((path, idx) => (
                      <li key={idx}>
                        <Image
                          path={`/images/footer/${path}`}
                          type={imageType}
                        />
                      </li>
                    ))}
                  </ul>
                )}
                {idx === 0 && (
                  <div className="social-icons">
                    <Icon name="instagram" />
                    <Icon name="vk" />
                    <Icon name="facebook" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
        <address>
          <div className="location">
            <Image path="/images/footer/location" type="png" />
            <Text tag="span" clr="white" sz="larg">
              {"127254, г. Москва,\n Огородный проезд д.6 стр.1"}
            </Text>
          </div>
          <Text tag="p" clr="white" sz="larg" className="copyright">
            © 2012—2020 Компания Лайт климат
          </Text>
        </address>
      </div>
      <article>
        <Text tag="p" sz="small" clr="white">
          {
            "Администрация сайта не несет ответственности за размещаемые пользователями материалы (информацию,\n изображения), их содержание и качество."
          }
        </Text>
      </article>
    </StyledFooter>
  );
};

export default Footer;
