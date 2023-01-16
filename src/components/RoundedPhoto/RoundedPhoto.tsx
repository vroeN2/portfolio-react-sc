import { useState } from "react";
import ShowPhotoModal from "../ShowPhotoModal";
import { RoundBadgeWithArrow } from "../styled";
import { CustomPhoto, PhotoWrapper } from "./styled";

type Props = {};

const RoundedPhoto = (props: Props) => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const photoLink = "https://source.unsplash.com/random";
  return (
    <PhotoWrapper style={{ position: "relative" }}>
      <CustomPhoto src={photoLink} alt="Photo of me" />
      <RoundBadgeWithArrow
        top="-5vmin"
        right="-5vmin"
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
