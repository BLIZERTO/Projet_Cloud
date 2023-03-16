// @ts-ignore
import React, { useState, useEffect } from "react";
// @ts-ignore
import axios from "axios";
// @ts-ignore
import jwt_decode from "jwt-decode";

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

function getToken(token: string): any {
	const tokenString = localStorage.getItem(token) as string;
	const userToken = jwt_decode(tokenString);

	return userToken;
}



const CollapsiblePersonalInfo: React.FC = () => {

	const decodedToken = getToken("token");
	console.log(decodedToken.id);
	const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
	const [personalInfo, setPersonalInfo] = useState<PersonalInfoProps>({
		username: "",
		sshpassword: "",
	});


	const handleButtonClick = async () => {
		setIsCollapsed(!isCollapsed);
		await fetchPersonalInfo();
	};


	const fetchPersonalInfo = async () => {
		// const tokenString = localStorage.getItem("token") as string;
		console.log(decodedToken.id, "decodedToken.id");
		try {
			const response = await axios.post("http://localhost:4000/api/getallvolumesbyid", {
				headers: {
					"Content-Type": "application/json",
					// Authorization: `JWT ${tokenString}`,
				},

				id: decodedToken.id,

			});
			setPersonalInfo(response.data);
			console.log(response)
		} catch (error) {
			console.error(error);
		}
	};



	return (
		<div>
			<button onClick={handleButtonClick}>
				{isCollapsed ? "show" : "hide"} Personal Info
			</button>
			{!isCollapsed && <PersonalInfo {...personalInfo} />}
		</div>
	);
};

export default CollapsiblePersonalInfo;