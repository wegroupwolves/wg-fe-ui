import React from 'react';
import { string, number } from 'prop-types';

const IconThumbsUp = ({ className, color, size }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.579 18.6c1.104-1.896.06-2.73.06-2.73.834-3.816-4.14-2.592-4.812-2.568-.672.018-.528-.204-.408-.876 2.16-3.774 1.446-6.18.084-6.402-1.362-.222-1.266 1.92-1.692 3-.426 1.08-1.734 2.346-2.082 2.976-.348.63-1.14 2.484-1.824 2.868a2.567 2.567 0 01-.738.24v-1.062a.373.373 0 00-.378-.378h-3.81a.376.376 0 00-.378.378v9.894c0 .216.168.378.378.378h3.804a.373.373 0 00.378-.378v-1.062a5.16 5.16 0 011.248-.306c.408-.048.822 0 1.218.102 3.072.792 4.896.672 6.66.54 1.854-.144 1.674-2.1 1.674-2.1 1.332-1.392.618-2.514.618-2.514z"
        fill={color}
      />
    </svg>
  );
};

IconThumbsUp.defaultProps = {
  color: 'black',
  size: 30,
};

IconThumbsUp.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconThumbsUp;
