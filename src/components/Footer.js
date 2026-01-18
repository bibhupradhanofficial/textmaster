import React from "react";
import { FiLinkedin, FiGithub, FiYoutube, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Footer(props) {
  const isDark = props.mode === 'dark';
  
  return (
    <footer 
      className="mt-auto py-4" 
      style={{ 
        background: isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="container text-center">
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="/" className={`text-${isDark ? 'light' : 'dark'} opacity-50 hover-opacity-100 transition-opacity`}>
            <FiLinkedin size={20} />
          </a>
          <a href="/" className={`text-${isDark ? 'light' : 'dark'} opacity-50 hover-opacity-100 transition-opacity`}>
            <FiGithub size={20} />
          </a>
          <a href="/" className={`text-${isDark ? 'light' : 'dark'} opacity-50 hover-opacity-100 transition-opacity`}>
            <FiYoutube size={20} />
          </a>
          <a href="/" className={`text-${isDark ? 'light' : 'dark'} opacity-50 hover-opacity-100 transition-opacity`}>
            <FiInstagram size={20} />
          </a>
          <a href="/" className={`text-${isDark ? 'light' : 'dark'} opacity-50 hover-opacity-100 transition-opacity`}>
            <FiTwitter size={20} />
          </a>
        </div>
        <p className={`mb-0 small ${isDark ? 'text-white-50' : 'text-muted'}`}>
          © {new Date().getFullYear()} <span className="fw-bold">TextMaster</span>. Crafted with precision.
        </p>
      </div>
    </footer>
  );
}
