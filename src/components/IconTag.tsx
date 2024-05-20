import React from "react";
import "../assets/styles/components/tag.scss"

type props = {
    text: string;
    icon: any;
}

const IconTag: React.FC<props> = ({text, icon}) => {
    return <span className="icon-tag">{icon} {text}</span>
}
export default IconTag;