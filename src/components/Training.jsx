import React, { useEffect, useState } from 'react';
import forwardIcon from '../assets/forward-icon.png';
import { dataPelatihan, listKejuruan, listStatus, warnaKejuruan } from '../data/trainingData';

const Training = () => {
    const [selectedKejuruan, setSelectedKejuruan] = useState('Semua Kejuruan');
    const [selectedStatus, setSelectedStatus] = useState('Semua Status');
    const [isOpenKejuruan, setIsOpenKejuruan] = useState(false);
    const [isOpenStatus, setIsOpenStatus] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);
    const [pelatihanTerpilih, setPelatihanTerpilih] = useState(null);

    // filter
    const filteredPelatihan = dataPelatihan.filter((item) => {
        const matchKejuruan = selectedKejuruan === 'Semua Kejuruan' || item.kejuruan === selectedKejuruan;
        const matchStatus = selectedStatus === 'Semua Status' || item.status === selectedStatus;
        return matchKejuruan && matchStatus;
    });
    useEffect(() => {
        setVisibleCount(6);
    }, [selectedKejuruan, selectedStatus]);
    const displayPelatihan = filteredPelatihan.slice(0, visibleCount);
    
    // modal
    const handleDaftarClick = () => {
        setPelatihanTerpilih(null);
        const section = document.getElementById('join-training');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="training" className="py-20 bg-white">
            <div className="container mx-auto px-6">    
                {/* Header */}
                <div className="bg-primary-dark rounded-[2rem] p-10 md:p-16 text-white mb-12 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-4">Pelatihan</h2>
                        <p className="text-indigo-100 text-lg">Temukan pelatihan sesuai bakat dan minatmu</p>
                    </div>
                    <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 -skew-x-12 transform translate-x-20"></div>
                </div>

                {/* Filter */}
                <div className="bg-white border border-slate-100 shadow-sm rounded-3xl p-8 mb-10 flex flex-col md:flex-row items-end gap-6">
                    {/* Dropdown Kejuruan */}
                    <div className="w-full md:w-1/3 relative">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Pilih Kejuruan</label>
                        <button onClick={() => { setIsOpenKejuruan(!isOpenKejuruan); setIsOpenStatus(false); }} className={`w-full flex items-center justify-between bg-slate-50 border ${isOpenKejuruan ? 'border-primary ring-4 ring-primary/10' : 'border-slate-200'} rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-700 transition-all`}>
                            <span>{selectedKejuruan}</span>
                            <svg className={`w-4 h-4 transition-transform ${isOpenKejuruan ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {isOpenKejuruan && (
                            <div className="absolute z-20 mt-2 w-full bg-white border border-slate-100 rounded-2xl shadow-xl max-h-60 overflow-y-auto">
                                {listKejuruan.map((k) => (
                                    <button key={k} onClick={() => { setSelectedKejuruan(k); setIsOpenKejuruan(false); }} className="w-full text-left px-5 py-3 text-sm font-semibold hover:bg-slate-50">{k}</button>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* (Dropdown Status Singkat) */}
                    <div className="w-full md:w-1/4 relative">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Status</label>
                        <button onClick={() => { setIsOpenStatus(!isOpenStatus); setIsOpenKejuruan(false); }} className="w-full flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-700">
                        <span>{selectedStatus}</span>
                        </button>
                        {isOpenStatus && (
                            <div className="absolute z-20 mt-2 w-full bg-white border border-slate-100 rounded-2xl shadow-xl">
                                {listStatus.map((s) => (
                                    <button key={s} onClick={() => { setSelectedStatus(s); setIsOpenStatus(false); }} className="w-full text-left px-5 py-3 text-sm font-semibold hover:bg-slate-50">{s}</button>
                                ))}
                            </div>
                        )}
                    </div>
                    <button onClick={() => { setSelectedKejuruan('Semua Kejuruan'); setSelectedStatus('Semua Status'); }} className="text-slate-400 hover:text-primary font-bold text-sm mb-4">Reset</button>
                </div>

                {/* Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayPelatihan.length > 0 ? (
                        displayPelatihan.map((item) => {
                            const styleBadge = warnaKejuruan[item.kejuruan] || warnaKejuruan['default'];
                            return (
                                <div key={item.id} className="group bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[250px]">
                                    <div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${styleBadge}`}>{item.kejuruan}</span>
                                        <h4 className="text-2xl font-bold text-primary-dark mt-6 mb-2 group-hover:text-primary transition-colors leading-tight">{item.judul}</h4>
                                        <p className="text-slate-400 text-xs font-medium italic">{item.durasi}</p>
                                    </div>
                                    <div className="mt-8 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-2 h-2 rounded-full animate-pulse ${item.status === 'Pendaftaran Dibuka' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                                            <span className={`text-sm font-bold ${item.status === 'Pendaftaran Dibuka' ? 'text-green-600' : 'text-amber-600'}`}>{item.status}</span>
                                        </div>
                                        {/* Modal */}
                                        <button 
                                            onClick={() => setPelatihanTerpilih(item)}
                                            className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-primary-dark group-hover:text-white transition-all duration-300 shadow-sm"
                                        >
                                            <img src={forwardIcon} alt="Detail" className="w-4 h-4 brightness-0 opacity-40 group-hover:invert group-hover:opacity-100" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <h5 className="text-lg font-bold text-slate-700">Pelatihan tidak ditemukan.</h5>
                        </div>
                    )}
                </div>

                {/* Load More */}
                {filteredPelatihan.length > visibleCount && (
                    <div className="mt-12 flex justify-center">
                        <button onClick={() => setVisibleCount(prev => prev + 6)} className="px-8 py-3 bg-white border-2 border-slate-100 text-slate-600 font-bold rounded-2xl hover:border-primary hover:text-primary transition-all shadow-sm">
                            Tampilkan Lebih Banyak
                        </button>
                    </div>
                )}

                {/* MODAL DETAIL PELATIHAN */}
                {pelatihanTerpilih && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                        <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 duration-300 scrollbar-hide">
                            
                            {/* Header */}
                            <div className="sticky top-0 bg-white border-b border-slate-50 px-8 py-6 flex justify-between items-center z-10">
                                <div>
                                    <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest">{pelatihanTerpilih.kejuruan}</span>
                                    <h2 className="text-xl font-black text-primary-dark uppercase leading-tight">Detail Pelatihan</h2>
                                </div>
                                <button onClick={() => setPelatihanTerpilih(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Isi */}
                            <div className="p-8 space-y-8">
                                {/* Judul & Durasi */}
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-800 mb-2">{pelatihanTerpilih.judul}</h1>
                                    <div className="flex items-center gap-4">
                                        <span className={`px-3 py-1 rounded-lg text-xs font-bold ${pelatihanTerpilih.status === 'Pendaftaran Dibuka' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                            {pelatihanTerpilih.status}
                                        </span>
                                        <span className="text-slate-400 text-sm font-medium">⏳ {pelatihanTerpilih.durasi}</span>
                                    </div>
                                </div>

                                {/* Deskripsi */}
                                <div>
                                    <h5 className="text-sm font-black text-primary-dark uppercase tracking-wider mb-3">Tentang Pelatihan</h5>
                                    <p className="text-slate-600 leading-relaxed">{pelatihanTerpilih.deskripsi}</p>
                                </div>

                                {/* Persyaratan & Fasilitas */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-slate-50 p-6 rounded-2xl">
                                        <h5 className="text-sm font-black text-primary-dark uppercase tracking-wider mb-4 flex items-center gap-2">
                                            📋 Persyaratan
                                        </h5>
                                        <ul className="space-y-2">
                                            {pelatihanTerpilih.persyaratan?.map((req, index) => (
                                                <li key={index} className="text-xs text-slate-600 flex items-start gap-2">
                                                    <span className="text-primary">•</span> {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-indigo-50/50 p-6 rounded-2xl">
                                        <h5 className="text-sm font-black text-primary-dark uppercase tracking-wider mb-4 flex items-center gap-2">
                                            🎁 Fasilitas
                                        </h5>
                                        <ul className="space-y-2">
                                            {pelatihanTerpilih.fasilitas?.map((fac, index) => (
                                                <li key={index} className="text-xs text-slate-600 flex items-start gap-2">
                                                    <span className="text-indigo-500">✓</span> {fac}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between">
                                <p className="text-[10px] text-slate-400 max-w-[250px] text-center md:text-left">
                                    Pastikan Anda telah memenuhi semua persyaratan sebelum mendaftar.
                                </p>
                                <div className="flex gap-3 w-full md:w-auto">
                                    <button onClick={() => setPelatihanTerpilih(null)} className="flex-1 md:flex-none px-6 py-3 text-slate-500 font-bold text-sm hover:text-slate-700 transition-colors">Tutup</button>
                                    <button 
                                        onClick={handleDaftarClick}
                                        disabled={pelatihanTerpilih.status !== 'Pendaftaran Dibuka'}
                                        className={`flex-1 md:flex-none px-10 py-3 rounded-xl font-bold text-sm shadow-lg transition-all ${
                                            pelatihanTerpilih.status === 'Pendaftaran Dibuka' 
                                            ? 'bg-primary-dark text-white hover:bg-primary hover:-translate-y-1' 
                                            : 'bg-slate-300 text-white cursor-not-allowed'
                                        }`}
                                    >
                                        Daftar Sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Training;