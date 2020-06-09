import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import StyledFrame from "react-styled-frame";
import Contect from "../contents/Contect";

const Playground = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("cv")));
  }, []);

  const [iframeContent, setIframeContent] = useState();

  const handlePrint = () => {
    setIframeContent(<Contect data={data && data} />);
    return setTimeout(() => {
      const iframe = document.querySelectorAll("#printWrapper iframe")[0];
      iframe.contentWindow.print();
    }, 1);
  };

  return (
    <div className="">
      {iframeContent ? (
        <div id="printWrapper" style={{ display: "none" }}>
          <ThemeProvider theme={{}}>
            <StyledFrame>{iframeContent}</StyledFrame>
          </ThemeProvider>
        </div>
      ) : undefined}
      <img
        className="printer_img"
        onClick={handlePrint}
        src="https://img.icons8.com/plasticine/100/000000/print.png"
      />
    </div>
  );
};

export default Playground;
