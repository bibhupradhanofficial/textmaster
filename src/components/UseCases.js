import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function UseCases(props) {
  const useCases = [
    {
      title: "Content Writing & Editing",
      description:
        "Perfect for writers and content creators who need to format and polish their text. Convert between different text cases, remove extra spaces, and get detailed text statistics.",
      features: [
        "Convert text to different cases",
        "Remove extra spaces and format text",
        "Add or remove line breaks",
        "Get detailed word counts",
      ],
    },
    {
      title: "Academic Writing",
      description:
        "Ideal for students and researchers working on papers, essays, and research documents. Analyze text statistics and ensure proper formatting.",
      features: [
        "Calculate reading time",
        "Analyze text complexity",
        "Format text for requirements",
        "Check character counts",
      ],
    },
    {
      title: "Social Media & Marketing",
      description:
        "Great for social media managers and marketers who need to create engaging content with proper formatting and character limits.",
      features: [
        "Format text for platforms",
        "Count characters for limits",
        "Convert text cases",
        "Analyze content readability",
      ],
    },
    {
      title: "Data Analysis",
      description:
        "Useful for data analysts and researchers who need to process and analyze text data.",
      features: [
        "Get detailed text statistics",
        "Find most common words",
        "Calculate average word length",
        "Analyze text composition",
      ],
    },
    {
      title: "Code Documentation",
      description:
        "Helpful for developers and technical writers who need to format and clean up documentation.",
      features: [
        "Format code comments",
        "Remove extra spaces",
        "Convert text cases",
        "Analyze complexity",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="container py-5"
    >
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ 
          background: props.mode === 'dark'
            ? 'linear-gradient(to right, #818cf8, #f472b6)' 
            : 'linear-gradient(to right, #6366f1, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Use Cases
        </h1>
        <p className={`lead ${props.mode === 'dark' ? 'text-white-50' : 'text-muted'}`}>
          Discover how TextMaster can streamline your workflow
        </p>
      </div>

      <div className="row g-4">
        {useCases.map((useCase, index) => (
          <motion.div key={index} variants={item} className="col-md-6 col-lg-4">
            <div className="glass-card h-100 d-flex flex-column">
              <h3 className="h4 fw-bold mb-3">{useCase.title}</h3>
              <p className={`mb-4 ${props.mode === 'dark' ? 'text-white-50' : 'text-muted'}`}>
                {useCase.description}
              </p>
              <div className="mt-auto">
                <h6 className="fw-bold text-uppercase small opacity-75 mb-3">Key Features</h6>
                <ul className="list-unstyled mb-0">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="d-flex align-items-center mb-2">
                      <FiCheckCircle className="text-primary me-2 flex-shrink-0" size={16} />
                      <span className="small">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

UseCases.propTypes = {
  mode: PropTypes.string.isRequired,
};
