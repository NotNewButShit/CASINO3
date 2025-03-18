import React, { useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
  darkMode?: boolean;
  onDarkModeToggle?: (isDark: boolean) => void;
}

const Header = ({
  title = "Top 10 Philippines Online Casinos",
  darkMode = false,
  onDarkModeToggle = () => {},
}: HeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDarkModeToggle = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    onDarkModeToggle(newDarkModeState);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary md:text-2xl">
            {title}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Casinos
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Bonuses
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Dark Mode Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Sun
              className={cn(
                "h-4 w-4",
                isDarkMode ? "text-muted-foreground" : "text-foreground",
              )}
            />
            <Switch
              checked={isDarkMode}
              onCheckedChange={handleDarkModeToggle}
              aria-label="Toggle dark mode"
            />
            <Moon
              className={cn(
                "h-4 w-4",
                isDarkMode ? "text-foreground" : "text-muted-foreground",
              )}
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border py-3 px-4">
          <nav className="flex flex-col space-y-3">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Casinos
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Bonuses
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
