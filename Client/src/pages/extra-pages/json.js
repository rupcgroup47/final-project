export const json = {
    // title: 'טופס הערכת עובדים',
    // // description: 'Your opinion matters to us!',
    // logoPosition: 'right',
    // logoHeight: '100px',

    elements: [
        {
            type: 'matrix',
            name: 'quality',
            title: 'To what extent do you agree with the following statements?',
            columns: null,
            columns: [
                {
                    value: 1,
                    text: '1'
                },
                {
                    value: 2,
                    text: '2'
                },
                {
                    value: 3,
                    text: '3'
                },
                {
                    value: 4,
                    text: '4'
                },
                {
                    value: 5,
                    text: '5'
                }
            ],
            rows: [
                {
                    text: 'The product meets my needs',
                    value: 'needs-are-met'
                },
                {
                    text: 'Overall, I am satisfied with the product',
                    value: 'satisfaction'
                },
                {
                    text: 'Some product features require improvement',
                    value: 'improvements-required'
                }
            ],
            columnMinWidth: '40px',
            rowTitleWidth: '300px'
        },
        {
            type: 'rating',
            name: 'buying-experience',
            title: 'How would you rate the buying experience?',
            minRateDescription: 'Hated it!',
            maxRateDescription: 'Loved it!'
        },
        {
            type: 'comment',
            name: 'low-score-reason',
            visibleIf: '{buying-experience} <= 3',
            titleLocation: 'hidden',
            hideNumber: true,
            placeholder: "What's the main reason for your score?"
        },
        {
            type: 'boolean',
            name: 'have-used-similar-products',
            title: 'Have you used similar products before?'
        },
        {
            type: 'text',
            name: 'similar-products',
            visibleIf: '{have-used-similar-products} = true',
            titleLocation: 'hidden',
            hideNumber: true,
            placeholder: 'Please specify the similar products...'
        },
        {
            type: 'ranking',
            name: 'product-aspects-ranked',
            title: 'These are some important aspects of the product. Rank them in terms of your priority.',
            description: 'From the highest (the most important) to the lowest (the least important).',
            choices: ['Technical support', 'Price', 'Delivery option', 'Quality', 'Ease of use', 'Product warranties']
        },
        {
            type: 'text',
            name: 'missing-feature',
            title: "What's the ONE thing our product is missing?"
        },
        {
            type: 'dropdown',
            name: 'price-accuracy',
            title: 'Do you feel our product is worth the cost?',
            choices: [
                {
                    value: 5,
                    text: 'Definitely'
                },
                {
                    value: 4,
                    text: 'Probably'
                },
                {
                    value: 3,
                    text: 'Maybe'
                },
                {
                    value: 2,
                    text: 'Probably not'
                },
                {
                    value: 1,
                    text: 'Definitely not'
                }
            ],
            allowClear: false
        },
        {
            type: 'boolean',
            name: 'have-additional-thoughts',
            title: "Is there anything you'd like to add?"
        },
        {
            type: 'comment',
            name: 'additional-thoughts',
            visibleIf: '{have-additional-thoughts} = true',
            titleLocation: 'hidden',
            placeholder: 'Please share your thoughts...'
        }
    ],
    showProgressBar: 'top',
    progressBarType: 'questions',
    widthMode: 'static',
    width: '864px'
};
