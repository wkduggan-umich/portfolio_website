import "../styles/skill.css";
import React, { useState } from "react";

const SkillCard = ({skill , icon, content, course_work}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Create a "projects" input to link projects more easily
    // Maybe pass in content/projects in as a map with project -> link

    return (
        <>
            <div className="col-md-6 col-sm-6 h-100">
                <button className="w-100 h-100 btn" onClick={() => setIsOpen(true)}>
                    <div className="skill-card">
                        <i className={icon}></i> &nbsp;
                        {skill}
                    </div>
                </button>
            </div>
            {(content || course_work) && isOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3 className="mb-4">{skill}</h3>
                        <p>{content}</p>
                        {course_work && (
                            <p>
                            <b>Course Work</b>: {course_work}
                            </p>
                        )}
                        <button className="btn btn-danger" onClick={() => setIsOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default SkillCard;