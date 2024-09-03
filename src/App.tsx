import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { fetchImages } from "./service/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Results, SearchFormSubmitHandler } from "./Types/types";

const App = () => {
  const [results, setResults] = useState<Results[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Results | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      setLoader(true);
      setError(false);
      try {
        const images: Results[] = await fetchImages(query);
        setResults(images);
        setNextPage(2);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching images:", error.message);
        } else {
          console.error("Unknown error occurred");
        }
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    getData();
  }, [query]);

  const onSubmit: SearchFormSubmitHandler = (values, actions) => {
    setQuery(values.input);
    actions.resetForm();
  };

  const clickBtnLoadMore = async () => {
    try {
      setLoader(true);
      const data: Results[] = await fetchImages(query, nextPage);
      setResults((prev) => [...prev, ...data]);
      setNextPage((prev) => prev + 1);
    } catch {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const openModal = (image: Results) => {
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
