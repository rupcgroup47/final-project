import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const DepartmentPage = Loadable(lazy(() => import('pages/extra-pages/Departments')));
const EvaluationPage = Loadable(lazy(() => import('pages/extra-pages/Evaluation')));
const UsersPage = Loadable(lazy(() => import('pages/extra-pages/Users')));
const RegisterPage = Loadable(lazy(() => import('pages/extra-pages/Register')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'evaluation-page',
            element: <EvaluationPage />
        },
        {
            path: 'users-page',
            element: <UsersPage />
        },
        {
            path: 'department-page',
            element: <DepartmentPage />
        },
        {
            path: 'department-page',
            element: <DepartmentPage />
        },
        {
            path: 'register-page',
            element: <RegisterPage />
        }
    ]
};

export default MainRoutes;
