import React from "react";

const Alert = (props) => {
    return (
        <>
            <div className="alert alert-primary container" role="alert">
                {props.message}
            </div>
        </>
    );
};

export default Alert;
