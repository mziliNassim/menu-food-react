import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ToBottom = () => {
  const [activeToBottom, setActiveToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      setActiveToBottom(!isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* {activeToBottom && (
        <Button
          onClick={() => window.scrollTo(0, 0)}
          className="arrow toBottom text-light btn-success"
        >
          <i class="bi bi-arrow-down-circle"></i>
        </Button>
      )} */}

      {activeToBottom && (
        <Button
          onClick={() =>
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            })
          }
          className="arrow toBottom text-light"
          style={{ right: "40px", bottom: "40px" }}
        >
          <i className="bi bi-arrow-down-circle"></i>
        </Button>
      )}
    </>
  );
};

export default ToBottom;
