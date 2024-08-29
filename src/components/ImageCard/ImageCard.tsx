import { Results } from "../../Types/types";
import s from "../ImageCard/ImageCard.module.css";
interface ImageCardProps {
  image: Results;
  onClick: (image: Results) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.card}>
      <img
        className={s.image}
        onClick={() => onClick(image)}
        src={image.urls.small}
        alt={image.description}
      />
    </div>
  );
};

export default ImageCard;
