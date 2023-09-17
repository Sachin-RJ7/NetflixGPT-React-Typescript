import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ShowCardContext } from "./context/ShowCardContext";

type ShowCardContextValue = {
  showLoginCard: boolean;
  setShowLoginCard: React.Dispatch<React.SetStateAction<boolean>>;
};

const App = () => {
  const [showLoginCard, setShowLoginCard] = useState<boolean>(false);

  const loginCardContextValue: ShowCardContextValue = {
    showLoginCard,
    setShowLoginCard,
  };

  return (
    <ShowCardContext.Provider value={loginCardContextValue}>
      <Outlet />
    </ShowCardContext.Provider>
  );
};

export default App;
