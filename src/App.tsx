import { useState } from 'react';
import { BookOpen, Code, Tent, ChevronRight, Rocket, Image as ImageIcon, ExternalLink, Award, FileSpreadsheet, ArrowDownCircle } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('pendidik');

  // Struktur Data dengan Link Bukti Fisik
  const portfolioData = {
    pendidik: [
      {
        title: "Tutor Matematika Terpadu & UTBK",
        place: "Bimbel Khalifah",
        period: "Nov 2022 - Sekarang",
        desc: "Mengelola kelas intensif persiapan UTBK SNBT dan membimbing ratusan siswa lintas jenjang (SD-SMA).",
        highlights: [
          "Merancang bank soal adaptif sesuai silabus dan kurikulum terbaru.",
          "Menjadi representasi lembaga dalam ekspansi program."
        ],
        evidenceLabel: "Lihat Modul & Dokumentasi",
        evidenceTarget: "#gallery"
      },
      {
        title: "Tutor Privat Elite & Olimpiade",
        place: "Independent Educator",
        period: "2024 - Sekarang",
        desc: "Membina tim Olimpiade Matematika SMPN 7 (2025) dan mengajar siswa top-tier (MAN IC Serpong, SMAN 10).",
        highlights: [
          "Sukses meloloskan 2 siswa (Rafa & Rayyan) ke tingkat Provinsi.",
        ],
        evidenceLabel: "Lihat Bukti Kelulusan Siswa",
        evidenceTarget: "#gallery"
      },
      {
        title: "Asisten Laboratorium Matematika",
        place: "Universitas Syiah Kuala",
        period: "Jan 2020 - Nov 2022",
        desc: "Mendukung operasional akademik untuk mata kuliah Pengantar Metode Numerik, Metode Numerik, dan Etnomatematika.",
        highlights: [],
        evidenceTarget: null
      }
    ],
    leader: [
      {
        title: "Event Director & Technical Conceptor",
        place: "SPARK Junior II & Scouting Comp I",
        period: "2024 & 2026",
        desc: "Memimpin end-to-end event management untuk kompetisi pramuka berskala regional di MTsN 3 Banda Aceh.",
        highlights: [
          "Mengelola legalitas proposal, relasi instansi, hingga eksekusi teknis lapangan."
        ],
        evidenceLabel: "Lihat Dokumentasi SPARK",
        evidenceTarget: "#gallery"
      },
      {
        title: "Pembina Utama & Manajer Operasional",
        place: "MTsN Model Banda Aceh",
        period: "Okt 2018 - 2024",
        desc: "Meraih berbagai prestasi prestisius sekaligus menyusun administrasi kurikulum (PROTA & PROSEM).",
        highlights: [
          "Juara Umum 1 Putri (2018) & Juara Umum 3 Putra (2019) dengan total 21+ Trofi.",
          "Membawa tim juara pada K2M Tingkat MTs (2023)."
        ],
        evidenceLabel: "Lihat Trofi & Piagam",
        evidenceTarget: "#gallery"
      }
    ],
    developer: [
      {
        title: "Full-Stack Web Developer",
        place: "tunongbaroh.fun",
        period: "2025 - Sekarang",
        desc: "Membangun platform digital perusahaan untuk pemberdayaan SDM masyarakat dengan antarmuka modern.",
        highlights: [],
        evidenceLabel: "Kunjungi Web Tunong Baroh",
        evidenceTarget: "#gallery" // Bisa diganti URL asli nantinya
      },
      {
        title: "Creator & Lead Developer",
        place: "Personal Lab Projects",
        period: "In-Development",
        desc: "Website Edukasi Privat (Tryout Apps) dan Aplikasi Keuangan/Asisten Pribadi.",
        highlights: [],
        evidenceLabel: "Lihat UI Prototype",
        evidenceTarget: "#gallery"
      },
      {
        title: "Software Engineer (Excel Advanced Logic)",
        place: "Skripsi (Tugas Akhir S1)",
        period: "2023",
        desc: "Mengembangkan Aplikasi Excel Interaktif untuk Simulasi Pembagian Waris di Aceh dengan algoritma Macro.",
        highlights: [],
        evidenceLabel: "Lihat Cuplikan Aplikasi",
        evidenceTarget: "#gallery"
      }
    ]
  };

  const certifications = [
    { name: "Databases and SQL for Data Science", issuer: "IBM", link: "https://coursera.org/share/8aedb988124c9fced9752108619d849a" },
    { name: "Linear Algebra for ML & Data Science", issuer: "DeepLearning.AI", link: "https://coursera.org/share/6962b82404c65f35aa36afa5d1e90c67" },
    { name: "Excel Skills for Business", issuer: "Macquarie University", link: "https://coursera.org/share/a99f2efae310b5750f01ced73893fc78" }
  ];

  const triggerAntigravity = () => {
    document.body.style.transition = "transform 3s ease-in-out";
    document.body.style.transform = "translateY(-100vh) rotate(5deg)";
    setTimeout(() => { document.body.style.transform = "translateY(0) rotate(0)"; }, 4000);
  };

  return (
    // DARK MODE WRAPPER: bg-slate-950 (Sangat gelap), text-slate-300 (Abu terang)
    <div className="bg-slate-950 text-slate-300 antialiased min-h-screen font-sans overflow-x-hidden selection:bg-brand-teal selection:text-white">

      {/* Navigation (Dark UI) */}
      <nav className="bg-slate-950/80 backdrop-blur-md shadow-md fixed w-full z-50 top-0 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-extrabold text-white tracking-tight">
            MW<span className="text-brand-teal">A.</span>
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-400">
            <a href="#about" className="hover:text-brand-teal transition">Profil</a>
            <a href="#portfolio" className="hover:text-brand-teal transition">Rekam Jejak</a>
            <a href="#gallery" className="hover:text-brand-teal transition">Bukti & Galeri</a>
            <a href="#certs" className="hover:text-brand-teal transition">Sertifikasi</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800 text-brand-teal font-bold text-xs tracking-widest uppercase border border-slate-700 shadow-sm">
              Mathematician • Educator • Developer
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Halo, Saya <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-500">Muhammad Wafiq Afansa</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Profesional multidisciplinary yang memadukan logika matematis, rekayasa perangkat lunak, dan manajemen strategis dalam mengembangkan sumber daya manusia.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="mailto:afansa27@gmail.com" className="bg-brand-teal text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-teal-600 transition shadow-[0_0_15px_rgba(13,148,136,0.4)] flex items-center gap-2">
                Hubungi Saya <ChevronRight size={18} />
              </a>
              <a href="#portfolio" className="bg-slate-800 border border-slate-700 text-slate-300 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-700 transition">
                Lihat Portofolio
              </a>
            </div>
          </div>

          <div className="md:w-5/12 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/30 to-blue-600/30 rounded-full blur-3xl scale-110"></div>
            <div className="bg-slate-800 p-3 rounded-full relative z-10 shadow-2xl border border-slate-700">
              <img src="https://via.placeholder.com/500x500" alt="Wafiq Afansa" className="object-cover w-full h-full rounded-full aspect-square opacity-90 hover:opacity-100 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="portfolio" className="py-20 bg-slate-900 px-6 border-y border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pengalaman Strategis</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Pilih tab di bawah untuk melihat detail peran dan bukti portofolio dari setiap pekerjaan saya.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button onClick={() => setActiveTab('pendidik')} className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${activeTab === 'pendidik' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
              <BookOpen size={18} /> Edukasi & Matematika
            </button>
            <button onClick={() => setActiveTab('leader')} className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${activeTab === 'leader' ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
              <Tent size={18} /> Leadership & Manajerial
            </button>
            <button onClick={() => setActiveTab('developer')} className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${activeTab === 'developer' ? 'bg-brand-teal text-white shadow-lg shadow-teal-900/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
              <Code size={18} /> Tech & Development
            </button>
          </div>

          <div className="space-y-6">
            {portfolioData[activeTab as keyof typeof portfolioData].map((item, index) => (
              <div key={index} className="border border-slate-700/50 bg-slate-800/40 p-8 rounded-2xl hover:border-brand-teal/50 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-teal scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-teal transition">{item.title}</h3>
                    <p className="text-blue-400 font-semibold mt-1">{item.place}</p>
                  </div>
                  <span className="text-xs font-bold px-3.5 py-1.5 bg-slate-950 border border-slate-700 text-slate-300 rounded-full whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base font-medium mb-4">{item.desc}</p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm md:text-base mb-6">
                    {item.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}

                {/* TOMBOL LINK BUKTI */}
                {item.evidenceTarget && (
                  <a href={item.evidenceTarget} className="inline-flex items-center gap-2 text-sm font-bold text-brand-teal hover:text-white bg-slate-900/50 hover:bg-brand-teal px-4 py-2 rounded-lg transition-colors">
                    <ArrowDownCircle size={16} /> {item.evidenceLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Galeri untuk Bukti */}
      <section id="gallery" className="py-20 bg-slate-950 px-6">
        <div className="max-w-5xl mx-auto text-center border border-dashed border-slate-700 rounded-2xl py-20 bg-slate-900/20">
          <ImageIcon className="mx-auto text-slate-500 mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-2">Area Galeri & Bukti Fisik</h3>
          <p className="text-slate-400 mb-6">Di sinilah nanti foto modul, trofi pramuka, dan screenshot website akan ditampilkan.</p>
          <p className="text-sm text-brand-teal italic">"Klik tombol bukti pada pengalaman di atas akan meluncur langsung ke kotak ini."</p>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certs" className="py-20 bg-slate-900 px-6 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
              <Award className="text-brand-teal" size={32} /> Sertifikasi Global
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a key={index} href={cert.link} target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-6 rounded-2xl transition-all group block shadow-lg">
                <div className="text-brand-teal mb-4"><FileSpreadsheet size={32} /></div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-teal transition-colors">{cert.name}</h3>
                <p className="text-sm text-slate-400 font-medium mb-4">{cert.issuer}</p>
                <div className="text-xs font-bold text-blue-400 flex items-center gap-1 group-hover:text-white transition">
                  Verifikasi Kredensial <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 text-center relative border-t border-slate-800">
        <p className="text-sm mb-4">© 2026 Muhammad Wafiq Afansa. Developed with React & Tailwind.</p>
        <button onClick={triggerAntigravity} className="text-slate-600 hover:text-brand-teal transition flex items-center justify-center gap-2 mx-auto text-xs" title="import antigravity">
          <Rocket size={14} /> activate antigravity
        </button>
      </footer>

    </div>
  );
}

export default App;