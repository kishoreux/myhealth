import React from 'react';

const SymptomList = ({ symptoms, selectedItems, checkBoxHandler }) => {
    return (
        <div>
            {symptoms.map((symptom, index) => (
                <label className='mh-stylish-check' key={index}>
                    <input
                        checked={selectedItems.includes(index)}
                        type="checkbox"
                        value={index}
                        onChange={checkBoxHandler}
                    />
                    <span className='symptom'>{symptom}</span>
                    <span className='checker'></span>
                </label>
            ))}
        </div>
    );
};

export default SymptomList;
