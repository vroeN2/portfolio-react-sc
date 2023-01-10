import React from "react";
import { RoundBadgeWithArrow } from "../styled";
import { CustomPhoto, PhotoWrapper } from "./styled";

type Props = {};

const RoundedPhoto = (props: Props) => {
  return (
    <PhotoWrapper style={{ position: "relative" }}>
      <CustomPhoto
        src="https://images.unsplash.com/photo-1672934033380-cb7b08eb46b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1298&q=80"
        alt="photo xd"
      />
      <RoundBadgeWithArrow top="-5vmin" right="5vmin">
        M
      </RoundBadgeWithArrow>
    </PhotoWrapper>
  );
};

export default RoundedPhoto;
