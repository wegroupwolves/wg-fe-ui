import React from 'react';
import { string, number } from 'prop-types';

const IconBedroomFilled = ({ className, color, size }) => {
  return (
    <svg
      id="icons"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <title>Bedroom</title>
      <path
        d="M6.81999 23.92C6.57835 23.9226 6.3396 23.9728 6.11736 24.0677C5.89512 24.1626 5.69374 24.3003 5.52474 24.473C5.35573 24.6458 5.2224 24.8501 5.13237 25.0743C5.04233 25.2986 4.99735 25.5384 4.99999 25.78V38.15C4.99735 38.3912 5.0424 38.6305 5.13256 38.8541C5.22272 39.0778 5.3562 39.2815 5.52534 39.4534C5.69447 39.6253 5.89592 39.7621 6.11811 39.8559C6.34029 39.9497 6.57882 39.9987 6.81999 40C7.30625 39.9947 7.77065 39.7972 8.11168 39.4505C8.45272 39.1038 8.64266 38.6363 8.63999 38.15C8.63602 37.9088 8.67976 37.6693 8.7687 37.4451C8.85764 37.2209 8.99002 37.0165 9.15823 36.8436C9.32644 36.6708 9.52715 36.5329 9.74884 36.4379C9.97053 36.3429 10.2088 36.2926 10.45 36.29H39.55C39.7912 36.2926 40.0294 36.3429 40.2511 36.4379C40.4728 36.5329 40.6735 36.6708 40.8418 36.8436C41.01 37.0165 41.1423 37.2209 41.2313 37.4451C41.3202 37.6693 41.364 37.9088 41.36 38.15C41.3573 38.6363 41.5473 39.1038 41.8883 39.4505C42.2293 39.7972 42.6937 39.9947 43.18 40C43.4212 39.9987 43.6597 39.9497 43.8819 39.8559C44.1041 39.7621 44.3055 39.6253 44.4746 39.4534C44.6438 39.2815 44.7773 39.0778 44.8674 38.8541C44.9576 38.6305 45.0026 38.3912 45 38.15V25.78C45.0026 25.5384 44.9576 25.2986 44.8676 25.0743C44.7776 24.8501 44.6442 24.6458 44.4752 24.473C44.3062 24.3003 44.1049 24.1626 43.8826 24.0677C43.6604 23.9728 43.4216 23.9226 43.18 23.92H6.81999Z"
        fill={color}
      />
      <path
        d="M41.39 12.61H36.83C36.6271 12.6117 36.4261 12.5708 36.24 12.49C32.7156 10.8654 28.8808 10.0241 25 10.0241C21.1191 10.0241 17.2844 10.8654 13.76 12.49C13.5691 12.579 13.3605 12.6234 13.15 12.62H8.61998C8.32856 12.5949 8.03902 12.6859 7.81431 12.8732C7.58961 13.0604 7.44789 13.3288 7.41998 13.62V20.53C7.43253 20.6747 7.47361 20.8154 7.54083 20.9442C7.60806 21.0729 7.7001 21.187 7.81166 21.28C7.92322 21.3729 8.05209 21.4429 8.19082 21.4858C8.32956 21.5287 8.47542 21.5437 8.61998 21.53H9.85998C9.85998 20.53 10.54 18 16.76 18C21.84 18 23.22 19.66 23.56 20.83C23.6225 21.0291 23.7459 21.2037 23.9126 21.3293C24.0794 21.4548 24.2813 21.525 24.49 21.53H25.74C25.9487 21.525 26.1505 21.4548 26.3173 21.3293C26.4841 21.2037 26.6074 21.0291 26.67 20.83C27.01 19.66 28.39 18 33.47 18C39.69 18 40.36 20.5 40.37 21.53H41.37C41.5132 21.5423 41.6575 21.5262 41.7945 21.4825C41.9314 21.4388 42.0584 21.3685 42.1681 21.2756C42.2778 21.1826 42.368 21.0689 42.4335 20.9409C42.4991 20.813 42.5386 20.6733 42.55 20.53V13.58C42.5173 13.3007 42.3788 13.0445 42.1631 12.8641C41.9473 12.6837 41.6707 12.5927 41.39 12.61Z"
        fill={color}
      />
    </svg>
  );
};

IconBedroomFilled.defaultProps = {
  color: 'black',
  size: 30,
};

IconBedroomFilled.propTypes = {
  color: string,
  className: string,
  size: number,
};

export default IconBedroomFilled;
