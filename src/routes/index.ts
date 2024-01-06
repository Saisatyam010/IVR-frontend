import { lazy } from 'react';
import ManageDID from '../pages/ManageDID';




const Campaign = lazy(() => import('../pages/ManageCampaigns/Campaign'));
const BlockCallerID = lazy(() => import('../pages/BlockCallerID'));
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
    path: '/manage-campaign/:campaignId',
    title: 'Campaign',
    component: Campaign
  },
  {
    path: '/manage-campaign',
    title: 'Manage Campaign',
    component: ManageCampaigns
  },
 
  {
    path: '/block-callerid',
    title: 'Block CallerId',
    component: BlockCallerID
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
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
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
];

const routes = [...coreRoutes];
export default routes;
