import s from "../LoadMoreBtn/LoadMoreBtn.module.css";
interface LoadMoreBtnProps {
  clickBtnLoadMore: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ clickBtnLoadMore }) => {
  return (
    <button className={s.loadMoreBtn} onClick={clickBtnLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
