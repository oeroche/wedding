import React from 'react';
import { action } from '@storybook/addon-actions';
import TimelineComponent from '../src/Components/TimelineComponent';

export default {
    title: 'Timeline',
};

const data = [
    {
        day: 'Vendredi 4 Septembre - la célébration à la mairie',
        hours: [
            {
                hour: '14h - Rendez vous à la mairiee de chamalière',
                content: <div>coucou</div>,
            },
        ],
    },
    {
        day: 'Samedi 5 Septembre - la cérémonie laïque',
        hours: [
            {
                hour: '14h - Rendez vous à la mairiee de chamalière',
                content: <div>coucou</div>,
            },
        ],
    },
    {
        day: 'Dimanche 6 Septembre - le brunch',
        hours: [
            {t
                hour: '14h - Rendez vous à la mairiee de chamalière',
                content: <div>coucou</div>,
            },
        ],
    },
];

export const text = () => <TimelineComponent data={data} />;

export const emoji = () => <TimelineComponent />;
