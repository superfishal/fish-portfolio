import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ResumeContainer, CVButton } from "./style";
import pdf from "../../assets/images/RESUME-Andrew-Fish-2022.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <ResumeContainer>
      <CVButton>
        <a href={pdf}>Download CV</a>
        {/* how to make this download and not open new page? */}
      </CVButton>
      <Document
        file={pdf}
        className="align-center"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </ResumeContainer>
  );
}

export default Resume;
