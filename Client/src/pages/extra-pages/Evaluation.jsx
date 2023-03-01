import React from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { json } from './json';
import 'survey-core/defaultV2.min.css';

export default function Evaluation() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return <Survey model={survey} />;
}
