import React from 'react';
import { string, object, node } from 'prop-types';
import styled from 'styled-components';
import download from '../../assets/download.svg';
import { key } from 'styled-theme';

const DownloadBox = ({ href, className, children, thumbnail,  ...otherProps }) => {

  return (
    <Download className={className}  {...otherProps}>
       <a href={href} target="_blank">{thumbnail ? <Thumbnail src={thumbnail} alt="download"/> : null }
        <span>{children}</span><img src={download} alt="download"/></a>
    </Download>
  );
};

const Download = styled.div`
  width: 30rem;
  border: 0.1rem solid #F0F1F3;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 0.8rem 2.4rem 0.8rem ;

 & a {
   display:flex;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   text-decoration: none;

   & span {
    font-family: ${key('fonts.primary')};
     margin-right: 4.5rem;
     font-size: ${key('fonts.regular-size')};
     font-weight: bold;
     line-height: 130%;
     color: black;
   }
  }
`;

const Thumbnail = styled.img`
 width: 5rem;
 height: 5rem;
 padding-top: 0.5rem;
 padding-bottom: 0.5rem;
`;

DownloadBox.propTypes = {
  className: string,
  href: string, 
  children: node.isRequired,
  thumbnail: string,
  otherProps: object,
};

export default DownloadBox;
