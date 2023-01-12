import { useState } from "react";
import ShowPhotoModal from "../ShowPhotoModal";
import { RoundBadgeWithArrow } from "../styled";
import { CustomPhoto, PhotoWrapper } from "./styled";

type Props = {};

const RoundedPhoto = (props: Props) => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const photoLink =
    "https://images.unsplash.com/photo-1672934033380-cb7b08eb46b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1298&q=80";
  return (
    <PhotoWrapper style={{ position: "relative" }}>
      <CustomPhoto src={photoLink} alt="Photo of me" />
      <RoundBadgeWithArrow
        top="-5vmin"
        right="5vmin"
        onClick={() => setIsPhotoOpen((isPhotoOpen) => !isPhotoOpen)}
      >
        M
      </RoundBadgeWithArrow>

      {isPhotoOpen && (
        <ShowPhotoModal link={photoLink} setFalse={setIsPhotoOpen} />
      )}
    </PhotoWrapper>
  );
};

export default RoundedPhoto;
