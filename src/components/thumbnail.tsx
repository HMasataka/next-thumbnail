import React from "react";

import { css } from "@emotion/react";

type ThumbnailProps = {};

const Thumbnail: React.FC<ThumbnailProps> = ({}) => {
  return <></>;
};

const background = css`
  position: fixed;
  width: 100%;
  height: 100vh;

  background-color: rgba(81, 81, 81, 0.2);

  &.open {
    display: block;
  }

  &.closed {
    display: none;
  }
`;

const container = css``;

export default Thumbnail;
