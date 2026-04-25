import React from 'react'
import logoIcon from '../assets/logo-color.png'

const Footer = () => {
    return (
        <footer className="bg-[#1a3a5a] text-white py-16 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-start">
                    {/* Logo & Kontak */}
                    <div className="flex flex-col">
                        {/* logo */}
                        <div className="mb-8">
                            <img 
                                src={logoIcon} 
                                alt="BBPVP Bandung" 
                                className="h-12 w-auto object-contain brightness-0 invert" 
                            />
                        </div>
                        
                        <div className="space-y-6">
                            <h3 className="font-bold text-lg uppercase tracking-wider leading-none">
                                BBPVP BANDUNG
                            </h3>
                            <p className="max-w-md text-gray-300 leading-relaxed text-sm">
                                Jl. Jenderal Gatot Subroto No. 170 Kelurahan Gumuruh Kecamatan Batununggal Kota Bandung, Jawa Barat 40275, Indonesia
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-sm font-medium">
                                <p><span className="text-gray-400">Telp:</span> 022-7312564</p>
                                <p><span className="text-gray-400">Call Center:</span> 1500830</p>
                            </div>
                        </div>

                        {/* sosmed */}
                        <div className="flex items-center gap-6 mt-8">
                            <a href="#" className="text-white hover:text-blue-400 transition-colors text-xl"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white hover:text-pink-400 transition-colors text-xl"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white hover:text-blue-300 transition-colors text-xl"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white hover:text-green-400 transition-colors text-xl"><i className="fab fa-whatsapp"></i></a>
                            <a href="#" className="text-white hover:text-red-500 transition-colors text-xl"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="text-white hover:text-gray-400 transition-colors text-xl"><i className="far fa-envelope"></i></a>
                        </div>
                    </div>
                    {/* Menu Informasi */}
                    <div className="md:pt-[80px]"> 
                        <h3 className="font-bold text-lg uppercase tracking-wider mb-8 leading-none">
                        Informasi
                        </h3>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li><a href="#beranda" className="hover:text-white hover:underline transition-all">Beranda</a></li>
                            <li><a href="#tentang" className="hover:text-white hover:underline transition-all">Tentang</a></li>
                            <li><a href="#blog" className="hover:text-white hover:underline transition-all">Blog</a></li>
                            <li><a href="#training" className="hover:text-white hover:underline transition-all">Pelatihan</a></li>
                            <li><a href="#join-training" className="hover:text-white hover:underline transition-all">Daftar Pelatihan</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="border-t border-gray-600 opacity-30" />

                {/* Hak Cipta */}
                <div className="mt-8">
                    <p className="text-xs md:text-sm text-gray-400">
                        Kementerian Ketenagakerjaan Republik Indonesia &copy; 2023 &bull; Hak Cipta Dilindungi Undang-Undang.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
