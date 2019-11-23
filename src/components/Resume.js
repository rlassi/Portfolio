import React from 'react';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf';

import resumeStyles from '../styles/Resume.module.scss';

import pdf from '../files/Ryan_Lassiter_Resume.pdf'

const Resume = () => {
    return (
        <div className={resumeStyles.resume}>
            <div className={resumeStyles.contentContainer}>
                <div className={resumeStyles.mobileDiv}>
                    <Document file={pdf}>
                        <Page renderMode={"svg"} pageNumber={1} />
                        <Page renderMode={"svg"} pageNumber={2} />
                    </Document>
                </div>
                
            </div> 
        </div>         
    );
};

export default Resume