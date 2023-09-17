import { createContext, Dispatch, SetStateAction } from 'react';

type ShowCardContextValue = {
  showLoginCard: boolean;
  setShowLoginCard: Dispatch<SetStateAction<boolean>>;
};

export const ShowCardContext = createContext<ShowCardContextValue>({
    showLoginCard: false, 
    setShowLoginCard: () => {}, 
});
