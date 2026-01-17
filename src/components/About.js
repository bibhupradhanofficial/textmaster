import React from 'react'



export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
        borderColor: props.mode === 'dark' ? 'white' : ''
    }

    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '' }}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About TextMaster : A Text-Based Utility
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextMaster is a comprehensive web-based text manipulation utility designed to streamline common text formatting and conversion tasks. The application features a clean, intuitive user interface that organizes functionalities into logical categories.
                            <br />
                            <br />
                            Key features include:
                            <br />
                            i. Case Conversion:
                            <br />
                            Tools for changing text capitalization to UPPERCASE, lowercase, Title Case, Sentence case, and aLtErNaTiNg formats.
                            <br />
                            ii. Formatting Controls:
                            <br />
                            Options for layout refinement, such as Remove Spaces, Add Line Breaks, and managing line breaks.
                            <br />
                            iii. Text Actions:
                            <br />
                            Core utilities like Reverse text, clearing input fields, and easily Copy results.
                            <br />
                            iv. Advanced Features:
                            <br />
                            Specialized tools for technical use cases, including Remove Numbers, Extract Emails, and Base64 Encode functions.
                            <br />
                            <br />
                            This utility provides a user-friendly, all-in-one solution for efficient text processing, demonstrating strong front-end development skills and an understanding of practical user needs.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Developed By
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            The TextMaster was developed by Bibhu Pradhan.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            About Developer
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Bibhu Pradhan is a passionate programmer with a strong interest in problem-solving, logical thinking, and building efficient solutions through code.
                            <br />
                            💻 Code | Learn | Improve | Innovate
                            <br />
                            <a href="https://www.linkedin.com/in/bibhupradhanofficial">LinkedIn</a>
                            <br />
                            <a href="https://github.com/bibhupradhanofficial">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}