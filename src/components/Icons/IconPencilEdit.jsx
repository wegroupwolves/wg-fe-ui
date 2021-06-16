import React from 'react';
import { string, number } from 'prop-types';

const IconPencilEdit = ({ className, color, size }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.122 21.628c0-.202.134-.404.269-.538l9.18-9.181a.903.903 0 111.279 1.277l-8.98 8.98-.403 3.833 3.834-.403 9.013-9.013a.903.903 0 011.277 0c.337.336.337.942 0 1.278l-9.214 9.215c-.135.134-.336.269-.538.269l-5.28.571a.855.855 0 01-.74-.269c-.202-.201-.269-.47-.269-.74l.572-5.28zm11.804-7.365l-8.408 8.407a.903.903 0 000 1.278c.337.336.942.336 1.278 0l8.408-8.407a.903.903 0 10-1.278-1.278zm-.101-4.608l1.513-1.513a2.558 2.558 0 013.632 0l2.388 2.388a2.558 2.558 0 010 3.632l-1.513 1.513a.903.903 0 01-1.278 0l-4.742-4.742c-.404-.336-.37-.908 0-1.278zm1.917.64l3.43 3.43.874-.875a.7.7 0 000-1.009L24.66 9.454a.7.7 0 00-1.01 0l-.874.874-.033-.034z"
        fill={color}
      />
    </svg>
  );
};

IconPencilEdit.defaultProps = {
  color: 'black',
  size: 30,
};

IconPencilEdit.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconPencilEdit;
