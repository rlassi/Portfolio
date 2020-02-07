import React from 'react';
import { Document, Page } from 'react-pdf';

import resumeStyles from '../styles/Resume.module.scss';

import pdf from '../files/Ryan_Lassiter_Resume.pdf'

const Resume = () => {
    return (
        <div className={resumeStyles.resume}>
            <div className={resumeStyles.contentContainer}>
                    <Document file={pdf}>
                        <Page renderMode={"svg"} pageNumber={1} />
                    </Document>
            </div> 
        </div>         
    );
};

export default Resume