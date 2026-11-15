import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AppSection } from '../types/quiz';

interface HeaderProps {
  currentSection: AppSection;
  hasActiveSession: boolean;
  hasCompletedSession: boolean;
  onNavigate: (section: AppSection) => void;
  onStartPrimary: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  hasActiveSession,
  hasCompletedSession,
  onNavigate,
  onStartPrimary,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { section: AppSection; label: string; disabled?: boolean }[] = [
    { section: AppSection.Home, label: '01 Home' },
    { section: AppSection.Configura, label: '02 Configura' },
    {
      section: AppSection.Interrogazione,
      label: '03 Interrogazione',
      disabled: !hasActiveSession,
    },
    {
      section: AppSection.Risultati,
      label: '04 Risultati',
      disabled: !hasCompletedSession,
    },
    { section: AppSection.Atlante, label: '05 Atlante' },
  ];

  const handleLinkClick = (section: AppSection, disabled?: boolean) => {
    if (disabled) return;
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F7F5]/95 backdrop-blur-xs border-b border-[#171717]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick(AppSection.Home)}
          className="font-display text-base sm:text-lg font-bold tracking-tight text-[#171717] hover:text-[#D62828] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          INTERROGAMI!
        </button>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Navigazione principale"
        >
          {navItems.map((item) => {
            const isActive = currentSection === item.section;
            return (
              <button
                key={item.section}
                type="button"
                disabled={item.disabled}
                onClick={() => handleLinkClick(item.section, item.disabled)}
                className={`text-sm font-mono-tech py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                  item.disabled
                    ? 'text-[#A3A39D] border-transparent cursor-not-allowed'
                    : isActive
                      ? 'text-[#D62828] border-[#D62828] font-semibold cursor-pointer'
                      : 'text-[#171717] border-transparent hover:border-[#171717] cursor-pointer'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onStartPrimary();
            }}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-mono-tech font-semibold tracking-wide bg-[#D62828] text-white border border-[#D62828] hover:bg-[#a81c1c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            INIZIA PROVA
          </button>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-[#171717] bg-white text-[#171717] cursor-pointer"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#171717] bg-white px-4 py-4">
          <nav className="flex flex-col gap-2" aria-label="Menu mobile">
            {navItems.map((item) => {
              const isActive = currentSection === item.section;
              return (
                <button
                  key={item.section}
                  type="button"
                  disabled={item.disabled}
                  onClick={() => handleLinkClick(item.section, item.disabled)}
                  className={`w-full text-left px-3 py-2.5 text-sm font-mono-tech border transition-colors ${
                    item.disabled
                      ? 'text-[#A3A39D] border-[#E5E5DF] bg-[#F7F7F5] cursor-not-allowed'
                      : isActive
                        ? 'text-white bg-[#171717] border-[#171717]'
                        : 'text-[#171717] bg-white border-[#D4D4CE] hover:border-[#171717]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartPrimary();
              }}
              className="mt-2 w-full px-4 py-3 text-xs font-mono-tech font-semibold bg-[#D62828] text-white border border-[#D62828] cursor-pointer"
            >
              INIZIA PROVA
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
