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
                            title: 'סמנו את התשובה המתאימה ביותר עבורך',
                            columns: [
                                {
                                    name: 'col1',
                                    cellType: 'radiogroup',
                                    showInMultipleColumns: true,
                                    isRequired: true,
                                    choices: [
                                        {
                                            value: 0,
                                            text: 'לא רלוונטי לתפקיד'
                                        },
                                        {
                                            value: 1,
                                            text: 'לא עומד בציפיות'
                                        },
                                        {
                                            value: 2,
                                            text: 'עומד בחלק בציפיות'
                                        },
                                        {
                                            value: 3,
                                            text: 'עומד כמעט בכל הציפיות'
                                        },
                                        {
                                            value: 4,
                                            text: 'עומד בציפיות'
                                        },
                                        {
                                            value: 5,
                                            text: 'עומד בציפיות בצורה טובה מאד'
                                        }
                                    ]
                                },
                                {
                                    name: 'comment',
                                    title: 'הערה מילולית',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                {
                                    value: 1,
                                    text: 'מעניק שירות אדיב מנומס וסבלני'
                                },
                                {
                                    value: 2,
                                    text: 'פועל למילוי צרכי הלקוח ושביעות רצונו'
                                },
                                {
                                    value: 3,
                                    text: 'מגיב במהירותהנדרשת לצרכי הלקוחות'
                                },
                                {
                                    value: 4,
                                    text: 'מגלה גמישות ונכונות לשינוי'
                                }
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
                                    choices: [
                                        {
                                            value: 0,
                                            text: 'לא רלוונטי לתפקיד'
                                        },
                                        {
                                            value: 1,
                                            text: 'לא עומד בציפיות'
                                        },
                                        {
                                            value: 2,
                                            text: 'עומד בחלק בציפיות'
                                        },
                                        {
                                            value: 3,
                                            text: 'עומד כמעט בכל הציפיות'
                                        },
                                        {
                                            value: 4,
                                            text: 'עומד בציפיות'
                                        },
                                        {
                                            value: 5,
                                            text: 'עומד בציפיות בצורה טובה מאד'
                                        }
                                    ]
                                },
                                {
                                    name: 'comment',
                                    title: 'Please comment',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                {
                                    value: 1,
                                    text: 'מגלה שליטה מקצועית ומיומנות בתחום עיסוקי'
                                },
                                {
                                    value: 2,
                                    text: 'מגלה יכולת עבודה עצמאית'
                                },
                                {
                                    value: 3,
                                    text: 'מקפיד לעמוד בלוחות הזמנים'
                                },
                                {
                                    value: 4,
                                    text: 'מנצל ביעילות את הזמן ביחס למשימות המוטלות'
                                },
                                {
                                    value: 5,
                                    text: 'פועלת כמיטב היכולת לשם עמידה במשימות ויעדים שהוצבו'
                                },
                                {
                                    value: 6,
                                    text: 'מקפיד על ביצוע איכותי של העבודה'
                                }
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
                                    choices: [
                                        {
                                            value: 0,
                                            text: 'לא רלוונטי לתפקיד'
                                        },
                                        {
                                            value: 1,
                                            text: 'לא עומד בציפיות'
                                        },
                                        {
                                            value: 2,
                                            text: 'עומד בחלק בציפיות'
                                        },
                                        {
                                            value: 3,
                                            text: 'עומד כמעט בכל הציפיות'
                                        },
                                        {
                                            value: 4,
                                            text: 'עומד בציפיות'
                                        },
                                        {
                                            value: 5,
                                            text: 'עומד בציפיות בצורה טובה מאד'
                                        }
                                    ]
                                },
                                {
                                    name: 'comment',
                                    title: 'Please comment',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                {
                                    value: 1,
                                    text: 'נוהג בכבוד כלפי הממונים, החברים והכפופים'
                                },
                                {
                                    value: 2,
                                    text: 'מגלה יכולת עבודה עצמאית'
                                },
                                {
                                    value: 3,
                                    text: 'מקפיד לעמוד בלוחות הזמנים'
                                },
                                {
                                    value: 4,
                                    text: 'מנצל ביעילות את הזמן ביחס למשימות המוטלות'
                                },
                                {
                                    value: 5,
                                    text: 'פועלת כמיטב היכולת לשם עמידה במשימות ויעדים שהוצבו'
                                }
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
                                    choices: [
                                        {
                                            value: 0,
                                            text: 'לא רלוונטי לתפקיד'
                                        },
                                        {
                                            value: 1,
                                            text: 'לא עומד בציפיות'
                                        },
                                        {
                                            value: 2,
                                            text: 'עומד בחלק בציפיות'
                                        },
                                        {
                                            value: 3,
                                            text: 'עומד כמעט בכל הציפיות'
                                        },
                                        {
                                            value: 4,
                                            text: 'עומד בציפיות'
                                        },
                                        {
                                            value: 5,
                                            text: 'עומד בציפיות בצורה טובה מאד'
                                        }
                                    ]
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
                                    choices: [
                                        {
                                            value: 0,
                                            text: 'לא רלוונטי לתפקיד'
                                        },
                                        {
                                            value: 1,
                                            text: 'לא עומד בציפיות'
                                        },
                                        {
                                            value: 2,
                                            text: 'עומד בחלק בציפיות'
                                        },
                                        {
                                            value: 3,
                                            text: 'עומד כמעט בכל הציפיות'
                                        },
                                        {
                                            value: 4,
                                            text: 'עומד בציפיות'
                                        },
                                        {
                                            value: 5,
                                            text: 'עומד בציפיות בצורה טובה מאד'
                                        }
                                    ]
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
                                    choices: [
                                        {
                                            value: 0,
                                            text: 'לא רלוונטי לתפקיד'
                                        },
                                        {
                                            value: 1,
                                            text: 'לא עומד בציפיות'
                                        },
                                        {
                                            value: 2,
                                            text: 'עומד בחלק בציפיות'
                                        },
                                        {
                                            value: 3,
                                            text: 'עומד כמעט בכל הציפיות'
                                        },
                                        {
                                            value: 4,
                                            text: 'עומד בציפיות'
                                        },
                                        {
                                            value: 5,
                                            text: 'עומד בציפיות בצורה טובה מאד'
                                        }
                                    ]
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
    // survey.showProgressBar = 'top';

    return (
        <Survey
            model={survey}
            align="right"
            sx={{
                direction: 'rtl !importent'
            }}
        />
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
