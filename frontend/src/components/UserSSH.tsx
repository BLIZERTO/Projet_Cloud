// @ts-ignore
import React, { useState, useEffect } from "react";
// @ts-ignore
import axios from "axios";
// @ts-ignore
import jwt_decode from "jwt-decode";
// @ts-ignore
import { AxiosResponse } from "axios";

interface PersonalInfoProps {
	username: string;
	sshpassword: string;
}

// interface TokenPayload {
// 	token: any;
// }

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
	// console.log(decodedToken.id);
	const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
	const [personalInfo, setPersonalInfo] = useState<PersonalInfoProps>({
		username: "",
		sshpassword: "",
	});


	const handleButtonClick = () => {
		setIsCollapsed(!isCollapsed);
	};

	useEffect(() => {
		// axios.post("http://localhost:4000/api/getallvolumesbyid", {data : {id: decodedToken.id}}).then((response) => {
		axios.post("http://localhost:4000/api/getallvolumesbyid").then((response) => {
			setPersonalInfo(response.data);
			console.log(response)
		});
		console.log(getToken)
	}, []);

	interface MyData {
		id: any;
	}
	const [data, setData] = useState<MyData | null>(null);
	const handleClick = async () => {
		console.log(data);
		try {
			const response: AxiosResponse<MyData> = await axios.get<MyData>(
				"http://localhost:4000/api/getallvolumesbyid"
			);
			setData(response.data);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};


	return (
		<div>
			<button onClick={handleClick}>Click</button>
			<button onClick={handleButtonClick}>
				{isCollapsed ? "Show" : "Hide"} Personal Info
			</button>
			{!isCollapsed && <PersonalInfo {...personalInfo} />}
		</div>
	);
};

export default CollapsiblePersonalInfo;