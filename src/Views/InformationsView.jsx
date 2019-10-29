import React, { Component } from 'react';
import { RED } from '../@style/colors';
import H3 from '../Components/H3';
import TimelineComponent from '../Components/TimelineComponent';
import FadeIn from '../Components/Fadein';

const iframe = {
    __html:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.78775732402!2d3.214741215562269!3d46.25444698838579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f0d66c700e3709%3A0x90c466b09e88e766!2s9%20Chemin%20de%20la%20Rivi%C3%A8re%2C%2003140%20Chareil-Cintrat!5e0!3m2!1sfr!2sfr!4v1570099782103!5m2!1sfr!2sfr" style="width:350px; max-width:100%; height:350px" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
};

const iframeMairie = {
    __html:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3684.7593865568283!2d3.066418109070036!3d45.773923478747186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd42584414651089a!2sMairie%20de%20Chamali%C3%A8res!5e0!3m2!1sfr!2sfr!4v1570464470860!5m2!1sfr!2sfr" style="width:350px; max-width:100%; height:350px"  frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
};

const iframeFondArbre = {
    __html:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11132.789213002181!2d2.992992238261932!3d45.76723598407769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f710bdfdebeab5%3A0xa093cb26a5276b0!2sLa%20Font%20de%20l&#39;Arbre%2C%2063870%20Orcines!5e0!3m2!1sfr!2sfr!4v1571746719296!5m2!1sfr!2sfr" style="width:350px; max-width:100%; height:350px" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
};

const data = [
    {
        day: 'Vendredi 4 Septembre - la célébration à la mairie',
        hours: [
            {
                hour: '14h - Rendez vous à la mairie de Chamalière',
                content: (
                    <div>
                        <img
                            src="http://loloieg.free.fr/mariage/img/mairie.jpg"
                            alt=""
                            style={{
                                margin: 'auto',
                                maxWidth: '100%',
                                maxHeight: 350,
                                width: 350,
                            }}
                        />
                        <div dangerouslySetInnerHTML={iframeMairie} style={{ display: 'inline-block', borderRadius: 100 }} />
                        <br />
                        <br />
                        <div>
                            La cérémonie civile aura lieu à la mairie de Chamalière
                            <br />
                            <strong>Chemin de la Rivière, 03140 Chareil-Cintrat</strong>
                        </div>
                        <br />
                    </div>
                ),
            },
            {
                hour: '16h - Pot des mariés',
                content: (
                    <div>
                        <div dangerouslySetInnerHTML={iframeFondArbre} style={{ display: 'inline-block', borderRadius: 100 }} />
                        <br />
                        <br />
                        <div>
                            Un apéritif se tiendra à la Font de L'Arbre pour célébrer l'union civile.
                            <br />
                            <strong>Chemin de la Rivière, 03140 Chareil-Cintrat</strong>
                        </div>
                        <br />
                    </div>
                ),
            },
        ],
    },
    {
        day: 'Samedi 5 Septembre - la cérémonie laïque',
        hours: [
            {
                hour: '14h - La cérémonie laïque',
                content: (
                    <div>
                        <div>La cérémonire laïque se tiendra au Chateau de La Rivière</div>
                        <h3> 🚙 Comment s'y rendre ?</h3>
                        <h4>Au départ de Paris</h4>
                        <span>Départ le jour même 8h49 de la gare de Paris Bercy, arrivée à 12h01</span>
                        <br />
                        <span>Des navettes vous emmèneront sur le lieu à votre arrivée à la gare.</span>
                        <br />
                        <h4>Au départ de Clermont-Ferrand</h4>
                        <span>Le lieu est situé à 1h de route de clermont ferrand</span>
                    </div>
                ),
            },
            {
                hour: "16h - Vin d'honneur",
            },
            {
                hour: '19h - Dîner et soirée',
                content: (
                    <div>
                        <h3>🛏 Où Dormir ?</h3>
                        <span>
                            Des hotels et gites sont disponibles dans la région. Nous vous conseillons de réserver à
                            <strong> l'hôtel Ibis de Saint-Pourçain-sur-Sioule </strong>
                            .
                            <br />
                            <br />
                            Des
                            <strong> navettes </strong>
                            circuleront de 00h à 5h00 entre le lieu et Saint-Pourçain.
                        </span>
                    </div>
                ),
            },
        ],
    },
    {
        day: 'Dimanche 6 Septembre - le brunch',
        hours: [
            {
                hour: '10h - Brunch',
                content: (
                    <div>
                        <span>Nous prolongerons les festivités le lendemain de la cérémonie. Ce sera l'occasion de profiter un peu plus du lieu autour d'un brunch convivial.</span>
                        <br />
                        <h3>Pensez à emmener vos maillots de bains! 👙</h3>
                    </div>
                ),
            },
        ],
    },
];

function InformationView() {
    return (
        <FadeIn>
            <h1>Le programme</h1>
            <div style={{ marginBottom: 300 }}>
                <TimelineComponent data={data} />
            </div>
        </FadeIn>
    );
}

export default InformationView;
