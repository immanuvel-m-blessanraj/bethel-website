import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// Home page routing
const HomePage = Loadable(lazy(() => import('views/home-page')));

// Who We Are page routing
const WhoWeArePage = Loadable(lazy(() => import('views/who-we-are')));

// What We Believing Page
const WhatWeBelievePage = Loadable(lazy(() => import('views/what-we-beliieve')));

// Contact Us Page
const ContactUsPage = Loadable(lazy(() => import('views/contact-us')));

// Gallery Page
const GalleryPage = Loadable(lazy(() => import('views/gallery')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    // {
    //   path: 'home',
    //   element: <DashboardDefault />
    // },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'home',
      element: <HomePage />
    },
    {
      path: 'who-we-are',
      element: <WhoWeArePage />
    },
    {
      path: 'what-we-believe',
      element: <WhatWeBelievePage />
    },
    {
      path: 'contact-us',
      element: <ContactUsPage />
    },
    {
      path: 'gallery',
      element: <GalleryPage />
    }
  ]
};

export default MainRoutes;
