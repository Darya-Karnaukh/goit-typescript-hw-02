import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images = [], openModal }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => openModal(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
