import React from "react";
import styled from "styled-components";
import background from "../assets/login.jpg";

export default function BankgroundImage() {
  return (
    <Container>
      <img width={"100%"} src={background} alt="background" />
    </Container>
  );
}

const Container = styled.div``;
