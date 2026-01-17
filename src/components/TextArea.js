import React, { useState } from "react";


export default function TextArea(props) {
  const [text, setText] = useState("");
  const isDarkMode = props.mode === "dark";

  const textareaClear = () => {
    setText("");
    props.showAlert("Text area has been cleared.", "success");
  };

  const textUppercase = () => {
    setText(text.toUpperCase());
    props.showAlert("Text has been converted to uppercase.", "success");
  };

  const textLowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("Text has been converted to lowercase.", "success");
  };

  const textTitleCase = () => {
    const titleCase = text
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    setText(titleCase);
    props.showAlert("Text has been converted to title case.", "success");
  };

  const textSentenceCase = () => {
    const sentenceCase = text
      .toLowerCase()
      .split(". ")
      .map((sentence) => {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
      })
      .join(". ");
    setText(sentenceCase);
    props.showAlert("Text has been converted to sentence case.", "success");
  };

  const textAlternatingCase = () => {
    const alternatingCase = text
      .split("")
      .map((char, index) => {
        return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
      })
      .join("");
    setText(alternatingCase);
    props.showAlert("Text has been converted to alternating case.", "success");
  };

  const extraspacesRemove = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra spaces has been removed.", "success");
  };

  const removeLineBreaks = () => {
    setText(text.replace(/\n/g, " "));
    props.showAlert("Line breaks have been removed.", "success");
  };

  const addLineBreaks = () => {
    setText(text.replace(/\. /g, ".\n"));
    props.showAlert("Line breaks have been added after sentences.", "success");
  };

  const capitalizeFirstLetter = () => {
    const capitalized = text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(capitalized);
    props.showAlert(
      "First letter of each word has been capitalized.",
      "success"
    );
  };

  const textReverse = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Text has been reversed.", "success");
  };

  const textCopy = () => {
    const previewText = text.length > 0 ? text : "Nothing to preview!";
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = previewText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    props.showAlert("Preview text has been copied.", "success");
  };

  const removeNumbers = () => {
    setText(text.replace(/[0-9]/g, ""));
    props.showAlert("Numbers have been removed.", "success");
  };

  const removeSpecialChars = () => {
    setText(text.replace(/[^a-zA-Z0-9\s]/g, ""));
    props.showAlert("Special characters have been removed.", "success");
  };

  const extractEmails = () => {
    const emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    if (emails) {
      setText(emails.join("\n"));
      props.showAlert("Emails have been extracted.", "success");
    } else {
      props.showAlert("No emails found!", "warning");
    }
  };

  const base64Encode = () => {
    try {
      setText(btoa(text));
      props.showAlert("Text has been Base64 encoded.", "success");
    } catch (e) {
      props.showAlert("Failed to encode text.", "danger");
    }
  };

  const base64Decode = () => {
    try {
      setText(atob(text));
      props.showAlert("Text has been Base64 decoded.", "success");
    } catch (e) {
      props.showAlert("Invalid Base64 string.", "danger");
    }
  };

  const getTextStats = () => {
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    const wordCount = words.length;
    const charCount = text.length;
    const letterCount = text.replace(/[^a-zA-Z]/g, "").length;
    const numberCount = text.replace(/[^0-9]/g, "").length;
    const spaceCount = text.split("").filter((char) => char === " ").length;
    const punctuationCount = text
      .split("")
      .filter((char) => /[.,!?;:]/.test(char)).length;
    const paragraphCount = text
      .split(/\n\s*\n/)
      .filter((p) => p.trim().length > 0).length;
    const sentenceCount = text
      .split(/[.!?]+/)
      .filter((s) => s.trim().length > 0).length;

    // Calculate average word length
    const avgWordLength =
      wordCount > 0
        ? (
          words.reduce((acc, word) => acc + word.length, 0) / wordCount
        ).toFixed(1)
        : 0;

    // Find most common words (top 3)
    const wordFreq = {};
    words.forEach((word) => {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    });
    const commonWords = Object.entries(wordFreq)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([word, count]) => `${word} (${count})`)
      .join(", ");

    return {
      wordCount,
      charCount,
      letterCount,
      numberCount,
      spaceCount,
      punctuationCount,
      paragraphCount,
      sentenceCount,
      avgWordLength,
      commonWords,
    };
  };

  const stats = getTextStats();

  const renderButtonGroup = (title, buttons, groupClass = "") => (
    <div className={`function-group ${groupClass} mb-4`}>
      <h5 className="mb-3 text-uppercase fw-bold opacity-75">{title}</h5>
      <div className="d-flex flex-wrap gap-2">{buttons}</div>
    </div>
  );

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <div className="container pb-5">
        <h1 className="text-center mb-5 fw-bold display-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>{props.heading}</h1>

        <div className="glass-card">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 className="mb-3 fw-bold">Input Text</h3>
              <textarea
                className={`form-control ${isDarkMode ? "dark" : ""}`}
                id="textArea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="12"
                placeholder="Enter your text here..."
                style={{ resize: 'none' }}
              ></textarea>
            </div>
            <div className="col-md-6 mb-4">
              <h3 className="mb-3 fw-bold">Preview</h3>
              <div
                className={`preview-section ${isDarkMode ? "dark" : ""}`}
                style={{
                  whiteSpace: "pre-wrap",
                  fontFamily: "monospace",
                  height: "332px", // Match textarea height approx
                  overflowY: "auto",
                }}
              >
                {text.length > 0 ? text : <span className="opacity-50">Your text preview will appear here...</span>}
              </div>
            </div>
          </div>

          <hr className="my-4 opacity-25" />

          <div className="row">
            <div className="col-md-4">
              {renderButtonGroup(
                "Text Case",
                [
                  <button key="uc" type="button" className="btn btn-vibrant btn-sm" onClick={textUppercase} disabled={text.length === 0}>UPPERCASE</button>,
                  <button key="lc" type="button" className="btn btn-vibrant btn-sm" onClick={textLowercase} disabled={text.length === 0}>lowercase</button>,
                  <button key="tc" type="button" className="btn btn-vibrant btn-sm" onClick={textTitleCase} disabled={text.length === 0}>Title Case</button>,
                  <button key="sc" type="button" className="btn btn-vibrant btn-sm" onClick={textSentenceCase} disabled={text.length === 0}>Sentence case</button>,
                  <button key="ac" type="button" className="btn btn-vibrant btn-sm" onClick={textAlternatingCase} disabled={text.length === 0}>aLtErNaTiNg</button>,
                ]
              )}
            </div>
            <div className="col-md-4">
              {renderButtonGroup(
                "Formatting",
                [
                  <button key="es" type="button" className="btn btn-vibrant btn-sm" onClick={extraspacesRemove} disabled={text.length === 0}>Remove Spaces</button>,
                  <button key="rlb" type="button" className="btn btn-vibrant btn-sm" onClick={removeLineBreaks} disabled={text.length === 0}>No Line Breaks</button>,
                  <button key="alb" type="button" className="btn btn-vibrant btn-sm" onClick={addLineBreaks} disabled={text.length === 0}>Add Line Breaks</button>,
                  <button key="cfl" type="button" className="btn btn-vibrant btn-sm" onClick={capitalizeFirstLetter} disabled={text.length === 0}>Capitalize First</button>,
                ]
              )}
            </div>
            <div className="col-md-4">
              {renderButtonGroup(
                "Actions",
                [
                  <button key="rev" type="button" className="btn btn-vibrant btn-sm" onClick={textReverse} disabled={text.length === 0}>Reverse</button>,
                  <button key="clr" type="button" className="btn btn-vibrant btn-sm" onClick={textareaClear} disabled={text.length === 0}>Clear</button>,
                  <button key="cpy" type="button" className="btn btn-vibrant btn-sm" onClick={textCopy} disabled={text.length === 0}>Copy</button>,
                ]
              )}
            </div>
            <div className="col-md-12 mt-3">
              {renderButtonGroup(
                "Advanced",
                [
                  <button key="rn" type="button" className="btn btn-vibrant btn-sm" onClick={removeNumbers} disabled={text.length === 0}>Remove Numbers</button>,
                  <button key="rsc" type="button" className="btn btn-vibrant btn-sm" onClick={removeSpecialChars} disabled={text.length === 0}>Remove Special Chars</button>,
                  <button key="ee" type="button" className="btn btn-vibrant btn-sm" onClick={extractEmails} disabled={text.length === 0}>Extract Emails</button>,
                  <button key="b64e" type="button" className="btn btn-vibrant btn-sm" onClick={base64Encode} disabled={text.length === 0}>Base64 Encode</button>,
                  <button key="b64d" type="button" className="btn btn-vibrant btn-sm" onClick={base64Decode} disabled={text.length === 0}>Base64 Decode</button>,
                ]
              )}
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 className="mb-4 fw-bold">Text Statistics</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>Words</h3>
              <p>{stats.wordCount}</p>
            </div>
            <div className="stat-item">
              <h3>Characters</h3>
              <p>{stats.charCount}</p>
            </div>
            <div className="stat-item">
              <h3>Reading Time</h3>
              <p>{(0.008 * stats.wordCount).toFixed(2)} m</p>
            </div>
            <div className="stat-item">
              <h3>Sentences</h3>
              <p>{stats.sentenceCount}</p>
            </div>
            <div className="stat-item">
              <h3>Paragraphs</h3>
              <p>{stats.paragraphCount}</p>
            </div>
            <div className="stat-item">
              <h3>Avg Word Len</h3>
              <p>{stats.avgWordLength}</p>
            </div>
          </div>
          <div className="mt-3 text-center opacity-75">
            Most common: <strong>{stats.commonWords || "N/A"}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
