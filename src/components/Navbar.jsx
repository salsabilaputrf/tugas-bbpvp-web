import React, { useState } from 'react';
import menuIcon from '../assets/menu-icon.png'
import closeIcon from '../assets/close-icon.png'
import logoIcon from '../assets/logo-color.png'
import { menus } from '../data/navbarData';

const Navbar = () => {
    const [active, setActive] = useState('Beranda');
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">        
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <a 
                        href="#beranda" 
                        onClick={() => {
                            setActive('Beranda'); 
                            window.location.href = '/'; 
                        }}
                        className="transition-transform hover:scale-105 active:scale-95 duration-200"
                    >
                        <img 
                        src={logoIcon}
                        alt="Logo Kiru App" 
                        className="h-10 md:h-12 w-auto cursor-pointer" 
                        />
                    </a>
                </div>
                {/* List Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {/* Menu Utama */}
                    <div className="flex items-center gap-2 mr-6"> 
                        <a
                        href="#beranda"
                        onClick={() => setActive('Beranda')}
                        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                            active === 'Beranda'
                            ? 'bg-primary-dark text-white shadow-md' 
                            : 'text-slate-600 hover:bg-indigo-50'   
                        }`}
                        >
                        Beranda
                        </a>

                        <a
                        href="#tentang"
                        onClick={() => setActive('Tentang')}
                        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                            active === 'Tentang'
                            ? 'bg-primary-dark text-white shadow-md'
                            : 'text-slate-600 hover:bg-indigo-50'
                        }`}
                        >
                        Tentang
                        </a>

                        <a
                        href="#blog"
                        onClick={() => setActive('Blog')}
                        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                            active === 'Blog'
                            ? 'bg-primary-dark text-white shadow-md'
                            : 'text-slate-600 hover:bg-indigo-50'
                        }`}
                        >
                        Blog
                        </a>

                        <a
                        href="#training"
                        onClick={() => setActive('Pelatihan')}
                        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                            active === 'Pelatihan'
                            ? 'bg-primary-dark text-white shadow-md'
                            : 'text-slate-600 hover:bg-indigo-50'
                        }`}
                        >
                        Pelatihan
                        </a>
                    </div>
                    {/* Menu Daftar Pelatihan */}
                    <a
                    href="#join-training"
                    onClick={() => setActive('Daftar Pelatihan')}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold bg-amber-400 text-amber-950 shadow-md shadow-amber-100 hover:bg-amber-500 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                    Daftar Pelatihan
                    </a>
                </div>
                {/* Menu Hamburger */}
                <div className="md:hidden flex items-center">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center transition-transform active:scale-90 duration-200"
                    >
                    {isOpen ? (
                        <img 
                        src={closeIcon} 
                        alt="Close Menu" 
                        className="w-8 h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" 
                        />
                    ) : (
                        <img 
                        src={menuIcon} 
                        alt="Menu" 
                        className="w-8 h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" 
                        />
                    )}
                    </button>
                </div>
            </div>
            {/* Dropdown Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-100 ${
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="flex flex-col gap-2 px-6 py-6">
                    {/* Render nav menu kecuali Daftar Pelatihan */}
                    {menus.filter(m => m !== 'Daftar Pelatihan').map((menu) => (
                        <a
                            key={menu}
                            href={`#${menu.toLowerCase()}`}
                            onClick={() => {
                                setActive(menu);
                                setIsOpen(false); 
                            }}
                            className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                                active === menu
                                ? 'bg-primary-dark text-white shadow-md'
                                : 'text-slate-600 hover:bg-slate-50'
                            }`}
                        >
                            {menu}
                        </a>
                    ))}

                    {/* Pembatas halus */}
                    <div className="h-[1px] bg-slate-100 my-2"></div>
                        {/* Daftar Pelatihan */}
                        <a
                            href="#daftar"
                            onClick={() => {
                                setActive('Daftar Pelatihan');
                                setIsOpen(false);
                            }}
                            className="px-4 py-4 rounded-xl text-base font-bold text-center transition-all shadow-md shadow-amber-100 bg-amber-400 text-amber-950 hover:bg-amber-500 active:scale-95"
                        >
                            Daftar Pelatihan
                        </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;