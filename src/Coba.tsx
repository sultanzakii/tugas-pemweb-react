export default function Coba() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 p-8 text-center transition-all hover:border-blue-500">
        
        {/* Lingkaran Profil */}
        <div className="w-32 h-32 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full mx-auto p-1 mb-6">
          <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
             <span className="text-5xl">👤</span>
          </div>
        </div>
        
        {/* Teks Nama & NIM */}
        <h1 className="text-3xl font-bold text-white mb-2">Muhammad Nibras Alghifary</h1>
        <p className="text-blue-400 font-medium mb-4">NIM: 253140707111062</p>
        
        {/* Deskripsi */}
        <div className="bg-slate-700/50 rounded-xl p-4 mb-6">
          <p className="text-slate-300 text-sm italic">
            "Mahasiswa Teknologi Informasi - Universitas Brawijaya. Fokus pada pengembangan Frontend menggunakan React & Tailwind."
          </p>
        </div>

        {/* Tombol */}
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition font-semibold">GitHub</button>
          <button className="flex-1 border border-slate-600 text-slate-300 hover:bg-slate-700 py-2 rounded-lg transition">Profil Tim</button>
        </div>

      </div>
    </div>
  )
}