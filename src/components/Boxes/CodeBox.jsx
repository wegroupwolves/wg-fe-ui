import React from 'react';
import { node, bool, string, object } from 'prop-types';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import cogoToast from 'cogo-toast';

import { IconClipBoard } from '../Icons';

const CodeBox = ({ children, canCopy, className, otherProps }) => {
  const handleCopyClick = () => {
    copy(children);
    cogoToast.success('Copied to clipboard.');
  };

  return (
    <StyledCodeBox canCopy={canCopy}>
      <Code>{children}</Code>

      {canCopy ? (
        <CopyButton
          onClick={() => {
            handleCopyClick();
          }}
        >
          <IconClipBoard size={25} />
        </CopyButton>
      ) : null}
    </StyledCodeBox>
  );
};

// 54
const StyledCodeBox = styled.div`
  width: 100%;
  max-width: 100rem;
  max-height: 55rem;
  overflow-y: scroll;
  padding: ${({ canCopy }) =>
    canCopy ? '1.6rem 5.4rem 1.6rem 1.6rem' : '1.6rem'};
  background-color: white;
  border: 1px solid #d5d5d5;
  border-radius: 0.5rem;
  position: relative;
`;

const Code = styled.code`
  font-family: monospace;
  font-size: 1.3rem;
  line-height: 135%;
  letter-spacing: 0.02em;
  color: #222;
`;

const CopyButton = styled.div`
  position: absolute;
  width: 3.1rem;
  height: 3.1rem;
  background-color: #f0f1f3;
  right: 0.7rem;
  top: 0.7rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  > svg path {
    stroke: #8990a3;
    transition: stroke 0.15s ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.brand.primary};

    > svg path {
      stroke: white;
    }
  }
`;

CodeBox.defaultProps = {
  canCopy: true,
};

CodeBox.propTypes = {
  /** Code to be displayed within the element. This is also what will be copied if copying is enabled. */
  children: node.isRequired,
  /** Set to false to remove the ability to copy with the button. */
  canCopy: bool,
  /** Extra classnames to pass to the element. */
  className: string,
  /** Extra props to pass to the element. */
  otherProps: object,
};

export default CodeBox;
