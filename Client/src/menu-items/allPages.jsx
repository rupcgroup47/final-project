// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const allPages = {
    id: 'allPages',
    title: '',
    type: 'group',
    children: [
        {
            id: 'evaluation-page',
            title: 'הערכות',
            type: 'item',
            url: '/evaluation-page',
            icon: icons.ChromeOutlined
        },
        {
            id: 'users-page',
            title: 'משתמשים',
            type: 'item',
            url: '/users-page',
            icon: icons.ChromeOutlined
        },
        {
            id: 'department-page',
            title: 'מחלקות',
            type: 'item',
            url: '/department-page',
            icon: icons.ChromeOutlined
        },
        {
            id: 'register-page',
            title: 'הרשמה',
            type: 'item',
            url: '/register-page',
            icon: icons.ChromeOutlined
        }
    ]
};

export default allPages;
