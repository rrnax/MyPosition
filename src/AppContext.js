import { createContext } from "react";

const AppContext = createContext(true);

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export default AppContext;