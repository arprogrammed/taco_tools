import styles from './../styles/LaFStore.module.css';

const Pagination = ({items, pageSize, currPage, onPageChange}) => {
    const pagesCt = Math.ceil(items / pageSize);

    if (pagesCt === 1) {return null}
    const pages = Array.from({length: pagesCt}, (_, i) => i + 1)
    console.log(pages)

    return (
        <div className={styles.pagecontainer}>
            <ul>
                {pages.map((page) => (
                <li
                    key={page}
                    className={page === currPage ? styles.pageItemActive : styles.pageItem}
                >
                    <a className={page === currPage ? styles.pageItemLinkActive : styles.pageItemLink} onClick={() => onPageChange(page)}>
                    {page}
                    </a>
                </li>
                ))}
        </ul>
      </div>
    )
}

export default Pagination