// @ts-ignore
import React, { useState } from "react";
// @ts-ignore
import { Formik, Form, Field, ErrorMessage } from "formik";
// @ts-ignore
import * as Yup from "yup";
// @ts-ignore
import axios from "axios";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

interface Volume {
    _id: string;
    name: string;
    creatorID: string;
}

interface Props {
    creatorID: string;
    onAddVolume: (volume: Volume) => void;
}

const AddVolumeButton: React.FC<Props> = ({ creatorID, onAddVolume }) => {
    const [showPopup, setShowPopup] = useState(false);

    const initialValues: Volume = {
        _id: uuidv4(),
        name: "",
        creatorID: creatorID,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        creatorID: Yup.string().required("Required"),
    });

    const handleSubmit = async (values: Volume, { setSubmitting, setStatus }) => {
        try {
            const response = await axios.post(' http://localhost:4000/api/createvolume', values);
            console.log(values)
            if (response.data.success) {
                onAddVolume(response.data.volume);
                setStatus({ success: true });
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
            <button onClick={() => setShowPopup(true)}>Add Volume</button>
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

export default AddVolumeButton;