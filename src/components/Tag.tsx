import React from "react";
import "../assets/styles/components/tag.scss"

type props = {
    content: string
}

const Tag: React.FC<props> = ({content}) => {
    return <span className="tag">{content}</span>
}
export default Tag;