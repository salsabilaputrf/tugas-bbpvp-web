  import React from 'react';
  import heroVector from '../assets/hero-vector.png'; 
  import arrowIcon from '../assets/arrow-right.png'

const Hero = () => {
    return (
        <section 
            id="beranda" 
            className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
        >
            {/* Vector */}
            <div className="absolute inset-0 z-0 opacity-10 md:opacity-20 pointer-events-none">
                <img 
                    src={heroVector} 
                    alt="Decorative Background" 
                    className="w-full h-full object-cover object-right-bottom scale-110 lg:scale-125"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark leading-[1.1] mb-6 tracking-tight">
                        Maksimalkan Bakatmu <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">
                        Wujudkan Karier Impian
                        </span> <br />
                        di BBPVP Bandung!
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                        Persiapkan dirimu untuk mewujudkan karir impian melalui program pelatihan vokasi di BBPVP Bandung.
                    </p>

                    {/* Tombol Daftar dan Tentang*/}    
                    <div className="flex flex-wrap gap-4">          
                        <a 
                            href="#join-training"
                            className="px-8 py-4 bg-primary-dark text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                        >
                            Daftar Pelatihan
                            <img 
                            src={arrowIcon} 
                            alt="Arrow Icon" 
                            className="w-5 h-5 object-contain brightness-0 invert transition-transform group-hover:translate-x-1" 
                            />
                        </a>
                        
                        <a 
                            href="#tentang"
                            className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold hover:bg-slate-50 hover:border-indigo-100 hover:text-indigo-600 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer"
                        >
                            Ingin Tahu Kami
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

  export default Hero;