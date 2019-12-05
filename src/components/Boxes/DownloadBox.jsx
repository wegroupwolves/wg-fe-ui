import React from 'react';
import { string, object } from 'prop-types';
import styled from 'styled-components';
import download from '../../assets/download';

const DownloadBox = ({
  href,
  className,
  thumbnail,
  filename,
  ...otherProps
}) => {
  const bytesToMega = value => {
    const val =
      value > 10000
        ? `${(value / 1000000).toFixed(2)} mb`
        : `${(value / 1000).toFixed(2)} kb`;
    return val;
  };

  const calculateImageSize = base64String => {
    let padding, inBytes, base64StringLength;
    if (base64String.endsWith('==')) padding = 2;
    else if (base64String.endsWith('=')) padding = 1;
    else padding = 0;

    base64StringLength = base64String.length;
    inBytes = (base64StringLength / 4) * 3 - padding;
    return bytesToMega(inBytes);
  };

  return (
    <Download className={className} {...otherProps}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        thumbnail={thumbnail}
      >
        {thumbnail ? <Thumbnail src={thumbnail} alt="download" /> : null}
        <Container thumbnail={thumbnail}>
          <FileName>{filename} </FileName>
          <FileSize>{calculateImageSize(href)}</FileSize>
        </Container>
        <DownloadIcon src={download} alt="download" />
      </a>
    </Download>
  );
};

const Download = styled.div`
  width: 30rem;
  border: 0.1rem solid #f0f1f3;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 0.8rem 2.4rem 0.8rem 1.6rem;

  & a {
    display: flex;
    width: 100%;
    align-items: center;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts};
    font-size: 1.4rem;
    line-height: 130%;
  }
`;

const FileName = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.typo.text};
  margin-right: 1.5rem;
`;

const FileSize = styled.span`
  font-weight: normal;
  color: ${({ theme }) => theme.typo.interactive};
`;

const Container = styled.span`
  display: flex;
  ${props =>
    props.thumbnail ? 'flex-direction:column;' : 'flex-direction:row;'}
`;

const DownloadIcon = styled.img`
  margin-left: auto;
`;

const Thumbnail = styled.img`
  width: 5rem;
  height: 5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-right: 1.5rem;
`;

DownloadBox.defaultProps = {
  thumbnail: '',
};

DownloadBox.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** base64 string to download file and get the filesize */
  href: string,
  /** string with the name of the file */
  filename: string,
  /** option to show a thumbnail image of the file*/
  thumbnail: string,
  /** Adds extra props to the element */
  otherProps: object,
};

export default DownloadBox;
