import React from "react";
import ReactDOM from "react-dom";
import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";
import "@bedrock-layout/css-reset/lib/reset.css";
import styled from "styled-components";
import Hero from "./Hero";

const AppStyles = styled(PadBox).attrs(() => ({
  as: Center,
  padding: "none",
  maxWidth: "85rem"
}))`
  font-family: sans-serif;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppStyles>
      <Hero />
    </AppStyles>
  </React.StrictMode>,
  rootElement
);
