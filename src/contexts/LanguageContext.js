import React, {createContext, useMemo, useState} from 'react';

export const LanguageContext = createContext({
  enabled: false,
});

const LanguageContextProvider = ({children}) => {
  const [lang, setLang] = useState('en');

  const value = useMemo(() => ({
    lang,
    setLang,
  }));

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
