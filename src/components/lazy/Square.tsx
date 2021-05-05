import React from 'react'
import '../../assets/styles/components/lazy/lazy.scss'
import "../../assets/styles/components/cardProject.scss";

type props = {
    secondaryClass?: string;
}

const Square: React.FC<props> = ({ secondaryClass }) => {
    return <span className={`animation-lazy ${secondaryClass}`}></span>
}
export default Square