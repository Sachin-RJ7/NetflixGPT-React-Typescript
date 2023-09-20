import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ShowCardContext } from "./context/ShowCardContext";
import { Provider } from "react-redux";
import store from "./redux/store";

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
      <Provider store={store}>
        <Outlet />
      </Provider>
    </ShowCardContext.Provider>
  );
};

export default App;
