import React from "react";

const Background = () => (
  <>
    <div className="hero-bg-shapes">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
    </div>

    <style>{`
      .hero-bg-shapes {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        overflow: hidden;
        z-index: -1;
      }

      .shape {
        position: absolute;
        border-radius: 50%;
        background-color: #2e717e;
        opacity: 0.8;
      }

      .shape-1 {
        width: 700px;
        height: 700px;
        top: -150px;
        left: -200px;
        background-color: #3A8D9C;
        filter: blur(40px);
      }

      .shape-2 {
        width: 500px;
        height: 500px;
        top: 20%;
        left: 15%;
        background-color: #2e717e;
        filter: blur(40px);
      }
    `}</style>
  </>
);

export default Background;
