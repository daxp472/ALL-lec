import React, { useEffect } from "react";
import "./Four04.css";

const NotFound = () => {

    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <img src="https://cdn.dribbble.com/userupload/20464004/file/original-2626e30f554fef80b10ed0413056f778.gif" alt="404 Not Found" className="error-gif" />
                <h2 className="error-message">ERROR 403: DIMENSIONAL LOCK ACTIVATED</h2>
                <p className="error-description">
                    This page exists in a parallel universe where you do have permission
                </p>
            </div>
        </div>
    );
};

export default NotFound;
