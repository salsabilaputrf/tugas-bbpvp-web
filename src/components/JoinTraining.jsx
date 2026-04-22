import React, {useState} from 'react'
import { dataPelatihan } from '../data/trainingData';
import toast from 'react-hot-toast';

const JoinTraining = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "1ae3855e-db81-4aaf-8620-5b9cae3f6930");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if(data.success){
                toast.success("Pendaftaran berhasil! Data Anda telah kami terima.");
                event.target.reset();
            }else{
                toast.error(data.message);
            }         
        } catch (error) {
            toast.error(error.message);
        }      
    };

    return (
        <section id='join-training' className="py-24  bg-slate-100 via-white to-blue-50 relative overflow-hidden">
            <div className="min-h-screen bg-slate-100 py-12 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-primary p-8 text-white bg-blue-600">
                        <h2 className="text-2xl font-bold">Formulir Pendaftaran Pelatihan</h2>
                        <p className="text-blue-100 text-sm mt-2">Silakan isi data diri Anda dengan lengkap dan benar.</p>
                    </div>
                    {/* Form */}
                    <form className="p-8 space-y-8" onSubmit={onSubmit}>                   
                        {/* Identitas Diri */}
                        <section>
                            <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                Identitas Diri
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* nama */}
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Nama Lengkap</label>
                                    <input type="text" name='Nama lengkap' required placeholder="Sesuai KTP/Ijazah" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none font-semibold text-slate-600" />
                                </div>
                                {/* nik */}
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">NIK (KTP)</label>
                                    <input type="number" name='NIK' required placeholder="16 digit nomor induk" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none font-semibold text-slate-600" />
                                </div>
                                {/* tempat */}
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Tempat Lahir</label>
                                    <input type="text" name='Tempat lahir' required placeholder="Kota Kelahiran" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none font-semibold text-slate-600" />
                                </div>
                                {/* tanggal */}
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Tanggal Lahir</label>
                                    <input type="date" name='Tanggal lahir' required className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none font-semibold text-slate-600" />
                                </div>
                                {/* alamat */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Alamat Lengkap</label>
                                    <textarea rows="3" name='Alamat lengkap' required placeholder="Nama jalan, RT/RW, Kecamatan, Kota" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none font-semibold text-slate-600"></textarea>
                                </div>
                            </div>
                        </section>
                        <hr className="border-slate-100" />
                        {/* Kontak & Pendidikan */}
                        <section>
                            <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                                Kontak & Pendidikan
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* no tlp */}
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Nomor WhatsApp</label>
                                    <input type="tel" name='No tlp' required placeholder="0812xxxx" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none font-semibold text-slate-600" />
                                </div>
                                {/* email */}
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Alamat Email</label>
                                    <input type="email" name='Email' required placeholder="nama@email.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none font-semibold text-slate-600" />
                                </div>
                                {/* pendidikan */}
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Pendidikan Terakhir</label>
                                    <select name='Pendidikan' required className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none font-semibold text-slate-600">
                                        <option value="">Pilih Pendidikan...</option>
                                        <option value="SD">SD</option>
                                        <option value="SMP">SMP</option>
                                        <option value="SMA/K">SMA/K</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="S1">S1</option>
                                    </select>
                                </div>
                                {/* tahun lulus */}
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Tahun Lulus</label>
                                    <input type="number" name='Tahun lulus' placeholder="Contoh: 2022" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none font-semibold text-slate-600" />
                                </div>
                            </div>
                        </section>
                        <hr className="border-slate-100" />
                        {/* Pilihan Program */}
                        <section>
                            <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                                Program Pelatihan
                            </h3>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Pilih Judul Pelatihan</label>
                                    <select name="Program pelatihan" required className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none font-semibold text-slate-600 cursor-pointer">
                                        <option value="">Cari program pelatihan...</option>
                                        {dataPelatihan.map((item) => (
                                            <option key={item.id} value={item.judul}>
                                            [{item.kejuruan}] {item.judul}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </section>
                        <hr className="border-slate-100" />
                        {/* Berkas */}
                        <section>
                            <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                                Dokumen Pendukung
                            </h3>                    
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {['FOTO KTP', 'PAS FOTO', 'IJAZAH'].map((label, index) => (
                                    <div key={index} className="flex flex-col space-y-2">
                                        <label 
                                            htmlFor={`link-${index}`} 
                                            className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1"
                                        >
                                            {label} (Link GDrive)
                                        </label>
                                        <div className="relative group">
                                            {/* icon*/}
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg 
                                                    className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="2" 
                                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
                                                    />
                                                </svg>
                                            </div>
                                            {/* Input URL */}
                                            <input
                                            type="url"
                                            id={`link-${index}`}
                                            name={`${label.replace(/\s+/g, '_').toLowerCase()}_link`} // Nama field untuk Web3Forms
                                            placeholder="https://drive.google.com/..."
                                            required
                                            className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>
                                ))}
                                {/* Notes User */}
                                <p className="text-[9px] text-slate-400 italic px-1">
                                    *Pastikan akses file diatur ke "Siapa saja yang memiliki link"
                                </p>
                            </div>
                        </section>
                        {/* button submit */}
                        <div className="pt-6">
                            <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 transition-all active:scale-[0.98]">
                            Daftar Sekarang
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default JoinTraining
