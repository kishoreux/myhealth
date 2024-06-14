import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const SymptomChecker = () => {
    const initialData = [
        {
            symptomId: 1,
            symptomCategory: 'general',
            symptoms: [
                'Fever',
                'Fatigue',
                'Weight loss or gain',
                'Night sweats',
                'General weakness',
                'Dizziness',
                'Chills',
                'Loss of appetite'
            ],
            treatment: [
                'Acetaminophen (Tylenol) or Ibuprofen (Advil, Motrin) to reduce fever.',
                'Drink plenty of fluids to stay hydrated.',
                'Get adequate rest to help your body fight the infection.',
                'Ensure adequate sleep and a balanced diet.',
                'Exercise regularly but moderately.',
                'Seek medical advice if the fever is high, persistent, or accompanied by other severe symptoms.'
            ]
        },
        {
            symptomId: 2,
            symptomCategory: 'pain',
            symptoms: [
                'Headache',
                'Chest pain',
                'Abdominal pain',
                'Back pain',
                'Joint pain',
                'Muscle pain',
                'Throat pain',
                'Ear pain'
            ],
            treatment: [
                'Pain relievers: Acetaminophen (Tylenol), ibuprofen (Advil, Motrin), or aspirin.',
                'Ensure adequate sleep.',
                'Drink plenty of fluids to stay hydrated.',
                'Avoid triggers: Identify and avoid headache triggers such as certain foods, stress, or lack of sleep.',
                'Practice relaxation techniques: Yoga, meditation, or acupuncture.',
                'Antacids: For indigestion or heartburn.',
                'Emergency care: Seek immediate medical attention if chest pain is severe, sudden, or accompanied by symptoms like shortness of breath, sweating, nausea, or pain radiating to the arm or jaw.'
            ]
        },
        {
            symptomId: 3,
            symptomCategory: 'respiratory',
            symptoms: [
                "Cough",
                "Shortness of breath",
                "Wheezing",
                "Chest tightness",
                "Sore throat",
                "Runny or stuffy nose",
                "Sneezing",
                "Difficulty breathing"
            ],
            treatment: [
                "Cough suppressants: Dextromethorphan (Robitussin, Delsym).",
                "Expectorants: Guaifenesin (Mucinex) to loosen mucus.",
                "Antibiotics: For bacterial infections like pneumonia or pertussis.",
                "Antihistamines: Loratadine (Claritin), cetirizine (Zyrtec).",
                "Inhalers: For asthma or COPD-related cough.",
                "Avoid triggers: Such as allergens, smoke, or pollution.",
                "Steam inhalation: To relieve congestion.",
                "Hydration: Drink plenty of fluids.",
                "Seek emergency care: If severe or accompanied by other symptoms like shortness of breath or chest pain."
            ]
        },
        {
            symptomId: 4,
            symptomCategory: 'gastrointestinal ',
            symptoms: [
                "Nausea",
                "Vomiting",
                "Diarrhea",
                "Constipation",
                "Abdominal bloating",
                "Heartburn",
                "Indigestion",
                "Blood in stool"
            ],
            treatment: [
                "Antiemetics: Dimenhydrinate (Dramamine), meclizine (Bonine), or bismuth subsalicylate (Pepto-Bismol).",
                "Antacids: Calcium carbonate (Tums), magnesium hydroxide (Maalox).",
                "Diet: Eating small, bland meals (e.g., BRAT diet: bananas, rice, applesauce, toast).",
                "Hydration: Drink plenty of fluids with electrolytes (e.g., oral rehydration solutions).",
                "Rest: Avoid solid foods until vomiting subsides.",
                "Avoid: Dairy, caffeine, alcohol, spicy, fatty and acidic foods.",
                "For persistent or severe symptoms, it is essential to consult with a healthcare professional to determine the underlying cause and appropriate treatment plan."
            ]
        },
        {
            symptomId: 5,
            symptomCategory: 'neurological',
            symptoms: [
                "Headaches",
                "Dizziness",
                "Fainting",
                "Numbness or tingling",
                "Seizures",
                "Memory loss",
                "Confusion",
                "Balance problems"
            ],
            treatment: [
                "Pain relievers: Acetaminophen (Tylenol), ibuprofen (Advil, Motrin), aspirin.",
                "Adequate sleep: Ensure consistent and sufficient sleep.",
                "Hydration: Drink plenty of water.",
                "Migraine-specific medications: Triptans (e.g., sumatriptan).",
                "Antihistamines: Meclizine (Antivert) for vertigo.",
                "Antiemetics: If accompanied by nausea.",
                "Epley maneuver: For benign paroxysmal positional vertigo (BPPV).",
                "Treat underlying cause: Such as anemia, inner ear infections, cardiovascular issues, carpal tunnel syndrome, peripheral neuropathy, or spinal issues.",
                "Vitamin supplements: For deficiencies (e.g., vitamin B12).",
                "For persistent or severe symptoms, it is essential to consult with a healthcare professional for a proper diagnosis and tailored treatment plan."
            ]
        },
        {
            symptomId: 6,
            symptomCategory: 'cardiovascular ',
            symptoms: [
                "Palpitations",
                "Chest pain",
                "Swelling in the legs",
                "High blood pressure",
                "Low blood pressure",
                "Rapid heartbeat"
            ],
            treatment: [
                "Relaxation techniques: Deep breathing exercises, meditation, or yoga.",
                "Hydration: Drink plenty of water, especially if dehydration is suspected.",
                "Avoid stimulants: Such as caffeine, nicotine, and alcohol.",
                "Manage stress: Through relaxation techniques or counseling.",
                "Beta-blockers: To manage heart rate (e.g., propranolol, metoprolol).",
                "Calcium channel blockers: For heart rate and rhythm control (e.g., verapamil, diltiazem).",
                "Antiarrhythmic medications: For rhythm control (e.g., amiodarone).",
                "Nitroglycerin for angina, aspirin, or other heart medications.",
                "Gastrointestinal: Antacids or medications for acid reflux (GERD).",
                "Musculoskeletal: Rest, ice, heat, or pain relievers for muscle strain or inflammation.",
                "Diet: Low-sodium diet, DASH diet (Dietary Approaches to Stop Hypertension).",
                "For persistent or severe symptoms, it is essential to consult with a healthcare professional to determine the underlying cause and appropriate treatment plan."
            ]
        },
        {
            symptomId: 7,
            symptomCategory: 'skin',
            symptoms: [
                "Rash",
                "Itching",
                "Redness",
                "Hives",
                "Dry skin",
                "Blisters",
                "Bruising",
                "Changes in moles"
            ],
            treatment: [
                "Allergens: Avoidance of known allergens or irritants.",
                "Medications: Discontinue medications causing a drug rash if applicable.",
                "Corticosteroid creams or ointments: For inflammation and itching (e.g., hydrocortisone).",
                "Antihistamine creams: For allergic rashes (e.g., diphenhydramine cream).",
                "Moisturizers: To soothe and hydrate the skin.",
                "Consultation with a Healthcare Professional: For proper diagnosis and treatment plan tailored to individual symptoms and medical history."
            ]
        },
        {
            symptomId: 8,
            symptomCategory: 'urinary ',
            symptoms: [
                "Painful urination",
                "Frequent urination",
                "Blood in urine",
                "Urinary urgency",
                "Difficulty urinating",
                "Incontinence"
            ],
            treatment: [
                "Urinary tract infections (UTIs): Antibiotics such as nitrofurantoin, ciprofloxacin, or trimethoprim/sulfamethoxazole.",
                "Sexually transmitted infections (STIs): Antibiotics specific to the infection (e.g., azithromycin for chlamydia, ceftriaxone for gonorrhea).",
                "Analgesics: Over-the-counter pain relievers like ibuprofen or acetaminophen.",
                "Topical analgesics: Such as phenazopyridine for temporary relief.",
                "Fluid management: Avoid excessive fluids before bedtime.",
                "Scheduled voiding: Establish a regular urination schedule.",
                "Diabetes management: Insulin or oral medications to control blood sugar.",
                "For persistent or severe symptoms, it is important to seek medical evaluation promptly to determine the underlying cause and appropriate management plan for these urinary symptoms."
            ]
        },
        {
            symptomId: 9,
            symptomCategory: 'eyes',
            symptoms: [
                "Blurred vision",
                "Red eyes",
                "Itchy eyes",
                "Watery eyes",
                "Eye pain",
                "Vision loss",
                "Double vision"
            ],
            treatment: [
                "Glasses or contact lenses: Prescribed to correct refractive errors (e.g., myopia, hyperopia).",
                "Eye drops: Lubricating drops (artificial tears) for dry eyes.",
                "Corticosteroid eye drops: For inflammation causing blurred vision (e.g., uveitis).",
                "Allergens: Minimize exposure to allergens causing redness.",
                "Contact lens care: Proper cleaning and disinfection to prevent irritation.",
                "For any persistent or severe eye symptoms, especially those accompanied by other concerning symptoms, seek immediate medical evaluation to prevent potential complications and preserve eye health."
            ]
        },
        {
            symptomId: 10,
            symptomCategory: 'ears',
            symptoms: [
                "Hearing loss",
                "Earache",
                "Tinnitus (ringing in the ears)",
                "Discharge from the ear",
                "Dizziness (related to ear issues)"
            ],
            treatment: [
                "Earwax buildup: Removal by ear irrigation or ear drops.",
                "Ear infections: Antibiotics for bacterial infections.",
                "Noise-induced hearing loss: Prevention and use of hearing protection.",
                "Age-related hearing loss (presbycusis): Hearing aids for amplification.",
                "Sensorineural hearing loss: Hearing aids, cochlear implants (for severe cases).",
                "Ear infections: Antibiotics (oral or topical ear drops).",
                "Consultation with an Otolaryngologist (ENT Specialist): For proper diagnosis and individualized treatment plan."
            ]
        },
        {
            symptomId: 11,
            symptomCategory: 'psychological',
            symptoms: [
                "Anxiety",
                "Depression",
                "Mood swings",
                "Insomnia",
                "Irritability",
                "Stress"
            ],
            treatment: [
                "Cognitive Behavioral Therapy (CBT): Helps identify and modify negative thought patterns and behaviors.",
                "Exposure Therapy: Gradual exposure to anxiety-inducing situations to desensitize and reduce fear.",
                "Mindfulness-Based Stress Reduction (MBSR): Teaches mindfulness techniques to manage stress and anxiety.",
                "Regular Exercise: Helps reduce anxiety and stress levels.",
                "Healthy Diet: Balanced meals with limited caffeine and alcohol.",
                "Stress Management: Techniques such as deep breathing, progressive muscle relaxation, or yoga.",
                "Mood Stabilizers: Used to manage mood swings associated with bipolar disorder or other mood disorders (e.g., lithium, valproate).",
                "Antipsychotics: May be prescribed in combination with mood stabilizers for severe mood swings.",
                "Integrated Approach: Often, a combination of therapies (psychotherapy and medication) yields the best results.",
                "Individualized Treatment: Tailored to the specific symptoms, underlying causes, and individual preferences.",
                "Regular Follow-up: Important for monitoring progress and adjusting treatment as needed.",
                "It's crucial to seek guidance from a healthcare professional, such as a psychiatrist, psychologist, or primary care physician, to determine the most appropriate treatment plan based on your specific symptoms and circumstances."
            ]
        }
    ];

    const [data, setData] = useState(initialData);
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

        const totalSymptoms = currentCategory.symptoms.length;
        const halfLength = Math.ceil(totalSymptoms / 2); 

        if (selectedItems.length > halfLength) {
            setShowTreatment(true);
            setSymptomCheckerTitle(false);
        } else {
            setSymptomCheckerTitle(true);
            setShowTreatment(false);
            setCurrentCategoryIndex(currentCategoryIndex + 1);
            setSelectedItems([]); 
        }
    }

    return (
        
        <div className="mh-symptom-checker">
              <Header/>
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
                        {data[currentCategoryIndex]?.symptoms.map((symptom, index) => (
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
                        <button className='mh-btn mh-primary mh-w-100 mh-mt-1' onClick={handleButtonClick}>   Suggest Treatment   </button>
                    </div>
                )}
                
                {showTreatment && (
                    <div>
                        <h5 className='mh-text-dark text-align-center'> Suggested Treatment for your symptoms</h5>
                        {data[currentCategoryIndex]?.treatment.map((treatment, index) => (
                            <div className='mh-treatment-item' key={index}>
                              {treatment} 
                            </div>

                        ))}

                    <button className='mh-btn mh-primary mh-w-100 mh-mt-2 mh-mb-6'> <Link to="/landing">  Back Home </Link> </button>
                    <Footer />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SymptomChecker;