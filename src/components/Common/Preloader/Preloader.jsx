import preloader from "../../../assets/img/oval.svg";
import s from "./Preloader.module.css";
import React from "react";

const Preloader = () => {
    return (
        <div className={s.preloaderContainer}>
            <img src={preloader} alt='' className={s.preloader} />
        </div>
    )
}

export default Preloader