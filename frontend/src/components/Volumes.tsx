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
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import '../index.css';

interface Volume {
	_id: string;
	name: string;
	creatorID: string;
	// url: string;
}


// interface Volume {
//     _id: string;
//     name: string;
//     creatorID: string;
// }

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
			// url: "",
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
		}, []);
		const handleSubmit = async (values: Volume, { setSubmitting, setStatus }) => {
			try {
				const response = await axios.post(' http://localhost:4000/api/createvolume', values);
				console.log(values)
				if (response) {
					// onAddVolume(response.data.volume);
					setStatus({ success: true });
					console.log('test')
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
				{!showPopup && <button onClick={() => setShowPopup(true)}>Add Volume</button>}
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
											<label htmlFor="name">Name:</label>
											<Field type="text" name="name" />
											<ErrorMessage name="name" component="div" />
										</div>
										<Field type="hidden" name="creatorID" value={creatorID} />
										{/* <Field type="hidden" name="creatorID" value={_id} /> */}
										<button type="submit" disabled={isSubmitting}>
											Add
										</button>
										{status && status.error && <div className="error_message">{status.error}</div>}
									</Form>
								)}
							</Formik>
							<button onClick={() => setShowPopup(false)}>Cancel</button>
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
			// setVolumes(response.data.volume)
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
				volumes.map((volume) => <div className="volume" key={volume.name}><Link to={`/archives/`}><span className="volume-title">{volume.name}</span><button onClick={() => handleRemoveVolume(volume._id)}>Remove</button></Link></div>)
				) : (
				<div className="volume">No volumes found.</div>
			)}
			<div className="volume">
				<AddVolumeButton creatorID={getToken("token").id} onAddVolume={handleAddVolume} />
			</div>
		</div>
	);
};

export default Volumes;