// @ts-ignore
import React, { useEffect, useState } from "react";
// @ts-ignore
import axios from "axios";
// @ts-ignore
import jwt_decode from "jwt-decode";
// @ts-ignore
import { useParams } from 'react-router-dom';
// @ts-ignore
import CollapsiblePersonalInfo from "../components/UserSSH"
import '../index.css';



interface VolumeParams {
    id: string;
}



const VolumePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [result, setResult] = useState<any>({});

    useEffect(() => {
        const fetchVolume = async () => {
            try {
                const response = await axios.post<{ result: any }>(
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
            <CollapsiblePersonalInfo db_username={result.db_username} db_password={result.db_password} />
        </div>
    );
};

export default VolumePage;
