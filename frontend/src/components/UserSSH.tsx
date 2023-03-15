// @ts-ignore 
import React, { useState } from "react";

interface UserSSH {
  username: string;
  sshpassword: string;
}

const UserSSH: React.FC<UserSSH> = ({ username, sshpassword }) => {
  return (
    <div>
      <p>Username: {username}</p>
      <p>Password: {sshpassword}</p>
    </div>
  );
};

const CollapsibleUserSSH: React.FC<UserSSH> = (props : any) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const handleButtonClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isCollapsed ? "show" : "hide"} Personal Info
      </button>
      {!isCollapsed && <UserSSH {...props} />}
    </div>
  );
};

export default CollapsibleUserSSH;