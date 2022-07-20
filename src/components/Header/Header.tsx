import React from 'react';
import style from './Header.module.css'

export const Header = () => {
    const img='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/768px-VK_Compact_Logo.svg.png'

    return (
        <header className={style.header}>
            <img src={img} alt=""/>
            <span>ВКОНТАКТЕ</span>
        </header>
    );
};

