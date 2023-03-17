// @ts-ignore
import React, { useEffect, useState } from "react";
// @ts-ignore
import axios from "axios";
// @ts-ignore
import jwt_decode from "jwt-decode";
// @ts-ignore
import { useParams } from 'react-router-dom';
import '../index.css';
// @ts-ignore
import { Volume } from "./Volumes";


interface VolumeParams {
    id: string;
}

const VolumePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // const [volume, setVolume] = useState<Volume>([]);
    const [result, setResult] = useState<any>([]);
    function getToken(token: string): any {
        const tokenString = localStorage.getItem(token) as string;
        const userToken = jwt_decode(tokenString);

        return userToken;
    }
    useEffect(() => {
        const fetchVolume = async () => {
            try {
                const response = await axios.post<{ result: any}>(
                    "http://localhost:4000/api/getonevolume",
                    {
                        id: id,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                // setVolume(volume.filter((volume) => volume._id !== volumeId));
                // console.log(response.data);
                setResult(response.data.result);
                console.log(response.data.result)
            } catch (error) {
                console.error(error);
            }
        };
        fetchVolume();
    }, [id]);

    if (!result) {
        return <div>Loading...</div>;
    }
    console.log(result)
    return (
        <div className="volume-page">
            <h1>{result.name}</h1>
            {/* <p>{result.db_username}</p> */}
        </div>
    );
};

export default VolumePage;