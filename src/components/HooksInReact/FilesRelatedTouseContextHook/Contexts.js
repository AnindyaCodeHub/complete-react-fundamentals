//Chapter - 60

import React from "react";

const UserContext = React.createContext("Guest"); //"Guest" is the default context value.
const ChannelContext = React.createContext("MyYoutubeChannel"); //"MyYoutubeChannel" is the default context value.

export { UserContext, ChannelContext };
