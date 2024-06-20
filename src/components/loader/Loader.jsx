// Loader.js
import React, { useEffect, useRef } from "react";

const Loader = () => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const body = document.body;

    const timeoutId = setTimeout(() => {
      preloader.style.transition = "opacity 0.5s";
      preloader.style.opacity = "0";

      setTimeout(() => {
        preloader.style.display = "none";
        body.style.overflow = "visible";
      }, 1500);
    }, 1000);

    return () => {
      preloader.style.transition = "";
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={preloaderRef} id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img src="assets/img/logo/loader.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
