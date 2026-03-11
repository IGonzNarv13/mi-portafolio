import { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

const themes = [
  { name: 'Modern Indigo', class: 'default', color: '#6366f1', bg: '#0f172a' },
  { name: 'Ocean-Light', class: 'theme-ocean-light', color: '#3b82f6', bg: '#ffffff' },
  { name: 'Midnight Rose', class: 'theme-midnight-rose', color: '#ff096c', bg: '#192731' },
  { name: 'Classic Executive', class: 'theme-classic', color: '#B2E0D6', bg: '#212842' },
];

const ThemeSwitcher = () => {
  const getInitialTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'default' : 'theme-ocean-light';
  };

  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);

  useEffect(() => {
    const html = document.documentElement;
    themes.forEach((t) => html.classList.remove(t.class));
    if (currentTheme !== 'default') html.classList.add(currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="fixed bottom-8 left-8 z-50 group">
      <div className="flex flex-col-reverse items-center gap-4">
        {/* Botón Principal */}
        <button className="p-4 bg-surface border border-primary/20 rounded-full text-primary shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:scale-110 transition-all active:scale-95">
          <Palette size={24} />
        </button>

        {/* Menú Flotante con más margen (gap-4) */}
        <div className="hidden group-hover:flex flex-col gap-4 bg-surface/90 backdrop-blur-md p-4 rounded-3xl border border-primary/10 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          {themes.map((theme) => (
            <button
              key={theme.class}
              onClick={() => setCurrentTheme(theme.class)}
              title={theme.name}
              // Añadimos un ring-1 para definir el borde incluso si el color es similar al fondo
              className={`w-12 h-12 rounded-full border-2 overflow-hidden relative transition-all hover:scale-110 flex ring-1 ring-text-body/10 ${
                currentTheme === theme.class ? 'ring-primary ring-offset-2' : ''
              }`}
              style={{ borderColor: currentTheme === theme.class ? 'white' : 'transparent' }}
            >
              {/* Representación visual del tema: Fondo y Acento */}
              <div className="w-1/2 h-full" style={{ backgroundColor: theme.bg }} />
              <div className="w-1/2 h-full" style={{ backgroundColor: theme.color }} />
              
              {currentTheme === theme.class && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <Check size={20} className="text-white drop-shadow-md" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;