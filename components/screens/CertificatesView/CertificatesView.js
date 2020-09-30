import React from "react";

import { Text } from "@atoms";
import { Container } from "./styles";
import CertificateView from "./CertificateView";

import { certificates } from "./data";

const CertificatesView = ({ showModal }) => {
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
        {certificates.map((props, idx) => (
          <CertificateView key={idx} {...props} />
        ))}
      </div>
    </Container>
  );
};

export default CertificatesView;
