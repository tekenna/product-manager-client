import React from 'react';

function Wait() {
    return (
        <div style={{
            width: "100%",
            height: "20rem",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center"
        }}>
            <img src="/wait.jpg"  alt="waiting for data"  style={{
            width: "10rem%",
            height: "10rem"
            }} />
            <span style={{color: "gray", fontSize: "1rem"}}>waiting for your data</span>
        </div>
    );
}

export default Wait;
