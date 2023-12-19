
  
  const handleScroll = () => {
    const elements = document.querySelectorAll('.reveal-element');
  
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('in-viewport');
      } else {
        element.classList.remove('in-viewport');
      }
    });
  };

  const slideBottom = () => {
    const elements = document.querySelectorAll('.slide-bottom');
  
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('in-viewport-slide-bottom');
      } else {
        element.classList.remove('in-viewport-slide-bottom');
      }
    });
  };

  const isElementInViewport = (el) =>{
    const rect = el.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  
  export { isElementInViewport, handleScroll, slideBottom};
  