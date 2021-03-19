import React from 'react'

import '../assets/styles/components/button.scss'

type props = {
    variant?: Variant
    icon?: any,
    value: string,
}

const Button: React.FC<props> = ({
    variant = 'primary',
    icon,
    value = 'Insert a text'
}) => {
    return (
        <button className={`${variant === 'primary' ? 'btn-primary' : 'btn-secondary' } btn `}>
            <span>{value}</span>
        </button>
    )
}
export default Button;

type Variant = 'primary' | 'secondary'
