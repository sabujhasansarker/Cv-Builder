import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import StyledFrame from "react-styled-frame";
import Contect from "./Contect";

const Playground = () => {
  const [iframeContent, setIframeContent] = useState();

  const handlePrint = () => {
    setIframeContent(<Contect />);
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
};

export default Playground;
