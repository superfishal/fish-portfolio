import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../assets/images/RESUME-Andrew-Fish-2022.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
      <button>Download</button>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Resume;
