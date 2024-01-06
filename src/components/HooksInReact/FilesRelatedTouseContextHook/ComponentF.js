//Chapter - 60
//This chapter will explain how to use useContext hook.

import React, { useContext } from "react";
import { ChannelContext, UserContext } from "./Contexts";

function ComponentF() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      The user is {user}, and the channel is {channel}
    </div>
  );
}

export default ComponentF;

//If we had to implement the above functionality without using the useContext hook, then the code would be more complex and
//less readable. See the below code lines from 23 to 46 where we have implemented the same thing without using useContext hook.

// import React from "react";
// import { ChannelContext, UserContext } from "./Contexts";

// function ComponentF() {
//   return (
//     <UserContext.Consumer>
//       {(user) => {
//         return (
//           <ChannelContext.Consumer>
//             {(channel) => {
//               return (
//                 <div>
//                   The user is {user}, and the channel is {channel}
//                 </div>
//               );
//             }}
//           </ChannelContext.Consumer>
//         );
//       }}
//     </UserContext.Consumer>
//   );
// }

// export default ComponentF;
