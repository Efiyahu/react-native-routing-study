import React, {createContext, useMemo, useState} from 'react';

export const EnableContext = createContext({
  enabled: false,
});

const EnableContextProvider = ({children}) => {
  const [enabled, setEnabled] = useState(false);

  const value = useMemo(() => ({
    enabled,
    setEnabled,
  }));

  return (
    <EnableContext.Provider value={value}>{children}</EnableContext.Provider>
  );
};

export default EnableContextProvider;
