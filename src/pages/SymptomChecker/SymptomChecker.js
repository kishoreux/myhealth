import React, { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import SymptomData from './SymptomData';
import SymptomList from './SymptomList';
import Treatment from './Treatment';

const SymptomChecker = () => {
    const [data, setData] = useState(SymptomData);
    const [selectedItems, setSelectedItems] = useState([]);
    const [showTreatment, setShowTreatment] = useState(false);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [symptomCheckerTitle, setSymptomCheckerTitle] = useState(false);

    function checkBoxHandler(e) {
        let isSelected = e.target.checked;
        let value = parseInt(e.target.value);
        if (isSelected) {
            setSelectedItems([...selectedItems, value]);
        } else {
            setSelectedItems((prevData) => {
                return prevData.filter((symptomId) => {
                    return symptomId !== value;
                });
            });
        }
    }

    function handleButtonClick() {
        const currentCategory = data[currentCategoryIndex];
        if (!currentCategory) {
            return;
        }

        const totalCategories = data.length;
        const totalSymptoms = currentCategory.symptoms.length;
        const halfLength = Math.ceil(totalSymptoms / 2);

        if (selectedItems.length > halfLength) {
            setShowTreatment(true);
            setSymptomCheckerTitle(false);
        } else {
            setShowTreatment(false);
            
            if (currentCategoryIndex === totalCategories - 1) {
                setCurrentCategoryIndex(0);
            } else {
                setCurrentCategoryIndex(currentCategoryIndex + 1);
            }
            setSelectedItems([]);
            setSymptomCheckerTitle(true);
        }
    }

    const currentCategory = data[currentCategoryIndex];

    return (
        <div className="mh-symptom-checker">
            <Header />
            <div className='mh-container'>
                {!symptomCheckerTitle && !showTreatment && (
                    <h4 className='mh-text-dark text-align-center'> Tell us your symptoms</h4>
                )}
                {symptomCheckerTitle && !showTreatment && (
                    <div>
                        <p className='mh-text-dark text-align-center'>It seems the information is insufficient. </p>
                        <h5 className='mh-text-dark text-align-center'> Please tell us more about your symptoms</h5>
                    </div>
                )}

                {!showTreatment && (
                    <div>
                        <SymptomList
                            symptoms={currentCategory.symptoms}
                            selectedItems={selectedItems}
                            checkBoxHandler={checkBoxHandler}
                        />
                        <button className='mh-btn mh-primary mh-w-100 mh-mt-1' onClick={handleButtonClick}>
                            Suggest Treatment
                        </button>
                    </div>
                )}

                {showTreatment && (
                    <div>
                        <Treatment treatment={currentCategory.treatment} />
                        <button className='mh-btn mh-primary mh-w-100 mh-mt-2 mh-mb-6'>
                            <Link to="/landing"> Back Home </Link>
                        </button>
                        <Footer />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SymptomChecker;
