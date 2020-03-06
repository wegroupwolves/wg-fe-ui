import React from 'react';
import { string } from 'prop-types';

const IconChildrenFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Children</title>
      <path
        d="M41 22.5V27C41 29.1217 40.1571 31.1566 38.6569 32.6569C37.1566 34.1571 35.1217 35 33 35H15C12.8783 35 10.8434 34.1571 9.34315 32.6569C7.84285 31.1566 7 29.1217 7 27V22.5C7 22.3674 7.05268 22.2402 7.14645 22.1464C7.24021 22.0527 7.36739 22 7.5 22H40.5C40.6326 22 40.7598 22.0527 40.8536 22.1464C40.9473 22.2402 41 22.3674 41 22.5Z"
        fill={color}
      />
      <path
        d="M33.5 44C35.433 44 37 42.433 37 40.5C37 38.567 35.433 37 33.5 37C31.567 37 30 38.567 30 40.5C30 42.433 31.567 44 33.5 44Z"
        fill={color}
      />
      <path
        d="M14.5 44C16.433 44 18 42.433 18 40.5C18 38.567 16.433 37 14.5 37C12.567 37 11 38.567 11 40.5C11 42.433 12.567 44 14.5 44Z"
        fill={color}
      />
      <path
        d="M44 14.05C44.0029 14.3218 43.9003 14.584 43.7138 14.7817C43.5273 14.9794 43.2715 15.0971 43 15.11H41.11V19C41.0845 19.2621 40.9623 19.5053 40.7673 19.6822C40.5722 19.8592 40.3183 19.9572 40.055 19.9572C39.7917 19.9572 39.5378 19.8592 39.3428 19.6822C39.1477 19.5053 39.0255 19.2621 39 19V13.5C39 13.3674 39.0527 13.2402 39.1464 13.1464C39.2402 13.0527 39.3674 13 39.5 13H43C43.1356 12.9998 43.2699 13.0273 43.3946 13.0806C43.5193 13.134 43.6318 13.2121 43.7254 13.3103C43.8189 13.4086 43.8915 13.5248 43.9387 13.6519C43.9859 13.7791 44.0068 13.9145 44 14.05Z"
        fill={color}
      />
      <path
        d="M10.14 12.48L17.36 19.05C17.4444 19.1223 17.5044 19.2188 17.5319 19.3264C17.5593 19.4341 17.553 19.5475 17.5136 19.6514C17.4743 19.7553 17.4038 19.8445 17.3119 19.9069C17.22 19.9693 17.1111 20.0018 17 20H7.56C7.48434 20.0015 7.40919 19.9873 7.33924 19.9585C7.2693 19.9296 7.20607 19.8866 7.15351 19.8321C7.10094 19.7777 7.06018 19.713 7.03377 19.6421C7.00735 19.5712 6.99586 19.4956 7 19.42C7.10413 16.959 7.90904 14.579 9.32 12.56C9.36465 12.4955 9.42279 12.4416 9.49039 12.4019C9.558 12.3622 9.63344 12.3376 9.71147 12.33C9.7895 12.3224 9.86826 12.3319 9.94226 12.3578C10.0163 12.3837 10.0837 12.4254 10.14 12.48Z"
        fill={color}
      />
      <path
        d="M20 7.55V17.3C20.0013 17.406 19.9714 17.51 19.914 17.5991C19.8567 17.6882 19.7744 17.7584 19.6773 17.8011C19.5803 17.8437 19.4729 17.8569 19.3685 17.8389C19.264 17.8209 19.1672 17.7726 19.09 17.7L11.59 10.88C11.5323 10.8284 11.4861 10.7652 11.4545 10.6946C11.4229 10.6239 11.4066 10.5474 11.4066 10.47C11.4066 10.3926 11.4229 10.3161 11.4545 10.2454C11.4861 10.1748 11.5323 10.1116 11.59 10.06C13.789 8.19424 16.5485 7.11716 19.43 7C19.5039 6.99731 19.5776 7.00955 19.6466 7.03598C19.7157 7.06241 19.7787 7.1025 19.8319 7.15384C19.8851 7.20519 19.9274 7.26673 19.9563 7.3348C19.9852 7.40286 20 7.47606 20 7.55Z"
        fill={color}
      />
    </svg>
  );
};

IconChildrenFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconChildrenFilled.propTypes = {
  color: string,
  className: string,
};

export default IconChildrenFilled;
