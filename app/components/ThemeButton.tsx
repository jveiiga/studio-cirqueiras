"use client";

export default function ThemeButton() {
  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <button className="relative overflow-hidden group border-none py-2 px-7 rounded-3xl uppercase cursor-pointer bg-[#fdecda] hover:text-white transition-colors duration-300">
      <span className="absolute inset-0 bg-black -translate-x-full transition-transform duration-800 ease-in-out group-hover:translate-x-0" /><span className="relative z-10 transition-colors duration-800 ease-in-out text-sm group-hover:text-white">Cursos</span>
    </button>
  );
}
