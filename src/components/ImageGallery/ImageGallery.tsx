import { Results } from "../../Types/types";
import ImageCard from "../ImageCard/ImageCard";
import s from "../ImageGallery/ImageGallery.module.css";
interface ImageGalleryProps {
  images: Results[];
  openModal: (image: Results) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} onClick={() => openModal(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
