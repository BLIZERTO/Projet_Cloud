//@ts-ignore
import React, { useState } from "react";

interface PersonalInfoProps {
    db_username: string;
    db_password: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ db_username, db_password }) => {
    return (
        <div>
            <p>Username: {db_username}</p>
            <p>Password: {db_password}</p>
        </div>
    );
};

const CollapsiblePersonalInfo: React.FC<{ db_username: string, db_password: string }> = ({ db_username, db_password }) => {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    const handleButtonClick = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                {isCollapsed ? "show" : "hide"} Personal Info
            </button>
            {!isCollapsed && <PersonalInfo db_username={db_username} db_password={db_password} />}
        </div>
    );
};

export default CollapsiblePersonalInfo;