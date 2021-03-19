import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import styled from 'styled-components';
import NL from '../../assets/flags/NL';
import EN from '../../assets/flags/EN';
import FR from '../../assets/flags/FR';

const LanguageSelector = () => {
  const [langIcon, setLangIcon] = useState(<EN />);

  const setLanguage = lang => {
    i18next.changeLanguage(lang);

    if (i18next.language === 'nl') {
      setLangIcon(<NL />);
    }
    if (i18next.language === 'en') {
      setLangIcon(<EN />);
    }
    if (i18next.language === 'fr') {
      setLangIcon(<FR />);
    }
  };

  useEffect(() => {
    if (i18next.language === 'nl') {
      setLangIcon(<NL />);
    }
    if (i18next.language === 'en') {
      setLangIcon(<EN />);
    }
    if (i18next.language === 'fr') {
      setLangIcon(<FR />);
    }
  }, []);

  return (
    <LangSelector>
      <FlagIcon src={langIcon} button={true}>
        {langIcon}
      </FlagIcon>
      <DropDownContainer>
        <button type="button" onClick={() => setLanguage('nl')}>
          <FlagIcon>
            <NL />
          </FlagIcon>
          NL
        </button>
        <button type="button" onClick={() => setLanguage('en')}>
          <FlagIcon>
            <EN />
          </FlagIcon>
          EN
        </button>
        <button type="button" onClick={() => setLanguage('fr')}>
          <FlagIcon>
            <FR />
          </FlagIcon>
          FR
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
    font-size: 1.6rem;
    font-weight: 500;

    &:active {
      border: none;
    }

    &:hover {
      color: ${({ theme }) => theme.brand.primary};
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

const FlagIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin-left: 1.5rem;
  margin-right: 1rem;
`;

const LangSelector = styled.div`
  &:hover {
    & ${DropDownContainer} {
      display: flex;
    }
  }
`;

export default LanguageSelector;
