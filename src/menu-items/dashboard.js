// assets
import { IconDashboard } from '@tabler/icons-react';
// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconTypography, IconPalette, IconShadow, IconWindmill };

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
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'who-we-are',
      title: 'Who We Are',
      type: 'item',
      url: '/who-we-are',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'what-we-believe',
      title: 'What We Believe',
      type: 'item',
      url: '/what-we-believe',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      type: 'item',
      url: '/contact-us',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'gallery',
      title: 'Gallery',
      type: 'item',
      url: '/gallery',
      icon: icons.IconShadow,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
