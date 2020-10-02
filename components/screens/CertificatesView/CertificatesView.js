import React from "react";

import { Text } from "@atoms";
import { Hgroup } from "@molecules";
import { Container } from "./styles";
import CertificateView from "./CertificateView";

import { certificates } from "./data";

const CertificatesView = ({ showModal }) => {
  return (
    <Container className="container">
      <Hgroup
        h1="Наши сертификаты"
        h2="Подтверждение официального статуса авторизованного дилера <strong>58 брендов.</strong>"
      />
      <div className="gallery">
        {certificates.map((props, idx) => (
          <CertificateView key={idx} {...props} />
        ))}
      </div>
    </Container>
  );
};

export default CertificatesView;
