import React, { createContext, useContext, ReactNode } from 'react';
import useIsMobile from '../hooks/useIsMobile';

const MobileContext = createContext<boolean>(false);

interface MobileProviderProps {
  children: ReactNode;
}

export const MobileProvider: React.FC<MobileProviderProps> = ({ children }) => {
  const isMobile = useIsMobile();
  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => useContext(MobileContext); 