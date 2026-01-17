import React from "react";
import PropTypes from "prop-types";

export default function UseCases(props) {
  const useCases = [
    {
      title: "Content Writing & Editing",
      description:
        "Perfect for writers and content creators who need to format and polish their text. Convert between different text cases, remove extra spaces, and get detailed text statistics.",
      features: [
        "Convert text to different cases (UPPERCASE, lowercase, Title Case, Sentence case)",
        "Remove extra spaces and format text",
        "Add or remove line breaks for better readability",
        "Get detailed word and character counts",
      ],
    },
    {
      title: "Academic Writing",
      description:
        "Ideal for students and researchers working on papers, essays, and research documents. Analyze text statistics and ensure proper formatting.",
      features: [
        "Calculate reading time for assignments",
        "Analyze text complexity with word statistics",
        "Format text for academic requirements",
        "Check character and word counts for submission limits",
      ],
    },
    {
      title: "Social Media & Marketing",
      description:
        "Great for social media managers and marketers who need to create engaging content with proper formatting and character limits.",
      features: [
        "Format text for different social media platforms",
        "Count characters for platform limits",
        "Convert text cases for better engagement",
        "Analyze content readability",
      ],
    },
    {
      title: "Data Analysis & Text Processing",
      description:
        "Useful for data analysts and researchers who need to process and analyze text data.",
      features: [
        "Get detailed text statistics",
        "Find most common words",
        "Calculate average word length",
        "Analyze text composition (letters, numbers, spaces)",
      ],
    },
    {
      title: "Code Documentation",
      description:
        "Helpful for developers and technical writers who need to format and clean up documentation.",
      features: [
        "Format code comments and documentation",
        "Remove extra spaces and line breaks",
        "Convert text cases for consistency",
        "Analyze documentation length and complexity",
      ],
    },
  ];

  return (
    <div className={`container my-5 ${props.mode === "dark" ? "dark" : ""}`}>
      <h1 className="text-center mb-5">TextMaster Use Cases</h1>
      <div className="row g-4">
        {useCases.map((useCase, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div
              className={`use-case-card ${props.mode === "dark" ? "dark" : ""}`}
            >
              <h2>{useCase.title}</h2>
              <p className="description">{useCase.description}</p>
              <div className="features">
                <h3>Key Features:</h3>
                <ul>
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

UseCases.propTypes = {
  mode: PropTypes.string.isRequired,
};
