import React, { useEffect, useState } from "react";
import LazyLoadHOC from "HOC/LazyLoad";

import { Text } from "@atoms";
import { Hgroup } from "@molecules";
import { Container } from "./styles";
import CertificateView from "./CertificateView";

const CertificatesView = ({ showModal }) => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getCertificates`, {
      headers: {
        projectId: "59",
      },
    })
      .then(response => response.json())
      .then(data => setCertificates(data));
  }, []);

  return (
    <Container className="container">
      <Hgroup
        h1="Наши сертификаты"
        h2={`Подтверждение официального статуса авторизованного дилера <strong>${certificates.length} брендов.</strong>`}
      />
      <div className="gallery">
        {certificates.map((props, idx) => (
          <CertificateView key={idx} {...props} />
        ))}
      </div>
    </Container>
  );
};

export default LazyLoadHOC(CertificatesView);
