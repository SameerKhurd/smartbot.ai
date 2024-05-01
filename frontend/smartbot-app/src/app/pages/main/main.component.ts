import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: {
    class: 'has-navbar-fixed-top si-layout-fixed-height',
  },
})
export class MainComponent {
  menuItems: any[] = [
    {
      title: 'NAV.OVERVIEW',
      icon: 'element-home',
      tooltip: 'NAV.OVERVIEW',
      items: [{ title: 'HOME.HEADING', link: 'home', tooltip: 'HOME.HEADING' }],
    },
    {
      title: 'NAV.DOCUMENTATION',
      icon: 'element-document',
      tooltip: 'NAV.DOCUMENTATION',
      items: [
        {
          title: 'USER_MANUAL.HEADING',
          link: 'user-manual',
          tooltip: 'USER_MANUAL.HEADING',
        },
        {
          title: 'ADMIN_MANUAL.HEADING',
          link: 'admin-manual',
          tooltip: 'ADMIN_MANUAL.HEADING',
        },
      ],
    },
  ];

  helpItem: any = {
    title: 'Help',
    icon: 'element-help',
    items: [
      { title: 'NAV.ABOUT', link: '/main/about' },
      { title: '-' },
      {
        title: 'Corporate Information',
        href: 'http://www.siemens.com/corporate-information',
        target: '_blank',
      },
    ],
  };

  accountItems: any[] = [
    {
      title: 'NAV.LANGUAGE',
      icon: 'element-language',
    },
    { title: 'NAV.PROFILE', icon: 'element-account' },
    { title: '-' },
    { title: 'NAV.LOGOUT', icon: 'element-logout', link: '/landing' },
  ];

  constructor() {
    //this.toggleTheme();
  }
}
