import { useState, useEffect } from "react";
import styled from "styled-components";

const BackToTopBtn = styled.a`
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background: #4154f1;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;

  i {
    font-size: 24px;
    color: #fff;
    line-height: 0;
  }

  &:hover {
    background: #6777ef;
    color: #fff;
  }

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

function BackToTop() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <BackToTopBtn
      onClick={backToTop}
      className={`d-flex align-items-center justify-content-center ${
        scroll > 100 ? "active" : ""
      }`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </BackToTopBtn>
  );
}

export default BackToTop;
