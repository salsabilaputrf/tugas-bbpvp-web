import React, { useState } from 'react';
import forwardIcon from '../assets/forward-icon.png';
import kalendarIcon from '../assets/calendar-icon.png';
import { dataBerita, daftarTipe } from '../data/blogData';

const Blog = () => {
    const [filter, setFilter] = useState('Semua');
    const [beritaTerpilih, setBeritaTerpilih] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6); 

    // Filter data berdasarkan tipe
    const beritaTerfilter = filter === 'Semua' ? dataBerita : dataBerita.filter(item => item.tipe === filter);

    // data untuk load more
    const displayBerita = beritaTerfilter.slice(0, visibleCount);

    // agar nambah 3 saat load more
    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    return (
        <section id="blog" className="py-24 bg-indigo-200/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-4xl font-extrabold text-primary-dark mb-4">Berita & Artikel Terkini</h3>
                        <p className="text-slate-500 max-w-xl">Temukan informasi terbaru seputar kegiatan pelatihan dan update dari BBPVP Bandung.</p>
                    </div>

                    {/* Filter */}
                    <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
                        {daftarTipe.map((tipe) => (
                            <button
                                key={tipe}
                                onClick={() => {
                                    setFilter(tipe);
                                    setVisibleCount(6); 
                                }}
                                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${ filter === tipe ? 'bg-primary-dark text-white shadow-lg' : 'text-slate-500 hover:text-primary'}`}
                            >
                                {tipe}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayBerita.length > 0 ? (
                        displayBerita.map((berita) => (
                            <div
                                key={berita.id} 
                                className="group bg-white rounded-[1.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
                            >
                                {/* Gambar */}
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={berita.gambar} 
                                        alt={berita.judul} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
                                            berita.tipe === 'Berita' ? 'bg-amber-400 text-amber-900' : 'bg-indigo-500 text-white'
                                        }`}>
                                            {berita.tipe}
                                        </span>
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-slate-400 text-[11px] font-medium mb-3">
                                        <img src={kalendarIcon} alt="Icon" className="w-3.5 h-3.5 opacity-60" />
                                        <span>{berita.tanggal}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-primary-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                        {berita.judul}
                                    </h4>
                                    <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-2">
                                        {berita.deskripsi}
                                    </p>

                                    <div className="mt-auto">
                                        <button 
                                            onClick={() => setBeritaTerpilih(berita)}
                                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-dark text-white text-[10px] font-bold uppercase tracking-widest rounded-lg w-full hover:bg-primary transition-all duration-300 group/btn"
                                        >
                                            Baca Selengkapnya
                                            <img src={forwardIcon} alt="Go" className="w-3.5 h-3.5 brightness-0 invert group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-slate-400">Belum ada {filter.toLowerCase()} untuk saat ini.</p>
                        </div>
                    )}
                </div>

                {/* Load More */}
                {visibleCount < beritaTerfilter.length && (
                    <div className="flex justify-center mt-16">
                        <button 
                            onClick={handleLoadMore}
                            className="px-10 py-4 bg-white text-primary-dark border-2 border-primary-dark/10 rounded-2xl font-bold text-sm hover:bg-primary-dark hover:text-white hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300"
                        >
                            Lihat Berita Lainnya
                        </button>
                    </div>
                )}

                {/* Modal */}
                {beritaTerpilih && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                        <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300 scrollbar-hide">
                            <div className="sticky top-0 bg-white border-b border-slate-100 px-8 py-6 flex justify-between items-center">
                                <h2 className="text-xl font-black text-primary-dark uppercase">Detail {beritaTerpilih.tipe}</h2>
                                <button onClick={() => setBeritaTerpilih(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-8 space-y-6">
                                <img src={beritaTerpilih.gambar} alt={beritaTerpilih.judul} className="w-full h-64 object-cover rounded-2xl shadow-sm" />
                                <h1 className="text-2xl font-bold text-slate-800 leading-tight">{beritaTerpilih.judul}</h1>
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                                    <img src={kalendarIcon} className="w-4 h-4 opacity-50" />
                                    <span>Dipublikasikan pada {beritaTerpilih.tanggal}</span>
                                </div>
                                <div className="text-slate-600 leading-relaxed text-sm space-y-4 border-t border-slate-50 pt-6">
                                    <p>{beritaTerpilih.isiLengkap || beritaTerpilih.deskripsi}</p>
                                </div>
                            </div>

                            <div className="p-6 bg-slate-50 flex justify-end">
                                <button onClick={() => setBeritaTerpilih(null)} className="px-6 py-2.5 bg-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-300 transition-all">
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;