import React, { useState } from 'react';
import axios from 'axios'; 
import Predictions from './Predictions';
import { useNavigate } from 'react-router-dom';

const models = [
    { value: 1, label: 'Random Forest Classifier' },
    { value: 2, label: 'Support Vector Machine' },
    { value: 3, label: 'KNN' },
    { value: 4, label: 'Decision Tree Classifier' },
];

function Forms(props) {
    const [submits,setSubmit] = useState(props.submits)
    const [results, setResults] = useState([]);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        RI: '',
        Na: '',
        Mg: '',
        Al: '',
        Si: '',
        K: '',
        Ca: '',
        Ba: '',
        Fe: '',
        Model: '1'
    });    

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleModelChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, Model: value });
    };    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setSubmit(true)
            setResults(response.data.prediction);
            navigate('/form');
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        submits?<Predictions pred = {results}/>:<>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit}> {/* Attach handleSubmit function to form submission */}
                    <div className="row g-3 align-items-center p-2">
                        <div className="col-auto">
                            <label htmlFor="selectModel" className="col-form-label"><b>Model</b></label>
                        </div>
                        <div className="col-auto">
                            <select
                                id="selectModel"
                                className="form-select"
                                aria-label="Model"
                                value={formData.Model}
                                onChange={handleModelChange}
                            >
                                {models.map((model, index) => (
                                    <option key={index} value={model.value}>{model.label}</option>
                                ))}

                            </select>
                        </div>
                    </div>
                    {Object.keys(formData).map((key, index) => (
                        key !== 'Type' && key !== 'Model' && 
                        <div key={index} className="row g-3 align-items-center p-2">
                            <div className="col-auto">
                            <label htmlFor={key} className="col-form-label"><b>{key}</b></label>
                            </div>
                            <div className="col-auto">
                            <input
                                type="text"
                                id={key}
                                className="form-control"
                                value={formData[key]}
                                onChange={handleInputChange}
                            />
                            </div>
                        </div>
                    ))}
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-primary m-3">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Forms;
