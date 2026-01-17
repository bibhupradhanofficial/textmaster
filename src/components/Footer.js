import React from "react";

export default function Footer(props) {
  return (
    <footer className="glass-navbar mt-auto" style={{ borderRadius: '0', marginBottom: '0', borderBottom: 'none', borderTop: '1px solid var(--glass-border-light)', boxShadow: '0 -4px 30px rgba(0, 0, 0, 0.1)' }}>
      <div
        className={`text-center p-3 fw-bold`}
        style={{ color: props.mode === 'dark' ? 'var(--text-color-dark)' : 'var(--text-color-light)' }}
      >
        Copyright ©{" "}
        <a
          className="text-decoration-none fw-bold"
          style={{ color: 'inherit' }}
          href="https://textmaster-by-bibhasindhu.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          TextMaster
        </a>{" "}
        2025
      </div>
    </footer>
  );
}
