import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Forms & Files',
    icon: 'home-outline',
    link: '/hub/cases',
    group: true,
  },
  {
    title: 'Data Entry',
    icon: 'calendar-outline',
    expanded: true,
    children: [
      {
        title: 'Positives',
        link: '/hub/cases',
        home: true
      },
      {
        title: 'Case Tracing',
        link: '/hub/cases/tracing'
      },
      {
        title: 'Form A',
        link: '/hub/forms/form-a',
      },
      {
        title: 'Form B1',
        link: '/hub/forms/form-b1',
      },
      {
        title: 'Form B2',
        link: '/hub/forms/form-b2',
      },
      // {
      //   title: 'Form X',
      //   link: '/hub/forms/form-x',
      // },
      {
        title: 'Point of Entry',
        link: '/hub/forms/point-of-entry',
      },
      {
        title: 'Quarantine',
        link: '/hub/forms/quarantine-facility',
      },
      {
        title: 'RDT Lab',
        link: '/hub/forms/rdt-lab',
      },
      {
        title: 'PCR Lab',
        link: '/hub/forms/pcr-lab',
      },
      {
        title: 'Isolation',
        link: '/hub/forms/isolation',
      },
      {
        title: 'Hospital',
        link: '/hub/forms/hospital',
      },
      {
        title: 'Municipality',
        link: '/hub/forms/municipality',
      },
    ],
  },
  {
    title: 'CSV Upload',
    icon: 'bar-chart-2-outline',
    children: [
      {
        title: 'PCR Tests',
        link: '/hub/tables/pcr',
      },
      {
        title: 'RDT Tests',
        link: '/hub/tables/rdt',
      },
      {
        title: 'Returnees',
        link: '/hub/tables/returnee',
      },
    ],
  }
];
