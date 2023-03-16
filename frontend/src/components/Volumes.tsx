// @ts-ignore
import axios from "axios";
// @ts-ignore
import React, { useEffect, useState } from "react"

interface Volume {
    _id: string;
    name: string;
    creatorID: {
        _id: string;
        email: string;
        __v: number;
    };
}

const VolumeList = () => {
    const [volumes, setVolumes] = useState<Volume[]>([]);

    const fetchData = async () => {
        try {
          const response = await axios.post<{ volume: Volume[] }>(
            "http://localhost:4000/api/getallvolumesbyid"
          );
          const volumeData = response.data.volume;
          setVolumes(volumeData);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
  
    return (
      <div>
        <h2>List of Volumes:</h2>
        <ul>
          {volumes.map((volume) => (
            <li key={volume._id}>
              <h3>{volume.name}</h3>
              <p>Creator: {volume.creatorID.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default VolumeList;