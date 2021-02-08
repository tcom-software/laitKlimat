import Icon from "@atoms/Icon";
import Text from "@atoms/Text";
import NextLink from "@atoms/NextLink";
import Image from "@atoms/Image";
import Payment from "@molecules/Payment";
import Location from "@molecules/Location";
import { StyledFooter } from "./styles";

const menu = [
  {
    id: 1,
    title: "O компании",
    list: [
        { href: "/certificates", text: "Наши сертификаты" },
        { href: "/clients", text: "Наши клиенты" },
        { href: "/gallery", text: "Фото наших монтажей" },
        { href: "/reviews", text: "Отзывы наших клиентов" },
    ],
  },
  {
    id: 2,
    title: "Сервисы",
    list: [
      { href: "/placing-and-montage", text: "Установка и монтаж" },
      { href: "/delivery", text: "Доставка и оплата" },
      { href: "/service-center", text: "Сервис центр" },
      { href: "/contacts", text: "Контакты" },
    ],
  },
  // {
  //   id: 3,
  //   title: "Категории",
  //   list: [
  //     { href: null, text: "Кондиционеры и увлажнители" },
  //     { href: null, text: "Системы вентиляции" },
  //     { href: null, text: "Отопление и водоснабжение" },
  //     { href: null, text: "Обогреватели и камины" },
  //     { href: null, text: "Холодильное оборудование" },
  //   ],
  // },
  {
    id: 4,
    title: "Свяжитесь с нами",
    list: [
      { href: null, text: "+7[495] 668-65-11" },
      { href: null, text: "Оставить мой номер" },
      { href: null, text: "zakup@laitklimat.ru" },
      { href: null, text: "info@laitklimat.ru" },
      { href: null, text: "support@laitklimat.ru" },
    ],
  },
  {
    id: 5,
    title: "Способы оплаты",
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
                <Text tag="span" clr="white" sz="normal">
                  {title}
                </Text>
                {list ? (
                  <ul className="list">
                    {list.map(({ href, text }, idx) => (
                      <li key={idx}>
                        {
                          !!href ? (
                              <NextLink href={href}>
                                <Text tag="span" clr="white" sz="small">
                                  {text}
                                </Text>
                              </NextLink>
                          ) : (
                              <Text tag="span" clr="white" sz="small">
                                {text}
                              </Text>
                          )
                        }
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Payment />
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
          <Location size="normal" />
          <Text tag="p" clr="white" sz="normal" className="copyright">
            © 2012—2020 Компания Лайт климат
          </Text>
        </address>
      </div>
      <article>
        <Text tag="p" sz="smaller" clr="white">
          {
            "Администрация сайта не несет ответственности за размещаемые пользователями материалы (информацию,\n изображения), их содержание и качество."
          }
        </Text>
      </article>
    </StyledFooter>
  );
};

export default Footer;
