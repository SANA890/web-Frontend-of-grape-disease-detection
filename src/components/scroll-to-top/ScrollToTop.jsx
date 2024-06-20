function ScrollToTop() {
  function moveToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div id="back-top">
      <a title="Go to Top" className="w-100 d-block" style={{cursor: "pointer"}} onClick={moveToTop}>
        <i className="fas fa-level-up-alt"></i>
      </a>
    </div>
  );
}

export default ScrollToTop;
