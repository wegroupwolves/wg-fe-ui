/*
 *
 * INSTRUCTIONS
 *
 * Copy the Legal Disclaimer and the @font-faces statements to your regular CSS file.
 * The font file(s) should be placed relative to the regular CSS file.
 *
 */

/*
 * Legal Disclaimer for Web licence
 *
 * Licence to use self-hosted webfonts for displaying dynamic text on specified website domains. Our package includes WOFF and WOFF2 font formats.
 *
 * Should the license page views limit be exceeded the license holder will be required to contact Lineto.com for an upgrade.
 *
 * It is strictly prohibited to rename the font and to download or use these fonts in any other media.
 *
 * These Web fonts are licensed exclusively for the use on the following domain(s) and their subdomains:
 *
 * wegroup.be (monthly pageviews: <50K)
 * louiseforbrokers.be (monthly pageviews: <50K)
 * louiseforbrokers.claims (monthly pageviews: <50K)
 *
 */

import { createGlobalStyle } from 'styled-components';
import BookWoff2 from './CircularXXWeb-Book.woff2';
import BookWoff from './CircularXXWeb-Book.woff';
import MediumWoff2 from './CircularXXWeb-Medium.woff2';
import MediumWoff from './CircularXXWeb-Medium.woff';
import BoldWoff2 from './CircularXXWeb-Bold.woff2';
import BoldWoff from './CircularXXWeb-Bold.woff';
import ItalicWoff2 from './CircularXXWeb-Italic.woff2';
import ItalicWoff from './CircularXXWeb-Italic.woff';

export default createGlobalStyle`
  @font-face {
    font-family: "Circular";
    src: url(${BookWoff2}) format('woff2'), url(${BookWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Circular";
    src: url(${MediumWoff2}) format('woff2'), url(${MediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Circular";
    src: url(${BoldWoff2}) format('woff2'), url(${BoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Circular";
    src: url(${ItalicWoff2}) format('woff2'), url(${ItalicWoff}) format('woff');
    font-weight: 400;
    font-style: italic;
  }
`;
