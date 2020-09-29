import { Text } from "@atoms";
import { initializeStore } from "@redux/index";
import { Container } from "@styles/pages/certificates";

const certificates = [
  {
    name: "Abion",
    certificate: "1",
  },
  {
    name: "Aero",
    certificate: "2",
  },
  {
    name: "Aeronik",
    certificate: "3",
  },
  {
    name: "Airwell",
    certificate: "3",
  },
  {
    name: "Aux ",
    certificate: "4",
  },
  {
    name: "Axioma",
    certificate: "5",
  },
  {
    name: "Ballu",
    certificate: "6",
  },
  {
    name: "Centek",
    certificate: "7",
  },
  {
    name: "Cooper Hunter",
    certificate: "8",
  },
  {
    name: "Dahatsu",
    certificate: "9",
  },
  {
    name: "Daichi",
    certificate: "5",
  },
  {
    name: "Daikin",
    certificate: "5",
  },
  {
    name: "Dantex",
    certificate: "10",
  },
  {
    name: "Denko",
    certificate: "11",
  },
  {
    name: "Electrolux",
    certificate: "6",
  },
  {
    name: "Energolux",
    certificate: "13",
  },
  {
    name: "Faura",
    certificate: "14",
  },
  {
    name: "Ferrum",
    certificate: "15",
  },
  {
    name: "Fujitsu",
    certificate: "16",
  },
  {
    name: "General",
    certificate: "17",
  },
  {
    name: "General climate",
    certificate: "18",
  },
  {
    name: "Gree",
    certificate: "19",
  },
  {
    name: "Green",
    certificate: "3",
  },
  {
    name: "Haier",
    certificate: "20",
  },
  {
    name: "Hisense",
    certificate: "21",
  },
  {
    name: "Hitachi",
    certificate: "22",
  },
  {
    name: "Hotpoint Ariston",
    certificate: "23",
  },
  {
    name: "IGC",
    certificate: "24",
  },
  {
    name: "JAX",
    certificate: "25",
  },
  {
    name: "Kentatsu",
    certificate: "5",
  },
  {
    name: "Kitano",
    certificate: "26",
  },
  {
    name: "Lanzkraft",
    certificate: "27",
  },
  {
    name: "Leberg",
    certificate: "28",
  },
  {
    name: "Lessar",
    certificate: "29",
  },
  {
    name: "LG",
    certificate: "3",
  },
  {
    name: "LORIOT",
    certificate: "30",
  },
  {
    name: "Marsa",
    certificate: "31",
  },
  {
    name: "MDV",
    certificate: "32",
  },
  {
    name: "Midea",
    certificate: "5",
  },
  {
    name: "Mitsubishi Electric",
    certificate: "33",
  },
  {
    name: "Mitsubishi Heavy",
    certificate: "34",
  },
  {
    name: "NeoClima",
    certificate: "14",
  },
  {
    name: "Newtek",
    certificate: "35",
  },
  {
    name: "Panasonic",
    certificate: "3",
  },
  {
    name: "Pioneer",
    certificate: "36",
  },
  {
    name: "Quattroclima",
    certificate: "37",
  },
  {
    name: "Rix",
    certificate: "14",
  },
  {
    name: "Roda",
    certificate: "28",
  },
  {
    name: "Rover",
    certificate: "38",
  },
  {
    name: "Rovex",
    certificate: "39",
  },
  {
    name: "Royal Clima",
    certificate: "40",
  },
  {
    name: "Sakata",
    certificate: "41",
  },
  {
    name: "Samsung",
    certificate: "42",
  },
  {
    name: "Shivaki",
    certificate: "43",
  },
  {
    name: "SmartWay",
    certificate: "28",
  },
  {
    name: "TCL",
    certificate: "44",
  },
  {
    name: "Toshiba",
    certificate: "3",
  },
  {
    name: "Tosot",
    certificate: "45",
  },
  {
    name: "Wisnow",
    certificate: "42",
  },
];

const Certificates = ({ showModal }) => {
  const handleShowImage = modalProps => {
    showModal({
      modalType: "imageView",
      modalProps,
    });
  };

  return (
    <Container className="container">
      <hgroup>
        <Text tag="h1" sz="larg" clr="primary">
          Наши сертификаты
        </Text>
        <Text tag="h2" sz="normal" clr="primary">
          {
            "Подтверждение официального статуса авторизованного дилера <strong>58 брендов.</strong>"
          }
        </Text>
      </hgroup>
      <div className="gallery">
        {certificates.map(({ name, certificate }, idx) => (
          <div key={idx}>
            <div
              className="certificate--wrapper"
              onClick={() =>
                handleShowImage({
                  url: `/images/certificates/${certificate}_max`,
                  alt: name,
                  type: "jpg",
                })
              }
            >
              <picture>
                <source
                  srcSet={`/images/certificates/${certificate}_min.webp`}
                  type="image/webp"
                />
                <source
                  srcSet={`/images/certificates/${certificate}_min.jpg`}
                  type="image/jpg"
                />
                <img
                  alt={name}
                  src={`/images/certificates/${certificate}_min.jpg`}
                />
              </picture>
            </div>
            <Text tag="p" sz="normal" clr="primary">
              {name}
            </Text>
            <img src={`/images/brands-logo/${name}.png`} alt={name} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "primary",
    },
  };
};

import { connect } from "react-redux";
import { showModal } from "@redux/actions/modal";

const mapDispatchToProps = {
  showModal,
};

export default connect(null, mapDispatchToProps)(Certificates);

// export default Certificates;
