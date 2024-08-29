import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { fetchImages } from "./service/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      setLoader(true);
      setError(false);
      try {
        const images = await fetchImages(query);
        setResults(images);
        setNextPage(2);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    getData();
  }, [query]);

  const onSubmit = (values, actions) => {
    setQuery(values.input);
    actions.resetForm();
  };

  const clickBtnLoadMore = async () => {
    try {
      setLoader(true);
      const data = await fetchImages(query, nextPage);
      setResults((prev) => [...prev, ...data]);
      setNextPage((prev) => prev + 1);
    } catch {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage />}
      <ImageGallery images={results} openModal={openModal} />
      {loader && <Loader />}
      {!loader && results.length > 0 && (
        <LoadMoreBtn clickBtnLoadMore={clickBtnLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default App;
