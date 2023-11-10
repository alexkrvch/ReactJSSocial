import s from "./Pagination.module.css";
import React, {useState} from "react";

type PropsType = {
    totalCount: number,
    pageSize: number,
    onChangePage: (p:number) => void,
    currentPage: number,
    partSize: number
}


const Pagination: React.FC<PropsType> = React.memo(({totalCount, pageSize, onChangePage, currentPage, partSize}) => {
    let pagesCount:number = Math.ceil(totalCount / pageSize);
    let pages:number[] = [];
    for (let i:number=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    let partCount:number = Math.ceil(pagesCount / partSize)
    let [partCurrent, setPartCurrent]:[number, Function] = useState<number>(Math.floor(currentPage/partSize)+1);

    let leftPartPageNumber:number = (partCurrent - 1) * partSize +1;
    let rightPartPageNumber:number = partCurrent * partSize;

    if(pages.length < 2) {
        return <></>
    }

    return(
        <div className={s.navigation}>
            { partCurrent > 1 && <button onClick={ () => { setPartCurrent(partCurrent-1) }}>Prev</button> }
            { pages.filter(p => p>= leftPartPageNumber && p <= rightPartPageNumber).map(p => <span key={p} onClick={ () => {onChangePage(p)}} className={ p === currentPage ? s.selNavigation : ''}>{p}</span>) }
            { partCount > partCurrent && <button onClick={ () => { setPartCurrent(partCurrent+1) }}>Next</button> }
        </div>
    )
})

export default Pagination