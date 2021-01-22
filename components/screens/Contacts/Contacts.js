import { Text } from "@atoms";
import { Hgroup, Location, WorkHours, CallUs } from "@molecules";

import { Container } from "./styles";

const Contacts = () => {
  return (
    <Container>
      <Hgroup h1="КОНТАКТЫ" className="container" />
      <section className="main">
        <div className="title">
          <Text tag="h2" clr="white" sz="larg" className="container">
            Юридическая информация
          </Text>
        </div>

        <div className="line"></div>
        <div className="container">
          <Text tag="p" clr="primary" sz="normal">
            {
              'ООО "РУССТРОЙМОНТАЖ"\nИНН: 7703814824\nКПП: 771501001\nОГРН:1147746853418\nОКПО: 34572529\nРасчетный счет:40702810338000007455\nБанк: ПАО СБЕРБАНК\nБИК: 044525225\nКорреспондентский счет: 30101.810.4.00000000225'
            }
          </Text>
        </div>
        <div className="line"></div>
        <div className="container">
          <Text tag="p" clr="primary" sz="normal">
            {
              "Если продаете климатическое оборудование и расходные материалы, пишите на :\n<strong>zakup@laitklimat.ru</strong>\nПо вопросам заказа кондиционеров, их установки и технической консультации, пишите на :\n<strong>zakaz@laitklimat.ru</strong>\nЕсли хотите сотрудничать в сфере продвижения нашего сайта или наших услуг, пишите на:\n<strong>info@laitklimat.ru</strong>\nЕсли хотите сотрудничать в сфере продвижения нашего сайта или наших услуг, пишите на:\n<strong>support@laitklimat.ru</strong>"
            }
          </Text>
        </div>
        <div className="title footer">
          <div className="container">
            <Location size="larg" icon />
            <WorkHours size="larg" />
            <CallUs size="larg" />
          </div>
        </div>
        <div id="map"></div>
      </section>
    </Container>
  );
};

export default Contacts;
