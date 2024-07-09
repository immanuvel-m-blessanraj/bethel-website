// assets
import {   PhotoOutlined } from '@material-ui/icons';
import {   IconHeartHandshake, IconHome, IconMail, IconUsersGroup } from '@tabler/icons-react';
// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = { IconHome, IconTypography, IconPalette, IconShadow, IconWindmill, IconUsersGroup,IconHeartHandshake,PhotoOutlined};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Home',
      type: 'item',
      url: '/home',
      icon: icons.IconHome,
      breadcrumbs: false
    },
    {
      id: 'who-we-are',
      title: 'Who We Are',
      type: 'item',
      url: '/who-we-are',
      icon: icons.IconUsersGroup,
      breadcrumbs: false
    },
    {
      id: 'what-we-believe',
      title: 'What We Believe',
      type: 'item',
      url: '/what-we-believe',
      icon: IconHeartHandshake,
      breadcrumbs: false
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      type: 'item',
      url: '/contact-us',
      icon: IconMail,
      breadcrumbs: false
    },
    {
      id: 'gallery',
      title: 'Gallery',
      type: 'item',
      url: '/gallery',
      icon: icons.PhotoOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
