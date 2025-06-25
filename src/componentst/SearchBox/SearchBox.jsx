import { useId } from "react";
import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor={searchId} className={styles.searchLabel}>
        Find contacts by name
      </label>
      <input
        id={searchId}
        type="search"
        inputMode="search"
        value={filter}
        onChange={handleChange}
        placeholder="Enter contact name"
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBox;
