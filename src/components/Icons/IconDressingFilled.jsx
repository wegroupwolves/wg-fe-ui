import React from 'react';
import { string, number } from 'prop-types';

const IconDressingFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Dressing</title>
      <path
        d="M39.8102 24.5073L36.7466 27.6025C36.6945 27.659 36.6316 27.704 36.5617 27.7348C36.4918 27.7656 36.4165 27.7815 36.3404 27.7815C36.2643 27.7815 36.189 27.7656 36.1191 27.7348C36.0492 27.704 35.9863 27.659 35.9342 27.6025L34.5184 26.173C34.4024 26.0667 34.2748 26.173 34.2748 26.303V43.4093C34.2748 43.566 34.2136 43.7162 34.1048 43.827C33.996 43.9378 33.8484 44 33.6945 44H16.2873C16.1335 44 15.9859 43.9378 15.8771 43.827C15.7682 43.7162 15.7071 43.566 15.7071 43.4093V26.2794C15.7071 26.1258 15.5795 26.0431 15.4634 26.1494L14.0476 27.5789C13.9955 27.6354 13.9326 27.6804 13.8628 27.7112C13.7929 27.742 13.7176 27.7579 13.6415 27.7579C13.5653 27.7579 13.49 27.742 13.4202 27.7112C13.3503 27.6804 13.2874 27.6354 13.2353 27.5789L10.1716 24.5073C10.1172 24.4524 10.0741 24.3871 10.0446 24.3151C10.0152 24.2431 10 24.1659 10 24.0879C10 24.0099 10.0152 23.9327 10.0446 23.8607C10.0741 23.7888 10.1172 23.7234 10.1716 23.6685L15.1037 18.6949C15.5331 18.2613 16.1119 18.0154 16.7167 18.0097H20.349C20.3983 18.0099 20.4461 18.0261 20.4858 18.0558C20.5254 18.0855 20.5547 18.1273 20.5695 18.1751C20.841 19.1464 21.4161 20.0011 22.2077 20.6097C22.9992 21.2182 23.9642 21.5475 24.9561 21.5475C25.9481 21.5475 26.913 21.2182 27.7046 20.6097C28.4962 20.0011 29.0713 19.1464 29.3427 18.1751C29.3507 18.1447 29.3647 18.1161 29.3837 18.0912C29.4027 18.0663 29.4265 18.0455 29.4535 18.0301C29.4805 18.0147 29.5103 18.005 29.5411 18.0015C29.5719 17.998 29.6031 18.0008 29.6328 18.0097H33.2999C33.9048 18.0154 34.4836 18.2613 34.913 18.6949L39.845 23.6685C39.8972 23.7257 39.9377 23.7929 39.9642 23.8662C39.9907 23.9394 40.0027 24.0173 39.9995 24.0953C39.9962 24.1733 39.9779 24.2499 39.9454 24.3206C39.9129 24.3913 39.867 24.4548 39.8102 24.5073V24.5073Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 6C24.4477 6 24 6.44772 24 7H22C22 5.34315 23.3432 4 25 4C26.6569 4 28 5.34315 28 7C28 8.30622 27.1652 9.41746 26 9.82929V10.3501L32.2531 13.1293C33.7336 13.7873 33.264 16 31.6439 16H18.3561C16.736 16 16.2665 13.7873 17.7469 13.1293L24 10.3501V9C24 8.44772 24.4477 8 25 8C25.5523 8 26 7.55228 26 7C26 6.44772 25.5523 6 25 6ZM20.7122 14H29.2878L25 12.0943L20.7122 14Z"
        fill={color}
      />
    </svg>
  );
};

IconDressingFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconDressingFilled.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconDressingFilled;
