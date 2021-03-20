import React from 'react';
import IconButton from '../IconButton';
import '../../assets/styles/components/layout/shortButton.scss'

import {
    Mail,
    LogoGithub,
    Download,
    LogoLinkedin
} from 'react-ionicons/lib'

const ShortButton = () => {
    return(
        <section className="shortButton">
            <IconButton icon={<LogoGithub/>}/>
            <IconButton icon={<LogoLinkedin/>}/>
            <IconButton icon={<Mail/>}/>
            <IconButton icon={<Download/>}/>
        </section>
    )
} 
export default ShortButton;