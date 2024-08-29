import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Results } from "../../Types/types";
import React from "react";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Results | null;
}
const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      contentLabel="Image Modal"
    >
      {image && (
        <div className={s.imageContainer}>
          <img
            className={s.image}
            src={image.urls.regular}
            alt={image.alt_description}
          />
        </div>
      )}
      <button onClick={onClose} className={s.closeBtn}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
