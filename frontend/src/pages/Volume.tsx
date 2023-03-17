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
    const [volume, setVolume] = useState<Volume>([]);

    function getToken(token: string): any {
        const tokenString = localStorage.getItem(token) as string;
        const userToken = jwt_decode(tokenString);

        return userToken;
    }
    useEffect(() => {
        const fetchVolume = async () => {
            try {
                const response = await axios.get<Volume>(
                    `http://localhost:4000/api/volume/${id}`
                );
                setVolume(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchVolume();
    }, [id]);

    if (!volume) {
        return <div>Loading...</div>;
    }

    return (
        <div className="volume-page">
            <h1>{volume.name}</h1>
            <p>{volume.url}</p>
            <p>Created by {volume.creatorID}</p>
        </div>
    );
};

export default VolumePage;