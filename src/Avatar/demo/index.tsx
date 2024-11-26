import React from "react";
import { Avatar, AvatarImg, AvatarFallback } from "hara-ui";

export default () => {
  return (
    <Avatar>
      <AvatarImg src="https://avatars.githubusercontent.com/u/116432998?s=400&u=e74eca74809646503ded706351112d6e8deb87d3&v=4" alt="hara-ui"/>
      <AvatarFallback>HA</AvatarFallback>
    </Avatar>
  );
};
