import React from "react";
import { PhotoModal, PhotoModalWrapper } from "./styled";

interface PhotoModal {
  link: string;
  setFalse: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowPhotoModal = ({ link, setFalse }: PhotoModal) => {
  return (
    <PhotoModalWrapper onClick={() => setFalse(false)}>
      <PhotoModal src={link} alt="Photo of me" />
    </PhotoModalWrapper>
  );
};

export default ShowPhotoModal;
