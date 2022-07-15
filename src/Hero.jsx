import React from "react";
import styled from "styled-components";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { Stack } from "@bedrock-layout/stack";
import { PadBox } from "@bedrock-layout/padbox";

import { Button } from "./Button";
import { spacingMap } from "./spacingMap";

const Cover = styled.div.attrs(({ children, top, bottom }) => {
  return {
    children: (
      <React.Fragment>
        {top && <div>{top}</div>}
        <div data-cover-child>{children}</div>
        {bottom && <div>{bottom}</div>}
      </React.Fragment>
    )
  };
})`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
  min-block-size: ${(props) => props.minHeight ?? "100vh"};
  grid-template-rows: ${({ top, bottom }) =>
    top && bottom
      ? "auto 1fr auto"
      : top
      ? "auto 1fr"
      : bottom
      ? "1fr auto"
      : "1fr"};

  > [data-cover-child] {
    align-self: center;
  }
`;

export default function Hero() {
  return (
    <Cover
      as={PadBox}
      padding="lg"
      top={
        <InlineCluster gutter="xl" justify="end">
          <span>Places to stay</span>
          <span>Popular experiences</span>
          <span>Manage your booking</span>
          <span>List your property</span>
        </InlineCluster>
      }
      bottom={
        <InlineCluster gutter="xl" justify="center">
          <a href="/#">Keep Reading to learn more</a>
        </InlineCluster>
      }
    >
      <Stack gutter="lg">
        <h1>Home4Hire</h1>
        <span>Stay here and relax</span>
        <InlineCluster gutter="lg">
          <Button primary>Get started</Button>
          <Button>Sign in</Button>
        </InlineCluster>
      </Stack>
    </Cover>
  );
}
