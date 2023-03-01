import React, { useState } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useCallback } from 'react';

const SURVEY_ID = 1;

const surveyJson = {
    pages: [
        {
            elements: [
                {
                    type: 'panel',
                    name: 'serie1',
                    title: 'שירותיות',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr1',
                            title: 'What do your feel?',
                            columns: [
                                {
                                    name: 'col1',
                                    cellType: 'radiogroup',
                                    showInMultipleColumns: true,
                                    isRequired: true,
                                    choices: [
                                        'לא עומד בציפיות',
                                        'עומד בחלק מהציפיות',
                                        'עומד כמעט בכל הציפיות',
                                        'עומד בציפיות ',
                                        'עומד בציפיות בצורה טובה מאד',
                                        'לא רלוונטי לתפקיד'
                                    ]
                                },
                                {
                                    name: 'comment',
                                    title: 'הערה מילולית',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                'Excited',
                                'Enthusiastic',
                                'Open',
                                'Physically safe',
                                'Emotionally safe',
                                'Apprehensive',
                                'Nervous',
                                'Scared'
                            ]
                        }
                    ]
                },
                {
                    type: 'panel',
                    name: 'serie2',
                    title: 'מקצועיות ואיכות בעבודה',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr2',
                            title: 'What do your feel?',
                            columns: [
                                {
                                    name: 'col2',
                                    cellType: 'radiogroup',
                                    showInMultipleColumns: true,
                                    isRequired: true,
                                    choices: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree']
                                },
                                {
                                    name: 'comment',
                                    title: 'Please comment',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                'Excited',
                                'Enthusiastic',
                                'Open',
                                'Physically safe',
                                'Emotionally safe',
                                'Apprehensive',
                                'Nervous',
                                'Scared'
                            ]
                        }
                    ]
                },
                {
                    type: 'panel',
                    name: 'serie3',
                    title: 'יחסי עבודה , תקשורת ועבודת צוות',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr3',
                            title: 'What do your feel?',
                            columns: [
                                {
                                    name: 'col3',
                                    cellType: 'radiogroup',
                                    showInMultipleColumns: true,
                                    isRequired: true,
                                    choices: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree']
                                },
                                {
                                    name: 'comment',
                                    title: 'Please comment',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                'Excited',
                                'Enthusiastic',
                                'Open',
                                'Physically safe',
                                'Emotionally safe',
                                'Apprehensive',
                                'Nervous',
                                'Scared'
                            ]
                        }
                    ]
                },
                {
                    type: 'panel',
                    name: 'serie4',
                    title: 'יוזמה ואחריות',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr4',
                            title: 'What do your feel?',
                            columns: [
                                {
                                    name: 'col4',
                                    cellType: 'radiogroup',
                                    showInMultipleColumns: true,
                                    isRequired: true,
                                    choices: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree']
                                },
                                {
                                    name: 'comment',
                                    title: 'Please comment',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                'Excited',
                                'Enthusiastic',
                                'Open',
                                'Physically safe',
                                'Emotionally safe',
                                'Apprehensive',
                                'Nervous',
                                'Scared'
                            ]
                        }
                    ]
                },
                {
                    type: 'panel',
                    name: 'serie3',
                    title: 'משמעת',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr3',
                            title: 'What do your feel?',
                            columns: [
                                {
                                    name: 'col3',
                                    cellType: 'radiogroup',
                                    showInMultipleColumns: true,
                                    isRequired: true,
                                    choices: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree']
                                },
                                {
                                    name: 'comment',
                                    title: 'Please comment',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                'Excited',
                                'Enthusiastic',
                                'Open',
                                'Physically safe',
                                'Emotionally safe',
                                'Apprehensive',
                                'Nervous',
                                'Scared'
                            ]
                        }
                    ]
                },
                {
                    type: 'panel',
                    name: 'serie4',
                    title: 'מיומנויות ניהול',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr4',
                            title: 'What do your feel?',
                            columns: [
                                {
                                    name: 'col4',
                                    cellType: 'radiogroup',
                                    showInMultipleColumns: true,
                                    isRequired: true,
                                    choices: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree']
                                },
                                {
                                    name: 'comment',
                                    title: 'Please comment',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                'Excited',
                                'Enthusiastic',
                                'Open',
                                'Physically safe',
                                'Emotionally safe',
                                'Apprehensive',
                                'Nervous',
                                'Scared'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elements: [
                {
                    type: 'panel',
                    name: 'serie5',
                    title: 'What do your feel?',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr5',
                            title: 'What do your feel?',
                            columns: [
                                {
                                    name: 'col5',
                                    cellType: 'radiogroup',
                                    showInMultipleColumns: true,
                                    isRequired: true,
                                    choices: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree']
                                },
                                {
                                    name: 'comment',
                                    title: 'Please comment',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                'Excited',
                                'Enthusiastic',
                                'Open',
                                'Physically safe',
                                'Emotionally safe',
                                'Apprehensive',
                                'Nervous',
                                'Scared'
                            ]
                        }
                    ]
                },
                {
                    type: 'panel',
                    name: 'serie6',
                    title: 'What do your feel?',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr6',
                            title: 'What do your feel?',
                            columns: [
                                {
                                    name: 'col4',
                                    cellType: 'radiogroup',
                                    showInMultipleColumns: true,
                                    isRequired: true,
                                    choices: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree']
                                },
                                {
                                    name: 'comment',
                                    title: 'Please comment',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                'Excited',
                                'Enthusiastic',
                                'Open',
                                'Physically safe',
                                'Emotionally safe',
                                'Apprehensive',
                                'Nervous',
                                'Scared'
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

function QuestionnaireForm() {
    const survey = new Model(surveyJson);
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
    survey.showProgressBar = 'top';

    return <Survey model={survey} />;
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
