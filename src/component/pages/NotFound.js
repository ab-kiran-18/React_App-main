import React from 'react';

const divStyle = {
    fontWeight: 'bold',
    fontSize: '50px', 
    color: 'red'
};

const NotFound = () => {
    return (
        <div className="container">
            <img height="300" width="330" src="https://i.imgur.com/qIufhof.png" alt="404" />
            <div id="info">
                <p style={divStyle}>404 Error</p>
                <h3>This page could not be found</h3>
            </div>
        </div >
    )
};

export default NotFound;
