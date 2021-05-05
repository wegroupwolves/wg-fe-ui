import React from 'react';
import styled from 'styled-components';
import { object, node, string, func, bool } from 'prop-types';

const QuestionBox = ({
  children,
  option1,
  option2,
  className,
  disabled,
  response,
  ...otherProps
}) => {
  const handleClick = e => {
    response(e.currentTarget.innerHTML);
  };

  return (
    <Container {...otherProps} className={className}>
      <Question>
        <p dangerouslySetInnerHTML={{ __html: children }} />
      </Question>
      {option1 || option2 ? (
        <Answers>
          <Answer
            className="option1"
            disabled={disabled}
            left={true}
            onClick={e => (disabled ? e.preventDefault() : handleClick(e))}
          >
            {option1}
          </Answer>
          <Answer
            className="option2"
            left={false}
            onClick={e => {
              handleClick(e);
            }}
          >
            {option2}
          </Answer>
        </Answers>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.font};
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.1);
  border-radius: 0;
  border-radius: 0 1.6rem 1.6rem;
  z-index: 10;
  position: relative;
  align-self: flex-end;
  margin: auto;
  margin-top: 0;
  margin-bottom: 3rem;
  flex-shrink: 0;
  background-color: white;
  padding-bottom: 4.5rem;
`;

const Answers = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
`;

const Answer = styled.p`
  width: 50%;
  height: 5rem;
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-size: 2.1rem;
  font-weight: 500;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.ui.disabled : theme.brand.primary};
  color: white;
  border: solid 0.2rem;
  border-radius: ${props => (props.left ? '0 0 0 1.6rem' : '0 0 1.6rem 0')};
  border-color: ${({ disabled, theme }) =>
    disabled ? theme.ui.disabled : theme.brand.secondary};
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.ui.disabled : theme.hover.primary};
    cursor: ${props => (props.disabled ? `default` : `pointer`)};
  }
`;

const Question = styled.div`
  display: flex;
  font-size: 1.6rem;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem;
  align-self: flex-start;

  & span {
    font-weight: 500;
  }
`;

QuestionBox.defaultProps = {
  disabled: false,
  option1: null,
  option2: null,
  response: Function.prototype,
  otherProps: {},
};

QuestionBox.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Question */
  children: node.isRequired,
  /** option to the left */
  option1: string,
  /** option to the right */
  option2: string,
  /** returns string of clicked option */
  response: func,
  /** if true option1 is disabled */
  disabled: bool,
  /** Adds extra props to the element */
  otherProps: object,
};

export default QuestionBox;
