import React, { useState } from 'react';
import { string, object, node, bool } from 'prop-types';

const Head = ({ className, orderEnabled = true, children }) => {
  const [ActiveOrder, setActiveOrder] = useState(0);
  const [OrderDirection, setOrderDirection] = useState('descending');

  const elements = React.Children.toArray(children);

  const clickHandler = index => {
    if (ActiveOrder === index) {
      if (OrderDirection === 'descending') {
        setOrderDirection('ascending');
      } else {
        setOrderDirection('descending');
      }
    } else {
      setActiveOrder(index);
      setOrderDirection('descending');
    }
  };

  return (
    <thead className={className}>
      <tr>
        {elements.map((element, index) => {
          return React.cloneElement(element, {
            onClick: () => (orderEnabled ? clickHandler(index) : null),
            active: index === ActiveOrder && orderEnabled ? true : false,
            order: OrderDirection,
          });
        })}
      </tr>
    </thead>
  );
};

Head.defaultProps = {
  otherProps: {},
};

Head.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
  /** Decides if the ordering functionality should be enabled */
  orderEnabled: bool,
};

export default Head;
