import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import FieldComponent from '../Components/FieldComponent';

const initialValuesState = {
    email: '',
    phone: '',
    invites: [
        {
            name: '',
            surname: '',
            isPresent: {
                mairie: false,
                ceremonie: false,
                brunch: false,
            },
            needHousing: false,
        },
        {
            name: '',
            surname: '',
            isPresent: {
                mairie: false,
                ceremonie: false,
                brunch: false,
            },
            needHousing: false,
        },
    ],
};

const RSVPFormContainer = (props) => {
    const [initialValues, setInitialValues] = useState(initialValuesState);

    const handleFormSubmit = (data) => {
        console.log(data);
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            render={({
                handleChange, handleSubmit, values, setValues,
            }) => (
                <div>
                    <h1>RSVP</h1>
                    <form onSubmit={handleSubmit}>
                        <FieldComponent inline type="text" name="email" onChange={handleChange} value={values.email} title="Votre email:" />
                        <FieldComponent inline type="text" name="phone" onChange={handleChange} value={values.phone} title="Votre numéro de téléphone:" />
                        <br/>
                        <FieldComponent inline type="text" name="invites.0.name" onChange={handleChange} value={values.invites[0].name} title="Votre nom:" />
                        <FieldComponent inline type="text" name="invites.0.surname" onChange={handleChange} value={values.invites[0].surname} title="Votre prénom:" />
                        <FieldComponent
                            type="checkbox"
                            name="invites.0.isPresent.mairie"
                            onChange={handleChange}
                            value={values.invites[0].isPresent.mairie}
                            title="Je serais présent à la mairie le vendredi 4 Septembre"
                        />
                        <FieldComponent
                            type="checkbox"
                            name="invites.0.isPresent.ceremonie"
                            onChange={handleChange}
                            value={values.invites[0].isPresent.ceremonie}
                            title="Je serais présent à la cérémonie le samedi 5 Septembre"
                        />
                        <FieldComponent
                            type="checkbox"
                            name="invites.0.isPresent.brunch"
                            onChange={handleChange}
                            value={values.invites[0].isPresent.brunch}
                            title="Je serais présent au brunch le dimanche 6 Septembre"
                        />
                        <FieldComponent
                            type="checkbox"
                            name="invites.0.isPresent.brunch"
                            onChange={handleChange}
                            value={values.invites[0].isPresent.brunch}
                            title="J'ai besoin d'un logement sur place"
                        />
                        <h2>Vos accompagnants</h2>
                        <table>
                            {values.invites
                                .filter((_, key) => key > 0)
                                .map((_, key) => (
                                    <tr>
                                        <td>
                                            <FieldComponent
                                                inline
                                                type="text"
                                                name={`invites.${key + 1}.name`}
                                                onChange={handleChange}
                                                value={values.invites[key + 1].name}
                                                placeholder="Nom de l'accompagnant"
                                            />
                                        </td>
                                        <td>
                                            <FieldComponent
                                                inline
                                                type="text"
                                                name={`invites.${key + 1}.surname`}
                                                onChange={handleChange}
                                                value={values.invites[key + 1].surname}
                                                placeholder="Prénom de l'accompagnant"
                                            />
                                        </td>
                                        <td>
                                            <FieldComponent
                                                inline
                                                type="checkbox"
                                                name={`invites.${key + 1}.isPresent.mairie`}
                                                onChange={handleChange}
                                                value={values.invites[key + 1].isPresent.mairie}
                                            />
                                        </td>
                                        <td>
                                            <FieldComponent
                                                inline
                                                type="checkbox"
                                                name={`invites.${key + 1}.isPresent.ceremonie`}
                                                onChange={handleChange}
                                                value={values.invites[key + 1].isPresent.ceremonie}
                                            />
                                        </td>
                                        <td>
                                            <FieldComponent
                                                inline
                                                type="checkbox"
                                                name={`invites.${key + 1}.isPresent.brunch`}
                                                onChange={handleChange}
                                                value={values.invites[key + 1].isPresent.brunch}
                                            />
                                        </td>
                                    </tr>
                                ))}
                        </table>

                        <button
                            onClick={() => setValues({
                                invites: [
                                    ...values.invites,
                                    {
                                        name: '',
                                        surname: '',
                                        isPresent: {
                                            mairie: false,
                                            ceremonie: false,
                                            brunch: false,
                                        },
                                    },
                                ],
                            })
                            }
                        >
                            addRow
                        </button>
                        <h2>Détails</h2>
                        <FieldComponent title="Avez vous un régime alimentaire particulier ?" type="textarea" />
                        <FieldComponent title="Autre chose?" type="textarea" />
                        <FieldComponent type="submit" wrapperStyle={{ textAlign: 'center' }} />
                    </form>
                </div>
            )}
        />
    );
};

RSVPFormContainer.propTypes = {};

export default RSVPFormContainer;
