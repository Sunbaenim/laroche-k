import React, { useState } from 'react';
import '../styles/form.css';

const Form = () => {
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [box, setBox] = useState();
    const [postalCode, setPostalCode] = useState();
    const [locality, setLocality] = useState();
    const [telNumber, setTelNumber] = useState();
    const [email, setEmail] = useState();
    const [typeSoins, setTypeSoins] = useState();
    const [demande, setDemande] = useState();

    const optionsTypeSoins = [
        'Toilette et hygiène',
        'Toilette pour personnes handicapées',
        'Soins de plaies',
        'Pansements',
        'Injections',
        'Stomies (poches)',
        'Préparation des médicaments (semainiers)',
        'Soins palliatifs',
        'Soins diabétiques',
        'Soins aux personnes handicapées',
        'Autres'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!lastName) {
            alert('Le nom de famille est obligatoire.');
            return;
        }
        if (!firstName) {
            alert('Le prénom est obligatoire.');
            return;
        }
        if (!street) {
            alert('La rue est obligatoire.');
            return;
        }
        if (!number) {
            alert('Le numéro est obligatoire.');
            return;
        }
        if (!postalCode) {
            alert('Le code postal et la localité sont obligatoire.');
            return;
        }
        if (!locality) {
            alert('Le code postal et la localité sont obligatoire.');
            return;
        }
        if (!telNumber) {
            alert('Le numéro de téléphone est obligatoire.');
            return;
        }
        if (!typeSoins) {
            alert('Le type de soins est obligatoire.');
            return;
        }
        if (!demande) {
            alert('L\'explication des soins est obligatoire.');
            return;
        }
    }

    return (
        <section id='formulaire-de-demande-de-soins' className='box'>
            <h5 className='section-title'>Formulaire de demande de soins</h5>
            <form onSubmit={handleSubmit}>
                <div className='row-form'>
                    <div>
                        <label>Nom de famille*</label>
                        <input
                            type='text'
                            id='lastname'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Prénom*</label>
                        <input
                            type='text'
                            id='firstname'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                </div>
                <div className='row-form'>
                    <div>
                        <label>Rue*</label>
                        <input
                            type='text'
                            id='street'
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                    </div>
                    <div className='column-form'>
                        <div>
                            <label>Numéro*</label>
                            <input
                                type='text'
                                id='number'
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Boite</label>
                            <input
                                type='text'
                                id='box'
                                value={box}
                                onChange={(e) => setBox(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='row-form'>
                    <div>
                        <label>Code postal*</label>
                        <input
                            type='text'
                            id='postalCode'
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Localité*</label>
                        <input
                            type='text'
                            id='locality'
                            value={locality}
                            onChange={(e) => setLocality(e.target.value)}
                        />
                    </div>
                </div>
                <div className='row-form'>
                    <div>
                        <label>Numéro de téléphone*</label>
                        <input
                            type='tel'
                            id='telNumber'
                            value={telNumber}
                            onChange={(e) => setTelNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Adresse e-mail</label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className='one-column-form'>
                    <div>
                        <label>Type de soins*</label>
                        <select
                            onChange={(e) => setTypeSoins(e.target.value)}
                            value={typeSoins}>
                            {optionsTypeSoins.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='one-row-form'>
                    <div>
                        <label>Explication des soins*</label>
                        <textarea
                            type='text'
                            id='demande'
                            value={demande}
                            onChange={(e) => setDemande(e.target.value)}
                        />
                    </div>
                </div>
                <button type='submit'>Envoyer</button>
            </form>
        </section>
    );
}

export default Form;