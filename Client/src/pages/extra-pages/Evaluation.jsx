import React, { useState } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useCallback } from 'react';
import { Panel, PanelGroup, Placeholder } from 'rsuite';
import { surveyJson } from './/jsonServey';

function QuestionnaireForm() {
    const survey = new Model(surveyJson);
    const [allPanels, setPanels] = useState();
    // Add a title to the GitHub question
    // const github = survey.getQuestionByName('GitHub');
    // if (github) {
    //     github.title = 'GitHub username:';
    // }
    // Configure the Contacts panel
    // const panel = survey.getPanelByName('serie1');
    const panels = survey.getAllPanels();
    if (panels) {
        // Collapse the panels
        panels.map((panel) => {
            panel.state = 'collapsed';
        });

        // // Add a Telegram question to the panel
        // const telegram = panel.addNewQuestion('text', 'Telegram');
        // telegram.title = 'Telegram:';
    }
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    // survey.showProgressBar = 'top';

    return (
        <Survey
            model={survey}
            align="right"
            sx={{
                direction: 'rtl'
            }}
        />
        // <PanelGroup accordion defaultActiveKey={1} bordered>
        //     <Panel header="Panel 1" eventKey={1} id="panel1">
        //         <Placeholder.Paragraph />
        //     </Panel>
        //     <Panel header="Panel 2" eventKey={2} id="panel2">
        //         <Placeholder.Paragraph />
        //     </Panel>
        //     <Panel header="Panel 3" eventKey={3} id="panel3">
        //         <Placeholder.Paragraph />
        //     </Panel>
        // </PanelGroup>
    );
}

// function saveSurveyResults(url, json) {
//     const request = new XMLHttpRequest();
//     request.open('POST', url);
//     request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//     request.addEventListener('load', () => {
//         // Handle 'load'
//     });
//     request.addEventListener('error', () => {
//         // Handle 'error'
//     });
//     request.send(JSON.stringify(json));
// }
export default QuestionnaireForm;
