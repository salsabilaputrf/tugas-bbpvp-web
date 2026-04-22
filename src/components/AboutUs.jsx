import React from 'react';
import { dataStatistik, visiMisi } from '../data/aboutUsData';

const AboutUs = () => {
    return (
        <section 
        id="tentang" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-indigo-50/60 rounded-full blur-3xl opacity-70">
            </div>
            
            <div className="absolute -bottom-40 -left-40 w-[25rem] h-[25rem] bg-blue-50/70 rounded-full blur-3xl opacity-60">
            </div>
            
            <div className="absolute right-0 top-1/2 w-1/4 h-full bg-slate-50/20 -skew-x-12 transform -translate-y-1/2 translate-x-10 z-0">
            </div>

            {/* konten utama */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-5 z-10">
                        {dataStatistik.map((stat) => (
                        <div 
                            key={stat.id} 
                            className="p-10 bg-white/70 backdrop-blur-sm shadow-lg shadow-indigo-50/30 rounded-[2.5rem] border border-slate-100 text-center transition-all hover:shadow-xl hover:border-indigo-100 group"
                        >
                            <h4 className="text-5xl font-black text-primary-dark mb-3 tracking-tighter transition-colors group-hover:text-primary">
                                {stat.nilai}
                            </h4>
                            <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-bold">
                                {stat.label}
                            </p>
                        </div>
                        ))}
                    </div>
                    {/* Teks Profil */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-2 mb-8">
                            <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-primary px-4 py-1.5 bg-indigo-50 rounded-full">
                                Tentang Kami
                            </span>
                            <h3 className="text-5xl font-extrabold text-primary-dark leading-tight tracking-tight">
                            Mencetak SDM Unggul Sejak <span className="text-primary">1952</span>
                            </h3>
                        </div>
                        
                        <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                        BBPVP Bandung merupakan Unit Pelaksana Teknis Pusat (UPTP) strategis di bawah naungan 
                        Kementerian Ketenagakerjaan RI. Kami berkomitmen untuk mempercepat akselerasi kompetensi 
                        tenaga kerja nasional melalui fasilitasi pemagangan, sertifikasi BNSP, dan kemitraan industri.
                        </p>
                        
                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner space-y-4">
                            <h4 className="font-extrabold text-xl text-primary-dark">Visi Kami:</h4>
                            <p className="italic text-slate-600 text-lg leading-relaxed border-l-4 border-primary pl-6 py-2">
                                "{visiMisi.visi}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;