import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ResumeContainer, CVButton, CVLink } from "./style";
import pdf from "../../assets/images/Andrew Fish-Resume-Aug 2022.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <ResumeContainer>
      <Document
        file={pdf}
        loading="Loading Resume..."
        className="align-center"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {[1, 2].map((page) => (
          <Page pageNumber={page} />
        ))}
      </Document>
      <CVButton>
        <CVLink href={pdf} target="_blank">
          Download CV
        </CVLink>
        {/* how to make this download and not open new page? */}
      </CVButton>
      {/* <p>
        Page {pageNumber} of {numPages}
      </p> */}
    </ResumeContainer>
  );
}

export default Resume;
