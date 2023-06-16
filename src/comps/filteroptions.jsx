import styles from './../styles/LaFStore.module.css';

const Dropdown = ({ sortValue, onSortChange }) => {
    const options = [{value: "ascending", label: "Low to High"}, {value: "descending", label: "High to Low"}, {value: "az", label: "A-Z"}, {value: "za", label: "Z-A"}];
    
  return (
    <div className={styles.dropdown}>
      <select
        value={sortValue}
        onChange={e => onSortChange(e.target.value)}>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;