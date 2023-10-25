import s from "./Pagination.module.css";
import React, {useState} from "react";

const Pagination = React.memo(({totalCount, pageSize, onChangePage, currentPage, partSize = 10}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    let partCount = Math.ceil(pagesCount / partSize)
    let [partCurrent, setPartCurrent] = useState(Math.floor(currentPage/partSize)+1);

    let leftPartPageNumber = (partCurrent - 1) * partSize +1;
    let rightPartPageNumber = partCurrent * partSize;

    return(
        <div className={s.navigation}>
            { partCurrent > 1 && <button onClick={ () => { setPartCurrent(partCurrent-1) }}>Prev</button> }
            { pages.filter(p => p>= leftPartPageNumber && p <= rightPartPageNumber).map(p => <span key={p} onClick={ () => {onChangePage(p)}} className={ p === currentPage ? s.selNavigation : ''}>{p}</span>) }
            { partCount > partCurrent && <button onClick={ () => { setPartCurrent(partCurrent+1) }}>Next</button> }
        </div>
    )
})

export default Pagination