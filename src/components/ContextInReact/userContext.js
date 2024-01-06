//Chapter - 38, 39, 40

import React from "react";

const UserContext = React.createContext("Guest"); //"Guest" is the default context value.

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
