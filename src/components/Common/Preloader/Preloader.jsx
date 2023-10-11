import preloader from "../../../assets/img/oval.svg";
import s from "./Preloader.module.css";
import React from "react";

const Preloader = () => {
    return <img src={preloader} alt='' className={s.preloader} />
}

export default Preloader