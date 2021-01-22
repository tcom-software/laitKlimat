import { useEffect } from "react";

const lazyLoadImages = (
  selector = "picture img, picture source",
  oldAttr = "data-src",
  newAttr = "src"
) => {
  const createObserver = () => {
    const elements = document.querySelectorAll(selector);

    const observer = new window.IntersectionObserver(
      (entries, observerChild) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.getAttribute("data-src")) {
            entry.target.src = entry.target.getAttribute("data-src");
            entry.target.removeAttribute("data-src");
            observerChild.unobserve(entry.target);
          } else if (
            entry.isIntersecting &&
            entry.target.getAttribute("data-srcset")
          ) {
            entry.target.srcset = entry.target.getAttribute("data-srcset");
            entry.target.removeAttribute("data-srcset");
            observerChild.unobserve(entry.target);
          }
        });
      },
      {}
    );

    Array.prototype.map.call(elements, item => observer.observe(item));
  };

  if (!("IntersectionObserver" in window)) {
    const polyfill = document.createElement("script");
    polyfill.src =
      "https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver";
    document.head.appendChild(polyfill);

    polyfill.onload = () => createObserver();
    return;
  }

  createObserver();
};

const LazyLoadHOC = Page => {
  return function LazyLoadWrappedPage(props) {
    useEffect(() => {
      lazyLoadImages();
    }, []);

    return <Page {...props} />;
  };
};

export default LazyLoadHOC;
