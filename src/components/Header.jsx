import React from 'react';
import LogoImage from "../assets/images/logo.png"

const Header = () => {
    return (
        <header className="text-3xl font-bold  flex justify-between bg-green-800 fixed w-full">
            <img className='w-60 h-20 pl-10' src={LogoImage} alt="logo" />
            <button className='mr-10 p-2 m-3 rounded text-white text-2xl bg-green-600'>filtrar</button>
        </header>
    )
}

export default Header;