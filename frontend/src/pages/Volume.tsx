// @ts-ignore
import React, { useEffect, useState } from "react";
// @ts-ignore
import axios from "axios";
// @ts-ignore
import jwt_decode from "jwt-decode";
// @ts-ignore
import { useParams } from 'react-router-dom';
// @ts-ignore
import CollapsiblePersonalInfo from "../components/UserSSH";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
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
        <div>
        <Navigation></Navigation>
        <div className='avatar'>
                <img src="../assets/Ellipse_2avatar.png" alt="Logo" />
            </div>
        <div>
            <h1 className='titre'><b>Accueil</b></h1>
        </div>
        <div className='content_container'>
            <div className="content">
            Aliquam scelerisque elit quam, sit amet euismod ipsum semper in. Vivamus sodales sollicitudin dapibus. Fusce id tellus quis leo feugiat pellentesque nec sed justo. Suspendisse tristique, nibh at tincidunt efficitur, ipsum mi blandit diam, eu bibendum orci ex sed felis. Donec faucibus luctus tortor, at lacinia justo tristique a. Morbi dapibus vestibulum nunc a convallis. 
            In bibendum ullamcorper odio, ut tempus elit eleifend eget. Fusce euismod lorem non tincidunt sagittis.
                <div className='information'>
                    <div>
                    <CollapsiblePersonalInfo db_username={result.db_username} db_password={result.db_password} />
                    </div>
                </div>
            </div>
        </div>
        <div className='buttons'>
             <Footer></Footer>
        </div>
    </div>
    );
};

export default VolumePage;
