import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { to: 'hero', label: 'Intro' },
        { to: 'about', label: 'About' },
        { to: 'experience', label: 'Experience' },
        { to: 'project', label: 'Project' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white border-b border-b-slate-300 z-50">
            <div className="mx-auto max-w-full p-4 px-6 md:px-24">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-primary font-mono tracking-tight">
                        Willard De los Santos
                    </h1>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="hover:text-foreground/80 cursor-pointer"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu with Transition */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="flex flex-col space-y-2 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth={true}
                                duration={100}
                                offset={-80}
                                className="hover:text-foreground/80 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
