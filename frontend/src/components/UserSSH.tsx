// @ts-ignore
import React, { useState, useEffect } from "react";
// @ts-ignore
import axios from "axios";

interface PersonalInfoProps {
	username: string;
	sshpassword: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ username, sshpassword }) => {
	return (
		<div>
			<p>Username: {username}</p>
			<p>Password: {sshpassword}</p>
		</div>
	);
};

const CollapsiblePersonalInfo: React.FC = () => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
	const [personalInfo, setPersonalInfo] = useState<PersonalInfoProps>({
		username: "",
		sshpassword: "",
	});

	const handleButtonClick = () => {
		setIsCollapsed(!isCollapsed);
	};

	useEffect(() => {
		axios.get("http://localhost:3000/api/getallvolumesbyid").then((response) => {
			setPersonalInfo(response.data);
			console.log(response)
			console.log(response.data)
		});
	}, []);

	return (
		<div>
			<button onClick={handleButtonClick}>
				{isCollapsed ? "Show" : "Hide"} Personal Info
			</button>
			{!isCollapsed && <PersonalInfo {...personalInfo} />}
		</div>
	);
};

export default CollapsiblePersonalInfo;