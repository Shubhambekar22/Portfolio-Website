export default function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-2">
         <p className="text-slate-600 font-mono text-xs">
           © {new Date().getFullYear()} Shubham Ambekar. All systems nominal.
         </p>
         <p className="text-[10px] text-slate-700 uppercase tracking-widest">
           Built with Next.js & Tailwind CSS
         </p>
      </div>
    </footer>
  );
}
