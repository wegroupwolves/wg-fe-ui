import React from 'react';
import { string } from 'prop-types';

const IconMeasurePlus = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.216 19.8003H10.2V13.5843C10.2096 13.2013 10.0779 12.8282 9.83 12.5361C9.58214 12.244 9.23544 12.0533 8.856 12.0003C8.64632 11.9784 8.43437 12.0009 8.23397 12.0664C8.03357 12.1319 7.84924 12.2389 7.69298 12.3805C7.53672 12.522 7.41206 12.6949 7.32711 12.8878C7.24217 13.0808 7.19886 13.2895 7.2 13.5003V22.2003C7.2 22.3595 7.26322 22.5121 7.37574 22.6246C7.48826 22.7371 7.64087 22.8003 7.8 22.8003H19.8V24.2163C19.7904 24.5993 19.9221 24.9724 20.17 25.2646C20.4179 25.5567 20.7646 25.7474 21.144 25.8003C21.3537 25.8223 21.5656 25.7997 21.766 25.7342C21.9664 25.6687 22.1508 25.5617 22.307 25.4202C22.4633 25.2787 22.5879 25.1058 22.6729 24.9128C22.7578 24.7198 22.8011 24.5111 22.8 24.3003V22.8003H24.3C24.5108 22.8015 24.7195 22.7582 24.9125 22.6732C25.1054 22.5883 25.2783 22.4636 25.4199 22.3073C25.5614 22.1511 25.6684 21.9668 25.7339 21.7664C25.7994 21.566 25.8219 21.354 25.8 21.1443C25.7471 20.7649 25.5564 20.4182 25.2642 20.1703C24.9721 19.9225 24.599 19.7908 24.216 19.8003Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2 5.7844V7.8004H18.6303C18.6252 7.80539 18.6201 7.81041 18.6151 7.81547C18.2212 8.20929 18 8.74344 18 9.30039C18 9.85734 18.2212 10.3915 18.6151 10.7853C18.6201 10.7904 18.6252 10.7954 18.6303 10.8004H5.7C5.48917 10.8015 5.28048 10.7582 5.08752 10.6733C4.89456 10.5883 4.72167 10.4637 4.58013 10.3074C4.4386 10.1512 4.33159 9.96683 4.26609 9.76643C4.20059 9.56604 4.17807 9.35408 4.2 9.1444C4.25293 8.76496 4.44363 8.41826 4.73576 8.1704C5.02788 7.92253 5.40101 7.79083 5.784 7.8004H7.2V5.7004C7.19886 5.48957 7.24217 5.28087 7.32711 5.08791C7.41205 4.89495 7.53672 4.72207 7.69298 4.58053C7.84923 4.43899 8.03357 4.33199 8.23397 4.26649C8.43436 4.20099 8.64632 4.17847 8.856 4.2004C9.23544 4.25332 9.58214 4.44403 9.83 4.73615C10.0779 5.02828 10.2096 5.4014 10.2 5.7844ZM19.8 11.3789V17.0164C19.7904 17.3994 19.9221 17.7725 20.17 18.0646C20.4179 18.3568 20.7646 18.5475 21.144 18.6004C21.3537 18.6223 21.5656 18.5998 21.766 18.5343C21.9664 18.4688 22.1508 18.3618 22.307 18.2203C22.4633 18.0787 22.5879 17.9058 22.6729 17.7129C22.7578 17.5199 22.8011 17.3112 22.8 17.1004V14.3789C22.354 14.3145 21.9375 14.1077 21.6151 13.7853C21.2212 13.3915 21 12.8573 21 12.3004V11.4004H20.1C19.999 11.4004 19.8988 11.3931 19.8 11.3789Z"
        fill={color}
      />
      <path
        d="M26.1 8.40039H24V6.30039C24 6.0617 23.9052 5.83278 23.7364 5.66399C23.5676 5.49521 23.3387 5.40039 23.1 5.40039C22.8613 5.40039 22.6324 5.49521 22.4636 5.66399C22.2948 5.83278 22.2 6.0617 22.2 6.30039V8.40039H20.1C19.8613 8.40039 19.6324 8.49521 19.4636 8.66399C19.2948 8.83278 19.2 9.0617 19.2 9.30039C19.2 9.53909 19.2948 9.768 19.4636 9.93679C19.6324 10.1056 19.8613 10.2004 20.1 10.2004H22.2V12.3004C22.2 12.5391 22.2948 12.768 22.4636 12.9368C22.6324 13.1056 22.8613 13.2004 23.1 13.2004C23.3387 13.2004 23.5676 13.1056 23.7364 12.9368C23.9052 12.768 24 12.5391 24 12.3004V10.2004H26.1C26.3387 10.2004 26.5676 10.1056 26.7364 9.93679C26.9052 9.768 27 9.53909 27 9.30039C27 9.0617 26.9052 8.83278 26.7364 8.66399C26.5676 8.49521 26.3387 8.40039 26.1 8.40039Z"
        fill={color}
      />
    </svg>
  );
};

IconMeasurePlus.defaultProps = {
  color: 'black',
};

IconMeasurePlus.propTypes = {
  color: string,
  className: string,
};

export default IconMeasurePlus;
