// @ts-ignore
import React, { useEffect, useState } from "react";
// @ts-ignore
import axios from "axios";
// @ts-ignore
import jwt_decode from "jwt-decode";
// @ts-ignore
import AddVolumeButton from "./AddVolumeButton";
// @ts-ignore
import {  Link } from 'react-router-dom';
import '../index.css';

interface Volume {
	_id: string;
	name: string;
	creatorID: string;
	url: string;
}

const Volumes: React.FC = () => {
	const handleAddVolume = (newVolume: Volume) => {
		setVolumes([...volumes, newVolume]);
	};

	const [volumes, setVolumes] = useState<Volume[]>([]);

	function getToken(token: string): any {
		const tokenString = localStorage.getItem(token) as string;
		const userToken = jwt_decode(tokenString);

		return userToken;
	}

	// const handleRemoveVolume = async (volumeId: string) => {
	// 	try {
	// 		await axios.delete(`http://localhost:4000/api/volume/${volumeId}`);
	// 		setVolumes(volumes.filter((volume) => volume._id !== volumeId));
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	useEffect(() => {
		const fetchPersonalInfo = async () => {
			try {
				const decodedToken = getToken("token");
				const response = await axios.post<{ volume: Volume[] }>(
					"http://localhost:4000/api/getallvolumesbyid",
					{
						id: decodedToken.id,
					},
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				setVolumes(response.data.volume);
				console.log(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchPersonalInfo();
	}, []);

	

	return (
		<div className="volumes_list">
			{volumes.length > 0 ? (
				volumes.map((volume) =><Link to={`/archives/${volume._id}`} key={volume._id}><div className="volume" key={volume._id}><span className="volume-title">{volume.name}</span></div></Link>)
			) : (
				<div className="volume">No volumes found.</div>
			)}
			<div className="volume">
				<AddVolumeButton creatorID={getToken("token").id} onAddVolume={handleAddVolume} />
			</div>
			{/* <button onClick={() => handleRemoveVolume(volume._id)}>Remove</button> */}
		</div>
	);
};

export default Volumes;