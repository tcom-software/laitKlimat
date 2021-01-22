import { Hgroup } from "@molecules";
import { Container } from "./styles";
import ClientView from "./ClientView";

const clients = [
  { frontUrl: "sberbank", name: 'ПАО "Сбербанк"'},
  { frontUrl: "evropa-bank", name: 'ПАО "Кредит ЕвропаБанк"'},
  { frontUrl: "iran", name: 'Посольство Исламской республики Иран в РФ'},
  { frontUrl: "min_oborona", name: 'ФАУ 25 ГосНИИ Химмотологии Минобороны России'},
  { frontUrl: "lingvisticheski-centr", name: 'ООО "Международный Лингвистический Центр"'},
  { frontUrl: "pervaya-toplivnaya", name: 'ООО "Первая топливная компания"'},
  { frontUrl: "neyrovita", name: 'ЗАО "Клиника НейроВита"'},
  { frontUrl: "astkol-alfa", name: 'ООО "АСТКОЛ-АЛЬФА"'},
  { frontUrl: "psb", name: 'ООО "ПСБ"'},
  { frontUrl: "kom-tel", name: 'ЗАО "Ком. ТЕЛ Связь"'},
  { frontUrl: "moscowmedia", name: 'АО "Москва Медиа"'},
  { frontUrl: "korona-layk", name: 'ООО "Научно-технический центр "КОРОНА-ЛАК"'},
  { frontUrl: "ntv", name: 'ООО "Научная лаборатория высоких технологий"'},
  { frontUrl: "Pravda_Gazeta_logo", name: 'АНО "Редакция Газеты ПРАВДА"'},
  { frontUrl: "tele_ru", name: 'ООО "Теле.ру"'},
  { frontUrl: "intex", name: 'ООО "Инновационные технологии"'},
  { frontUrl: "vnukovo_logo", name: 'АО "Международный аэропорт Внуково"'},
];

const ClientsView = () => {
  return (
    <Container className="container">
      <Hgroup
        h1="Наши клиенты"
        h2="Мы не просто пишем, наведите мышку на логотип и увидите фрагмент печати на накладных."
      />
      <div className="gallery">
        {clients.map((client, idx) => (
          <ClientView key={idx} {...client} />
        ))}
      </div>
    </Container>
  );
};

export default ClientsView;
