import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CvContent from "./CvContent";
import "./Cv.css";
import { PrinterIcon } from "@heroicons/react/24/solid";

const Cv = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <CvContent ref={componentRef} />
      <button onClick={handlePrint} className="pdf">
        <span>
          <PrinterIcon className="print-icon" />
        </span>
      </button>
    </div>
  );
};

export default Cv;
