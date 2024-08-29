const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <img
        onClick={() => onClick(image)}
        src={image.urls.small}
        alt={image.description}
      />
    </div>
  );
};

export default ImageCard;
