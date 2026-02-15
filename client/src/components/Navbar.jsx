import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'Overview', to: '#overview' },
        { name: 'Location', to: '/location-benefits' },
        { name: 'Connectivity', to: '#connectivity' },
        { name: 'Contact', to: '#contact' },
    ];

    const handleScrollToSection = (e, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        // Check if it's a route (starts with /) or a hash link (starts with #)
        if (id.startsWith('/')) {
            // It's a route, navigate to it
            window.location.assign(id);
        } else if (id.startsWith('#')) {
            // It's a hash link, scroll to it
            if (location.pathname !== '/') {
                // Navigate to home first with hash
                window.location.assign(`/${id}`);
            } else {
                // If already on home, smooth scroll
                const element = document.querySelector(id);
                if (element) {
                    // Account for fixed navbar height (approx 80px)
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-linear-to-b from-black/20 to-transparent'
                } py-4`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-primary to-teal-600 flex items-center justify-center text-white font-serif font-bold text-lg group-hover:shadow-lg transition-all">
                        PH
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-serif font-bold text-lg leading-none transition-colors ${isScrolled ? 'text-secondary' : 'text-white'}`}>
                            PRESTIGE HORIZONS
                        </span>
                        <span className={`text-[9px] tracking-widest uppercase transition-colors ${isScrolled ? 'text-gray-500' : 'text-gray-200'}`}>Premium Living</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.to}
                            onClick={(e) => handleScrollToSection(e, link.to)}
                            className={`text-sm font-medium transition-colors uppercase tracking-wide relative group ${
                                isScrolled 
                                    ? 'text-secondary hover:text-primary' 
                                    : 'text-white hover:text-yellow-200'
                            }`}
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-teal-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <Link to="/admin" className="btn-primary ml-4">
                        Admin
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden focus:outline-none transition-colors ${
                        isScrolled ? 'text-secondary' : 'text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl py-6 flex flex-col items-center gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.to}
                            onClick={(e) => handleScrollToSection(e, link.to)}
                            className="text-sm font-medium text-secondary hover:text-primary transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link to="/admin" className="btn-primary w-3/4">
                        Admin
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
