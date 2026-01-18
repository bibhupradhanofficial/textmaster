import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiType, FiCopy, FiTrash2, FiMinimize2, 
  FiCode, FiAtSign, FiRefreshCw, FiHash, FiSlash, 
  FiAlignLeft, FiAlignJustify, FiTerminal, FiList, FiArrowDown, FiArrowUp, FiLink, FiRotateCcw
} from "react-icons/fi";

export default function TextArea(props) {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  const isDarkMode = props.mode === "dark";

  const showSuccess = (msg) => props.showAlert(msg, "success");
  const showWarning = (msg) => props.showAlert(msg, "warning");
  const showError = (msg) => props.showAlert(msg, "danger");

  // --- History Management ---
  const saveToHistory = () => {
    setHistory(prev => [...prev, text]);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const previousText = history[history.length - 1];
    const newHistory = history.slice(0, -1);
    setHistory(newHistory);
    setText(previousText);
    showSuccess("Undid last action!");
  };

  // --- Handlers ---
  const handleTextTransform = (type) => {
    if (!text) return;
    saveToHistory();
    let newText = text;
    switch (type) {
      case 'upper': newText = text.toUpperCase(); break;
      case 'lower': newText = text.toLowerCase(); break;
      case 'title': 
        newText = text.toLowerCase().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "); 
        break;
      case 'sentence': 
        newText = text.toLowerCase().split(". ").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(". "); 
        break;
      case 'alternating':
        newText = text.split("").map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join("");
        break;
      case 'capitalize':
        newText = text.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
        break;
      case 'reverse': newText = text.split("").reverse().join(""); break;
      case 'slugify':
        newText = text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
        break;
      default: break;
    }
    setText(newText);
    showSuccess(`Text transformed!`);
  };

  const handleFormatting = (type) => {
    if (!text) return;
    saveToHistory();
    let newText = text;
    switch (type) {
      case 'remove-spaces': newText = text.split(/[ ]+/).join(" "); break;
      case 'remove-lines': newText = text.replace(/\n/g, " "); break;
      case 'add-lines': newText = text.replace(/\. /g, ".\n"); break;
      case 'remove-numbers': newText = text.replace(/[0-9]/g, ""); break;
      case 'remove-special': newText = text.replace(/[^a-zA-Z0-9\s]/g, ""); break;
      case 'remove-duplicates':
        newText = [...new Set(text.split('\n'))].join('\n');
        break;
      case 'sort-lines-az':
        newText = text.split('\n').sort().join('\n');
        break;
      case 'sort-lines-za':
        newText = text.split('\n').sort().reverse().join('\n');
        break;
      case 'add-bullets':
        newText = text.split('\n').map(line => `• ${line}`).join('\n');
        break;
      case 'trim-lines':
        newText = text.split('\n').map(line => line.trim()).join('\n');
        break;
      default: break;
    }
    setText(newText);
    showSuccess("Formatting applied!");
  };

  const handleUtils = (type) => {
    if (!text) return;
    saveToHistory();
    try {
      if (type === 'extract-email') {
        const emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        if (emails) {
          setText(emails.join("\n"));
          showSuccess("Emails extracted!");
        } else {
          showWarning("No emails found.");
        }
      } else if (type === 'b64-encode') {
        setText(btoa(text));
        showSuccess("Encoded to Base64");
      } else if (type === 'b64-decode') {
        setText(atob(text));
        showSuccess("Decoded from Base64");
      } else if (type === 'text-binary') {
        setText(text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' '));
        showSuccess("Converted to Binary");
      }
    } catch (e) {
      showError("Operation failed. Check input.");
    }
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    showSuccess("Copied to clipboard!");
  };

  const handleClear = () => {
    saveToHistory();
    setText("");
    showSuccess("Text cleared!");
  };

  // --- Stats Calculation ---
  const getStats = () => {
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");
    return {
      words: words.length,
      chars: text.length,
      sentences: text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length,
      paragraphs: text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length,
      readTime: (0.008 * words.length).toFixed(1),
      speakTime: (words.length / 130).toFixed(1), // Average speaking rate 130 wpm
      longestWord: longestWord.length > 20 ? longestWord.substring(0, 20) + "..." : longestWord || "N/A"
    };
  };
  const stats = getStats();

  // --- Components ---
  const ActionButton = ({ icon: Icon, label, onClick, color = "btn-vibrant" }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={!text}
      className={`btn ${color} d-flex align-items-center justify-content-center gap-2 flex-grow-1`}
      style={{ minWidth: '140px' }}
    >
      {Icon && <Icon size={18} />}
      {label}
    </motion.button>
  );

  const StatBox = ({ label, value }) => (
    <motion.div 
      whileHover={{ y: -5 }}
      className="stat-card"
    >
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container py-4"
    >
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ 
          background: isDarkMode 
            ? 'linear-gradient(to right, #818cf8, #f472b6)' 
            : 'linear-gradient(to right, #6366f1, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {props.heading}
        </h1>
        <p className={`lead ${isDarkMode ? 'text-white-50' : 'text-muted'}`}>
          Advanced text manipulation and analysis tool
        </p>
      </div>

      <div className="row g-4">
        {/* Input Section */}
        <div className="col-lg-8">
          <div className="glass-card h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold m-0"><FiTerminal className="me-2"/>Editor</h4>
              <div className="d-flex gap-2">
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: -90 }} 
                  onClick={handleUndo} 
                  disabled={history.length === 0}
                  className="btn btn-sm btn-outline-secondary rounded-circle p-2"
                  title="Undo"
                >
                  <FiRotateCcw size={16} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }} 
                  onClick={handleCopy} 
                  className="btn btn-sm btn-outline-primary rounded-circle p-2"
                  title="Copy"
                >
                  <FiCopy size={16} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }} 
                  onClick={handleClear} 
                  className="btn btn-sm btn-outline-danger rounded-circle p-2"
                  title="Clear"
                >
                  <FiTrash2 size={16} />
                </motion.button>
              </div>
            </div>
            <textarea
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="12"
              placeholder="Type or paste your text here..."
              style={{ resize: 'vertical', minHeight: '300px' }}
            ></textarea>
          </div>
        </div>

        {/* Stats Section */}
        <div className="col-lg-4">
          <div className="glass-card h-100">
            <h4 className="fw-bold mb-4">Statistics</h4>
            <div className="d-grid grid-cols-2 gap-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <StatBox label="Words" value={stats.words} />
              <StatBox label="Characters" value={stats.chars} />
              <StatBox label="Sentences" value={stats.sentences} />
              <StatBox label="Paragraphs" value={stats.paragraphs} />
            </div>
            
            <div className="mt-4 p-3 rounded-3" style={{ background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }}>
               <div className="d-flex justify-content-between mb-2">
                 <span className={`small ${isDarkMode ? 'text-white-50' : 'text-muted'}`}>Longest Word:</span>
                 <span className="fw-bold">{stats.longestWord}</span>
               </div>
               <div className="row text-center mt-3">
                 <div className="col-6">
                    <h6 className="text-uppercase text-muted small fw-bold mb-1">Reading</h6>
                    <div className="fw-bold">{stats.readTime} m</div>
                 </div>
                 <div className="col-6">
                    <h6 className="text-uppercase text-muted small fw-bold mb-1">Speaking</h6>
                    <div className="fw-bold">{stats.speakTime} m</div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="col-12">
          <div className="glass-card">
            <h4 className="fw-bold mb-4">Toolkit</h4>
            
            <div className="row g-4">
              <div className="col-md-6 col-xl-3">
                <div className="function-group">
                  <h5 className="mb-3">TRANSFORM</h5>
                  <div className="d-flex flex-column gap-2">
                    <ActionButton label="UPPERCASE" onClick={() => handleTextTransform('upper')} icon={FiType} />
                    <ActionButton label="lowercase" onClick={() => handleTextTransform('lower')} icon={FiType} />
                    <ActionButton label="Title Case" onClick={() => handleTextTransform('title')} icon={FiType} />
                    <ActionButton label="Slugify" onClick={() => handleTextTransform('slugify')} icon={FiLink} />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="function-group">
                  <h5 className="mb-3">FORMAT</h5>
                  <div className="d-flex flex-column gap-2">
                    <ActionButton label="Remove Spaces" onClick={() => handleFormatting('remove-spaces')} icon={FiMinimize2} />
                    <ActionButton label="One Line" onClick={() => handleFormatting('remove-lines')} icon={FiAlignLeft} />
                    <ActionButton label="Add Bullets" onClick={() => handleFormatting('add-bullets')} icon={FiList} />
                    <ActionButton label="Trim Lines" onClick={() => handleFormatting('trim-lines')} icon={FiAlignJustify} />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="function-group">
                  <h5 className="mb-3">LINE OPS</h5>
                  <div className="d-flex flex-column gap-2">
                    <ActionButton label="Sort A-Z" onClick={() => handleFormatting('sort-lines-az')} icon={FiArrowDown} />
                    <ActionButton label="Sort Z-A" onClick={() => handleFormatting('sort-lines-za')} icon={FiArrowUp} />
                    <ActionButton label="Unique Lines" onClick={() => handleFormatting('remove-duplicates')} icon={FiList} />
                    <ActionButton label="No Empty Lines" onClick={() => handleFormatting('remove-lines')} icon={FiMinimize2} />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="function-group">
                  <h5 className="mb-3">ADVANCED</h5>
                  <div className="d-flex flex-column gap-2">
                    <ActionButton label="Extract Emails" onClick={() => handleUtils('extract-email')} icon={FiAtSign} />
                    <ActionButton label="Base64 Encode" onClick={() => handleUtils('b64-encode')} icon={FiCode} />
                    <ActionButton label="Text to Binary" onClick={() => handleUtils('text-binary')} icon={FiCode} />
                    <ActionButton label="No Special" onClick={() => handleFormatting('remove-special')} icon={FiSlash} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="col-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h4 className="fw-bold mb-3">Preview</h4>
            <div className="p-3 rounded-3" style={{ 
              background: isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.5)',
              minHeight: '100px',
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap'
            }}>
              {text.length > 0 ? text : <span className="opacity-50 fst-italic">Nothing to preview...</span>}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
