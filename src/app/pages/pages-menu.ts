import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Core Panels',
    icon: 'home-outline',
    link: '/hub/home',
    home: true,
  },
  {
    title: 'Core Stats',
    icon: 'activity-outline',
    link: '/hub/stats',
  },
  {
    title: 'Forms & Files',
    group: true,
  },
  {
    title: 'Data Entry',
    icon: 'calendar-outline',
    expanded: true,
    children: [
      {
        title: 'Positives',
        link: '/hub/secured/cases'
      },
      {
        title: 'Case Tracing',
        link: '/hub/secured/cases/tracing'
      },
      {
        title: 'Form A',
        link: '/hub/secured/forms/form-a',
      },
      {
        title: 'Form B1',
        link: '/hub/secured/forms/form-b1',
      },
      {
        title: 'Form B2',
        link: '/hub/secured/forms/form-b2',
      },
      // {
      //   title: 'Form X',
      //   link: '/hub/secured/forms/form-x',
      // },
      {
        title: 'Point of Entry',
        link: '/hub/secured/forms/point-of-entry',
      },
      {
        title: 'Quarantine',
        link: '/hub/secured/forms/quarantine-facility',
      },
      {
        title: 'RDT Lab',
        link: '/hub/secured/forms/rdt-lab',
      },
      {
        title: 'PCR Lab',
        link: '/hub/secured/forms/pcr-lab',
      },
      {
        title: 'Isolation',
        link: '/hub/secured/forms/isolation',
      },
      {
        title: 'Hospital',
        link: '/hub/secured/forms/hospital',
      },
      {
        title: 'Municipality',
        link: '/hub/secured/forms/municipality',
      },
    ],
  },
  {
    title: 'CSV Upload',
    icon: 'bar-chart-2-outline',
    children: [
      {
        title: 'PCR Tests',
        link: '/hub/secured/tables/pcr',
      },
      {
        title: 'RDT Tests',
        link: '/hub/secured/tables/rdt',
      },
      {
        title: 'Returnees',
        link: '/hub/secured/tables/returnee',
      },
    ],
  }
];
