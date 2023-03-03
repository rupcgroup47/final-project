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
                    showQuestionNumbers: 'off',
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
                                    isRequired: true,
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
                    showQuestionNumbers: 'off',
                    type: 'panel',
                    name: 'serie2',
                    title: 'מקצועיות ואיכות בעבודה',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr2',
                            title: 'סמנו את התשובה המתאימה ביותר עבורך',
                            columns: [
                                {
                                    name: 'col2',
                                    cellType: 'radiogroup',
                                    showInMultipleColumns: true,
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
                                    isRequired: true,
                                    name: 'comment',
                                    title: 'הערה מילולית',
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
                    showQuestionNumbers: 'off',
                    type: 'panel',
                    name: 'serie3',
                    title: 'יחסי עבודה , תקשורת ועבודת צוות',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr3',
                            title: 'סמנו את התשובה המתאימה ביותר עבורך',
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
                                    isRequired: true,
                                    name: 'comment',
                                    title: 'הערה מילולית',
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
                                    text: 'משמש דוגמה אישית לסובבים'
                                },
                                {
                                    value: 3,
                                    text: 'משתף פעולה עם חברי הצוות'
                                },
                                {
                                    value: 4,
                                    text: 'מקבל ביקורת בצורה פתוחה ועניינית'
                                },
                                {
                                    value: 5,
                                    text: 'משתלב חברתית ותורם לאווירה חיובית בצוות ובסביבתו'
                                }
                            ]
                        }
                    ]
                },
                {
                    showQuestionNumbers: 'off',
                    type: 'panel',
                    name: 'serie4',
                    title: 'יוזמה ואחריות',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr4',
                            title: 'סמנו את התשובה המתאימה ביותר עבורך',
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
                                    isRequired: true,
                                    name: 'comment',
                                    title: 'הערה מילולית',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                {
                                    value: 1,
                                    text: 'מגלה אחריות בתפקיד'
                                },
                                {
                                    value: 2,
                                    text: 'מוכן למאמץ והשקעה מעבר למסגרת האחריות'
                                },
                                {
                                    value: 3,
                                    text: 'מגלה גמישות ונכונות לשינויים'
                                },
                                {
                                    value: 4,
                                    text: 'משקיע בעבודה בעת עומס'
                                },
                                {
                                    value: 5,
                                    text: 'מוכן למאמץ יתר ושעות נוספות'
                                },
                                {
                                    value: 6,
                                    text: 'נוקט יוזמה לשינויים, לשיפור המערכת, לרעיונות וחדשנות'
                                },
                                {
                                    value: 7,
                                    text: 'מבצע את העבודה ביסודיות ודייקנות'
                                }
                            ]
                        }
                    ]
                },
                {
                    showQuestionNumbers: 'off',
                    type: 'panel',
                    name: 'serie3',
                    title: 'משמעת',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr3',
                            title: 'סמנו את התשובה המתאימה ביותר עבורך',
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
                                    isRequired: true,
                                    name: 'comment',
                                    title: 'הערה מילולית',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                {
                                    value: 1,
                                    text: 'אחראי, אמין וניתן לסמוך'
                                },
                                {
                                    value: 2,
                                    text: 'מקפיד על ביצוע נהלים על פי מדיניות החברה'
                                },
                                {
                                    value: 3,
                                    text: 'מקפיד על דיווח מדוייק ואמין לגורמים הרלוונטיים'
                                },
                                {
                                    value: 4,
                                    text: 'מקפיד על נוכחות מלאה, אינו מאחר'
                                },
                                {
                                    value: 5,
                                    text: 'מקפיד על הופעה מסודרת'
                                },
                                {
                                    value: 6,
                                    text: 'פועל ליישום החלטות (בהתאם לסדר העדיפויות שהוגדר על ידי המנהל'
                                },
                                {
                                    value: 7,
                                    text: 'מקפיד על קיום נהלי בטיחות בעבודה'
                                }
                            ]
                        }
                    ]
                },
                {
                    showQuestionNumbers: 'off',
                    type: 'panel',
                    name: 'serie4',
                    title: 'מיומנויות ניהול (למנהלים)',
                    elements: [
                        {
                            type: 'matrixdropdown',
                            name: 'sr4',
                            title: 'סמנו את התשובה המתאימה ביותר עבורך',
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
                                    isRequired: true,
                                    name: 'comment',
                                    title: 'הערה מילולית',
                                    cellType: 'comment'
                                }
                            ],
                            rows: [
                                {
                                    value: 1,
                                    text: 'מהווה דוגמא אישית'
                                },
                                {
                                    value: 2,
                                    text: 'יוצר הנעה ומטובציה'
                                },
                                {
                                    value: 3,
                                    text: 'מאציל סמכויות באופן אפקטיבי'
                                },
                                {
                                    value: 4,
                                    text: 'מציב יעדים ומטרות וחותר להשגתם'
                                },
                                {
                                    value: 5,
                                    text: 'מהווה סמכות מקצועית'
                                },
                                {
                                    value: 6,
                                    text: 'מתכנן מראש ומוצע לפועל את התכניות'
                                },
                                {
                                    value: 7,
                                    text: 'מטפח אווירה צוותית של שיתוף פעולה ועזרה הדדית'
                                },
                                {
                                    value: 8,
                                    text: 'מתקשר את הצרכים והרצונות של העובדים בפני הדרג המחליט'
                                },
                                {
                                    value: 9,
                                    text: 'מקבל החלטות שקולות ועניניות'
                                },
                                {
                                    value: 10,
                                    text: 'מציב סדרי עדיפויות תוך כדי ראיה מערכתית'
                                },
                                {
                                    value: 11,
                                    text: 'מטמיע את חשיבות הבטיחות בין העובדים ובכלל'
                                },
                                {
                                    value: 12,
                                    text: 'מפתח את העובדים'
                                }
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
                }
            ]
        }
    ]
};

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
