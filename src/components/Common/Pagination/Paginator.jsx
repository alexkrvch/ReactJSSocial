import s from "./Pagination.module.css";
import React from "react";

const Pagination = ({totalCount, pageSize, onChangePage, currentPage}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }
    return(
        <div className={s.navigation}>
            { pages.map(p => <span onClick={ () => {onChangePage(p)}} className={ p === currentPage ? s.selNavigation : ''}>{p}</span>) }
        </div>
    )
}

export default Pagination