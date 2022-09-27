import React from "react";
import { Container } from "reactstrap";
import "../../../../styles/common-section.css";
export default function CommonSection(props) {
  return (
    <section className="common__section">
      <Container>
        <h2>{props.title}</h2>
      </Container>
    </section>
  );
}
