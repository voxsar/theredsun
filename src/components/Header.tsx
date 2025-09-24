import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
	currentPage: string;
	setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigation = [
		{ name: 'Home', id: 'home' },
		{ name: 'About', id: 'about' },
		{ name: 'Services', id: 'services' },
		{ name: 'Products', id: 'products' },
		{ name: 'Ethical AI', id: 'ethical-ai' },
		{ name: 'Sustainability', id: 'sustainability' },
		{ name: 'Contact', id: 'contact' },
	];

        return (
                <header className="fixed top-0 left-0 right-0 z-50 bg-orange-100">
                        <div className="w-full px-4 sm:px-6 lg:px-10">
                                <div className="flex justify-between items-center h-16">
                                        <div className="flex items-center">
                                                <button
                                                        onClick={() => setCurrentPage('home')}
                                                        className="text-2xl font-title font-bold text-black transition-opacity hover:opacity-80"
                                                >
                                                        THE RED S/N
                                                </button>
                                        </div>

                                        {/* Desktop Navigation */}
                                        <nav className="hidden lg:flex items-center space-x-8">
                                                {navigation.map((item) => (
                                                        <button
                                                                key={item.id}
                                                                onClick={() => setCurrentPage(item.id)}
                                                                className={`menu-item text-xl transition-opacity ${currentPage === item.id
                                                                                ? 'opacity-100'
                                                                                : 'opacity-70 hover:opacity-100 hover:underline'
                                                                        }`}
                                                        >
                                                                {item.name}
                                                        </button>
                                                ))}
                                                <button
                                                        onClick={() => setCurrentPage('quote')}
                                                        className="px-6 py-2 rounded-full bg-white text-black border border-black transition-colors hover:bg-orange-200"
                                                >
                                                        Get Quote
                                                </button>
                                        </nav>

                                        {/* Mobile menu button */}
                                        <button
                                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                                className="lg:hidden p-2 text-black hover:opacity-80"
                                        >
                                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                        </button>
                                </div>

                                {/* Mobile Navigation */}
                                {isMenuOpen && (
                                        <div className="lg:hidden absolute top-16 left-0 right-0 bg-orange-100 border-b border-orange-200 shadow-lg">
                                                <nav className="px-4 py-4 space-y-2">
                                                        {navigation.map((item) => (
                                                                <button
                                                                        key={item.id}
                                                                        onClick={() => {
                                                                                setCurrentPage(item.id);
                                                                                setIsMenuOpen(false);
                                                                        }}
                                                                        className={`block w-full text-left px-4 py-2 rounded-lg menu-item transition-opacity ${currentPage === item.id
                                                                                        ? 'opacity-100 bg-white'
                                                                                        : 'opacity-70 hover:opacity-100 hover:bg-white/70'
                                                                                }`}
                                                                >
                                                                        {item.name}
                                                                </button>
                                                        ))}
                                                        <button
                                                                onClick={() => {
                                                                        setCurrentPage('quote');
                                                                        setIsMenuOpen(false);
                                                                }}
                                                                className="block w-full text-left px-4 py-2 rounded-lg bg-white text-black border border-black transition-colors mt-4 hover:bg-orange-200"
                                                        >
                                                                Get Quote
                                                        </button>
                                                </nav>
                                        </div>
                                )}
                        </div>
                </header>
        );
};

export default Header;