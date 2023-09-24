import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ShowCardContext } from "./context/ShowCardContext";
import Header from "./components/Header";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

type ShowCardContextValue = {
  showLoginCard: boolean;
  setShowLoginCard: React.Dispatch<React.SetStateAction<boolean>>;
};

const App = () => {
  const [showLoginCard, setShowLoginCard] = useState<boolean>(false);
  const user = useSelector((store: RootState) => store.user);

  const loginCardContextValue: ShowCardContextValue = {
    showLoginCard,
    setShowLoginCard,
  };

  return (
    <ShowCardContext.Provider value={loginCardContextValue}>
      {user && <Header />}
      <Outlet />
    </ShowCardContext.Provider>
  );
};

export default App;
