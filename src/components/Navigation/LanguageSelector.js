import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import styled from 'styled-components';
import { key } from 'styled-theme';
import NL from '../../assets/flags/NL.svg';
import EN from '../../assets/flags/EN.svg';
import FR from '../../assets/flags/FR.svg';


const LanguageSelector = () => {
  const [langIcon, setLangIcon] = useState(EN);
  const setLanguage = lang => {
    i18next.changeLanguage(lang);

    if (i18next.language === 'nl') {
      setLangIcon(NL);
    }
    if (i18next.language === 'en') {
      setLangIcon(EN);
    }
    if (i18next.language === 'fr') {
      setLangIcon(FR);
    }
  };

  useEffect(() => {
    if (i18next.language === 'nl') {
      setLangIcon(NL);
    }
    if (i18next.language === 'en') {
      setLangIcon(EN);
    }
    if (i18next.language === 'fr') {
      setLangIcon(FR);
    }
  });
  return (
    <LangSelector>
      <FlagIcon
        src={langIcon}
        alt={i18next.language}
        width="30"
        height="30"
        button={true}
      />
      <DropDownContainer>
        <button type="button" onClick={() => setLanguage('nl')}>
          <FlagIcon src={NL} alt="Nederlands" width="30" height="30" /> NL
        </button>
        <button type="button" onClick={() => setLanguage('en')}>
          <FlagIcon src={EN} alt="English" width="30" height="30" /> EN
        </button>
        <button type="button" onClick={() => setLanguage('fr')}>
          <FlagIcon src={FR} alt="Français" width="30" height="30" /> FR
        </button>
      </DropDownContainer>
    </LangSelector>
  );
};

const DropDownContainer = styled.div`
  display: none;
  position: absolute;
  right: 2rem;
  top: 4rem;
  flex-direction: column;
  background: #fafafa;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
  width: auto;
  border-radius: 0.5rem;
  padding: 0.7rem 0;

  & button {
    cursor: pointer;
    border: none;
    background: none;
    text-align: left;
    align-items: center;
    outline: none;
    display: flex;
    padding: 0.7rem 1.5rem 0.7rem 0;
    margin-bottom: 0.5rem;
    font-size: ${key(['fonts.normal-size'])};
    font-weight: bold;

    &:active {
      border: none;
    }

    &:hover {
      color: ${key('colors.primary-regular')};
      background-color: #ececec;
    }

    &:last-child {
      margin-bottom: 0;
    }

    & > img {
      margin: 0 1.5rem;
    }
  }
`;

const FlagIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-left: 1.5rem;
`;

const LangSelector = styled.div`
  &:hover {
    & ${DropDownContainer} {
      display: flex;
    }
  }
`;

export default LanguageSelector;
