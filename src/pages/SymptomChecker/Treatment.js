import React from 'react';

const TreatmentList = ({ treatment }) => {
    return (
        <div>
            <h5 className='mh-text-dark text-align-center'> Suggested Treatment for your symptoms</h5>
            {treatment.map((treatmentItem, index) => (
                <div className='mh-treatment-item' key={index}>
                    {treatmentItem}
                </div>
            ))}
        </div>
    );
};

export default TreatmentList;
