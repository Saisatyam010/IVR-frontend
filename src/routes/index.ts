
import { lazy } from 'react';
import ManageDID from '../pages/ManageDID';

import SignIn from '../pages/Authentication/SignIn';
import ECommerce from '../pages/Dashboard/Dashboard';
import Addbuyer from '../pages/Buyers/Addbuyer';
import CallRecording from '../pages/CallRecording';





const ManageBuyer = lazy(() => import('../pages/Buyers/ManageBuyer'));
const Addbuyer = lazy(() => import('../pages/Buyers/Addbuyer'));
const Editbuyer = lazy(() => import('../pages/Buyers/Editbuyer'));

const BlockCallerID = lazy(() => import('../pages/BlockCallerID'));
const Livecalls = lazy(() => import('../pages/Livecalls'));
const Callhistory = lazy(() => import('../pages/Callhistory'));
const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const ManageCampaigns=lazy(()=>import('../pages/ManageCampaigns/ManagCampaigns'))
const coreRoutes = [
 
  {
    path:'/dashboard',
    title:'Dashbaord',
    component:ECommerce
  },
  {
    path: '/manage-buyer',
    title: 'Manage Buyer',
    component: ManageBuyer
  },
  {
    path: '/add-buyer',
    title: 'Add Buyer',
    component: Addbuyer
  },
  {
    path: '/edit-buyer/:id',
    title: 'Edit Buyer',
    component: Editbuyer
  },
 
  {
    path: '/block-callerid',
    title: 'Block CallerId',
    component: BlockCallerID
  },
  {
    path: '/addbuyer',
    title: 'Add Buyer',
    component: Addbuyer
  },
  {
    path: '/callRecorder',
    title: 'Call Recorder',
    component: CallRecording
  },
  {
    path: '/manage-did',
    title: 'Manage DID',
    component: ManageDID
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/callhistory',
    title: 'Profile',
    component: Callhistory,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/livecalls',
    title: 'Forms Elements',
    component: Livecalls,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  {
    path:'/authentication',
    component:SignIn,
  }
];

const routes = [...coreRoutes];
export default routes;
