// @ts-ignore
import React , { useState } from "react";
// @ts-ignore
import axios from "axios";

interface Volume {
    _id: string;
    name: string;
    creatorID: {
        _id: string;
        email: string;
        __v: number;
    };
}

const AddVolumeForm = () => {
    const [name, setName] = useState("");
    const [creatorID, setCreatorID] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleCreatorIDChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCreatorID(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post<{ volume: Volume }>(
                "https://example.com/my-api-endpoint",
                {
                    name,
                    creatorID,
                }
            );
            console.log(response.data.volume);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
                Creator ID:
                <input type="text" value={creatorID} onChange={handleCreatorIDChange} />
            </label>
            <button type="submit">Add Volume</button>
        </form>
    );
};

export default AddVolumeForm;