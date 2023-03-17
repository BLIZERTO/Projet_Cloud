// @ts-ignore
import React, { useEffect, useState } from "react";
// @ts-ignore
import axios from "axios";
// @ts-ignore
import jwt_decode from "jwt-decode";
// @ts-ignore
// import AddVolumeButton from "./AddVolumeButton";
// @ts-ignore
import { Link } from 'react-router-dom';
// @ts-ignore
import { Formik, Form, Field, ErrorMessage } from "formik";
// @ts-ignore
import * as Yup from "yup";

import '../index.css';

interface Volume {
	_id: string;
	name: string;
	creatorID: string;
}

interface Props {
	creatorID: string;
	onAddVolume: (volume: Volume) => void;
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



	const AddVolumeButton: React.FC<Props> = ({ creatorID, onAddVolume }) => {

		const [showPopup, setShowPopup] = useState(false);

		const initialValues: Volume = {
			_id: "",
			name: "",
			creatorID: creatorID,
		};

		const validationSchema = Yup.object({
			name: Yup.string().required("Required"),
			creatorID: Yup.string().required("Required"),
		});
		useEffect(() => {
			const fetchVolumes = async () => {
				try {
					const response = await axios.post<{ volumes: Volume[] }>(
						"http://localhost:4000/api/getvolumes",
						{
							creatorID: creatorID,
						},
						{
							headers: {
								"Content-Type": "application/json",
							},
						}
					);
					setVolumes(response.data.volumes);
				} catch (error) {
					console.error(error);
				}
			};
			fetchVolumes();
		}, [creatorID]);
		const handleSubmit = async (values: Volume, { setSubmitting, setStatus }) => {
			try {
				const response = await axios.post(' http://localhost:4000/api/createvolume', {name: values.name, creatorID: values.creatorID});
				console.log(values)
				if (response) {
					setStatus({ success: true });
					console.log(response)
					setVolumes([...volumes, response.data.project]);
				} else if (response.data === "volume already exist") {
					setStatus({ error: "Volume already exist" });
				}
				else {
					setStatus({ error: 'Incorrect name for volume' });
				}
			} catch (error) {
				setStatus({ error: 'An error occurred while adding a volume in' });
			}
			setShowPopup(false);
			setSubmitting(false);
		};


		return (
			<>
				{!showPopup && <button className="button_add_volume" onClick={() => setShowPopup(true)}><img src="../assets/Add.png" alt="" /></button>}
				{showPopup && (
					<div className="popup">
						<div className="popup-inner">
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={handleSubmit}
							>
								{({ isSubmitting, status }) => (
									<Form>
										<div className="form-group">
											<label className="label" htmlFor="name">Name:</label>
											<Field className="input small" type="text" name="name" />
											<ErrorMessage className="error_message" name="name" component="div" />
										</div>
										<Field type="hidden" name="creatorID" value={creatorID} />
									
										<button className="main_button" type="submit" disabled={isSubmitting}>
											Ajouter
										</button>
										{status && status.error && <div className="error_message">{status.error}</div>}
									</Form>
								)}
							</Formik>
							<button className="btn_closed" onClick={() => setShowPopup(false)}>Cancel</button>
						</div>
					</div>
				)}
			</>
		);
	};

	const handleRemoveVolume = async (volumeId: string) => {
		try {
			const response = await axios.post<{ volume: Volume[] }>(
				"http://localhost:4000/api/deletevolumebyid/",
				{
					id: volumeId,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			setVolumes(volumes.filter((volume) => volume._id !== volumeId));
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

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
				volumes.map((volume) => <div className="volume" key={volume._id}><Link to={`/archives/${volume._id}`}><span className="volume-title">{volume.name}</span></Link><button className="btn_closed" onClick={() => handleRemoveVolume(volume._id)}>Remove</button></div>)
				) : (
				<div className="volume"><span>No volumes found.</span></div>
			)}
			<div className="volume">
				<AddVolumeButton creatorID={getToken("token").id} onAddVolume={handleAddVolume} />
			</div>
		</div>
	);
};

export default Volumes;