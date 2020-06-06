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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePrint}
      >
        Button
      </button>
    </div>
  );
};

export default Playground;
