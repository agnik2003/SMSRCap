import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userName, setUserName] = useState(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Scroll Effect (Enhanced Glassmorphism)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Auth Session Check
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedName = localStorage.getItem('userName');
    
    if (token && storedName) {
      setUserName(storedName.split(' ')[0]); 
    } else {
      setUserName(null);
    }
  }, [location.pathname]);

  // 3. Secure Logout Protocol
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setUserName(null);
    setIsOpen(false);
    navigate('/login'); 
  };

  const navLinks = ['Home', 'About Us', 'Services', 'Blog', 'Careers', 'Contact'];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}} />

      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-[#050505]/50 backdrop-blur-md border-b border-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* PREMIUM CUSTOM LOGO */}
            <Link to="/" className="flex items-center gap-3.5 group">
              
              {/* Animated SVG Tech Icon */}
              <div className="relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-green-500/10 border border-green-500/30 rounded-xl group-hover:border-green-400 group-hover:bg-green-500/20 transition-all duration-500 overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.15)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                
                {/* Sweeping Light Effect on Hover */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer skew-x-12"></div>
                
                {/* 3D Stacked Layers SVG */}
                <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L20 7.5L12 12L4 7.5L12 3Z" stroke="#22c55e" strokeWidth="2" strokeLinejoin="round" fill="#22c55e" fillOpacity="0.2"/>
                  <path d="M4 12L12 16.5L20 12" stroke="#22c55e" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M4 16.5L12 21L20 16.5" stroke="#22c55e" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Perfectly Balanced Typography */}
              <div className="flex flex-col justify-center pt-1">
                <h1 className="font-black text-xl md:text-[26px] tracking-tight text-white leading-none mb-1.5 flex items-center">
                  SM<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 ml-1.5">SOFTWARE</span>
                </h1>
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-5 bg-gradient-to-r from-green-500 to-transparent"></div>
                  <span className="text-[0.60rem] md:text-[0.65rem] font-bold text-gray-400 tracking-[0.3em] uppercase leading-none mt-0.5">
                    Resource Capital
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                const isActive = location.pathname === path;
                
                return (
                  <Link 
                    key={item} 
                    to={path}
                    className={`px-4 py-2 rounded-md text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                      isActive 
                        ? 'text-green-400 bg-green-500/10' 
                        : 'text-gray-300 hover:text-green-400 hover:bg-white/5'
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Auth Section */}
            <div className="hidden lg:flex items-center space-x-6">
              {userName ? (
                <>
                  <div className="flex items-center px-3 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-md shadow-sm">
                    <User className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-300 text-sm font-bold tracking-wider">Hi, <span className="text-white">{userName}</span></span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center text-gray-500 hover:text-red-400 transition-colors text-sm font-bold tracking-wider group"
                  >
                    <LogOut className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    LOGOUT
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-300 hover:text-green-400 transition-colors text-sm font-bold tracking-wider">
                    LOG IN
                  </Link>
                  <Link to="/signup" className="px-6 py-2.5 bg-green-500/10 border border-green-500/50 text-green-400 rounded-md shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:bg-green-500 hover:text-black hover:border-green-500 transition-all duration-300 text-sm font-bold tracking-widest backdrop-blur-sm">
                    INITIALIZE
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-green-400 p-2 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 absolute w-full shadow-2xl">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              
              {userName && (
                <div className="flex items-center px-3 py-4 mb-2 bg-white/5 rounded-md border border-white/10 backdrop-blur-md">
                  <User className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 text-sm font-bold tracking-wider uppercase">Active Session: <span className="text-white">{userName}</span></span>
                </div>
              )}

              {navLinks.map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                return (
                  <Link 
                    key={item} 
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-sm font-bold tracking-wider uppercase text-gray-300 hover:text-green-400 hover:bg-white/5 rounded-md transition-colors"
                  >
                    {item}
                  </Link>
                );
              })}
              
              <div className="w-full h-px bg-white/10 my-4"></div>
              
              {userName ? (
                <button 
                  onClick={handleLogout} 
                  className="flex items-center justify-center w-full mt-2 px-5 py-3 border border-red-500/50 bg-red-500/5 text-red-400 font-bold tracking-widest rounded-md hover:bg-red-500 hover:text-black transition-all"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  TERMINATE SESSION
                </button>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-bold tracking-wider text-gray-300 hover:text-green-400">LOG IN</Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)} className="block mt-2 w-full text-center px-5 py-3 border border-green-500 text-green-400 font-bold tracking-widest rounded-md hover:bg-green-500 hover:text-black transition-all">
                    INITIALIZE
                  </Link>
                </>
              )}

            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;