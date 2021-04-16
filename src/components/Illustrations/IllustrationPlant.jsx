import React from 'react';
import { object } from 'prop-types';

const IllustrationPlant = ({ theme }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="122"
      height="94"
      fill="none"
      viewBox="0 0 122 94"
    >
      <path
        fill={theme.primary[50]}
        d="M74.622 0H47.467C30.088 0 16 14.07 16 31.424V62.12c0 17.355 14.088 31.424 31.467 31.424h27.155c17.379 0 31.467-14.069 31.467-31.424V31.425C106.089 14.068 92.001 0 74.622 0z"
      ></path>
      <path
        stroke={theme.primary[100]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 80.769h120"
      ></path>
      <path
        fill={theme.primary[500]}
        stroke={theme.primary[500]}
        d="M67.254 25.912a.586.586 0 00-.563.61c.01.244.017.485.021.722a.586.586 0 00.586.575h.01a.587.587 0 00.576-.598 32.695 32.695 0 00-.022-.747c-.011-.323-.276-.56-.608-.562z"
      ></path>
      <path
        fill={theme.primary[500]}
        stroke={theme.primary[500]}
        d="M81.857 45.79c.508-.735 1.173-1.993.792-3.122-.291-.864-1.104-1.432-2.413-1.687-1.302-.255-2.682.18-3.987 1.256-.486.4-1.023.966-1.413 1.48-.49-.612-1-1.044-1.52-1.306 1.739-4.618 1.895-7.633.457-9.417-1.104-1.37-3.12-1.888-6-1.544.038-.525.081-1.297.104-2.217a.588.588 0 00-.572-.602c-.308.021-.592.249-.6.571-.04 1.662-.157 2.859-.158 2.872a.586.586 0 00.676.635c2.83-.457 4.725-.114 5.637 1.02 1.132 1.404.892 4.232-.683 8.379-.18-.005-.36.006-.542.039-3.02.568-5.024 6.394-6.028 10.233-.36-9.154-7.37-30.838-11.706-36.786a.586.586 0 00-.946.692c4.979 6.828 12.552 32.446 11.373 38.376h-.197c-1.559-7.38-3.54-11.205-6.053-11.678-1.244-.227-2.26.44-2.913 1.053a3.883 3.883 0 00-1.041-1.385 3.14 3.14 0 00-.858-.484c-1.05-3.546 1.347-4.668 1.449-4.714a.587.587 0 00.173-.963c-6.35-6.026-6.563-8.652-6.123-9.683.62-1.45 3.254-1.649 4.213-1.603a.57.57 0 00.552-.321.583.583 0 00-.07-.634c-3.725-4.551-3.931-7.744-3.724-9.243.155-1.116.585-1.682.79-1.825 1.157-.808 2.26-1.024 3.365-.667 3.478 1.13 5.718 7.492 5.74 7.556a.588.588 0 00.922.264c1.099-.89 2.677-1.832 3.96-1.24 1.285.588 2.107 2.637 2.2 5.482.01.323.306.554.604.566a.585.585 0 00.566-.606c-.108-3.348-1.159-5.72-2.882-6.51-.92-.417-2.429-.566-4.547.912-.746-1.838-2.917-6.474-6.201-7.541-1.46-.479-2.94-.2-4.4.819-.634.442-1.112 1.424-1.278 2.626-.22 1.58-.054 4.804 3.257 9.226-1.346.127-3.43.6-4.146 2.273-.975 2.277.942 5.708 5.857 10.478-.88.69-2.168 2.25-1.542 5.094a4.469 4.469 0 00-.83.084c-1.31.256-2.121.824-2.413 1.688-.183.541-.122 1.11.044 1.64-5.524-4.152-9.638-4.016-10.125-3.99a.586.586 0 00-.496.825c.372.827.785 1.64 1.232 2.418a.587.587 0 001.017-.584 26.1 26.1 0 01-.777-1.458c1.584.154 5.117.93 9.463 4.523-1.554.948-1.799 1.99-1.675 2.759.379 2.329 4.52 4.24 6.617 4.39.707.05 1.49.228 2.225.447h-4.205c-.722-.299-5.74-2.514-9.824-7.904a.585.585 0 10-.934.707c2.846 3.758 6.07 6.018 8.176 7.218-1.147.108-2.05 1.04-2.05 2.183 0 1.214 1.016 2.203 2.267 2.203h.247l4.042 19.913a.586.586 0 00.575.469h14.891c.279 0 .52-.197.574-.471l3.97-19.911h.17c1.249 0 2.266-.989 2.266-2.203 0-1.216-1.017-2.205-2.266-2.205h-1.115c.927-.722 2.441-1.61 4.199-1.472 2.085.16 6.086-1.686 6.665-4.1.22-.922.011-2.214-2.074-3.292zm-27.718 7.257c-1.854-.131-5.293-1.866-5.543-3.408-.15-.921 1.054-1.628 2.09-2.058a.587.587 0 00.213-.93c-.357-.405-1.315-1.747-1.031-2.582.148-.436.66-.743 1.527-.912.741-.143 1.37-.039 1.866.315.735.523 1.005 1.456 1.026 1.573 0 .03.013.059.017.088a.58.58 0 00.249.615c.27.175.633.102.81-.17.01-.018 1.129-1.694 2.5-1.44 1.025.196 2.914 1.661 4.67 8.812-1.118-.94-2.977-2.168-6.081-3.576-3.406-1.546-4.26-4.5-4.304-4.669a.586.586 0 00-1.17.06c0 .405 1.054 3.89 4.99 5.677 4.21 1.91 5.964 3.429 6.665 4.224h-3.031c-.595-.276-3.272-1.462-5.463-1.62zm17.968 9.574h-2.784a.586.586 0 000 1.172h2.55l-.922 4.62h-6.855a.586.586 0 000 1.172h6.62l-1.733 8.697h-13.93l-1.765-8.697h5.534a.586.586 0 000-1.172H53.05l-.938-4.62h1.289a.586.586 0 000-1.172h-1.526l-.721-3.55h21.66l-.707 3.55zm3.167-5.753c0 .567-.491 1.03-1.095 1.03H49.71c-.603 0-1.094-.463-1.094-1.03 0-.568.49-1.032 1.094-1.032h24.469c.605 0 1.096.464 1.096 1.032zm7.514-8.048c-.388 1.614-3.677 3.323-5.436 3.203-3.154-.252-5.56 2.124-6.044 2.64h-3.175c.568-.959 2.253-3.041 6.866-5.134 3.936-1.785 4.99-5.273 4.99-5.678 0-.324-.26-.618-.584-.618-.324 0-.584.23-.584.553-.005.03-.816 3.093-4.307 4.676-5.846 2.652-7.358 5.387-7.693 6.201h-.558c1.402-6.45 3.625-10.995 5.588-11.363.813-.163 1.661.446 2.526 1.777.012.018.028.026.041.042a.573.573 0 00.392.212c.02.003.038.013.06.013.02 0 .04-.008.06-.01a.544.544 0 00.218-.07c.012-.006.027-.008.04-.016.005-.003.009-.01.013-.013a.562.562 0 00.153-.15v-.003a.575.575 0 00.078-.168c.216-.418 2.263-3.245 4.578-2.783.865.17 1.38.475 1.527.91.284.835-.674 2.178-1.032 2.582a.588.588 0 00.214.931c1.084.451 2.322 1.21 2.069 2.266z"
      ></path>
      <path
        fill={theme.primary[500]}
        stroke={theme.primary[500]}
        d="M55.598 63.794h11.917a.586.586 0 000-1.172H55.598a.586.586 0 000 1.172zM62.265 68.413h-.953a.586.586 0 000 1.172h.953a.586.586 0 000-1.172z"
      ></path>
      <rect
        width="2"
        height="8"
        x="39"
        y="60"
        fill={theme.primary[500]}
        rx="1"
      ></rect>
      <rect
        width="2"
        height="8"
        x="36"
        y="65"
        fill={theme.primary[500]}
        rx="1"
        transform="rotate(-90 36 65)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="28.639"
        y="36.81"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(45 28.639 36.81)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="23.811"
        y="38.018"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(-45 23.81 38.018)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="85.639"
        y="22.811"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(45 85.639 22.81)"
      ></rect>
      <rect
        width="1.707"
        height="6.828"
        x="80.811"
        y="24.018"
        fill={theme.primary[500]}
        rx="0.854"
        transform="rotate(-45 80.81 24.018)"
      ></rect>
      <circle cx="80.5" cy="70.5" r="2.5" fill={theme.primary[500]}></circle>
      <circle cx="95" cy="49" r="2" fill={theme.primary[500]}></circle>
      <circle cx="38.5" cy="30.5" r="1.5" fill={theme.primary[500]}></circle>
    </svg>
  );
};

IllustrationPlant.propTypes = {
  theme: object,
};

export default IllustrationPlant;
