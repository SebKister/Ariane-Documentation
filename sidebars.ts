import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'Starter',
    'Installation',
    'Concepts',
    'Interface-Overview',
    {
      type: 'category',
      label: 'Creating a Project',
      link: { type: 'doc', id: 'Data-Wizard' },
      items: [
        'Project-Setup',
        'Start-Point',
        'Section-Description',
        'Entering-Data',
        'Unit-Conversions',
        'Device-Import',
      ],
    },
    {
      type: 'category',
      label: '2D Map',
      link: { type: 'doc', id: 'Map-Overview' },
      items: [
        'Map-Navigation',
        'Station-Actions',
        'Display-Settings',
        'Map-Search',
        'Data-Errors',
        'Map-Output',
      ],
    },
    'Loop-Closure',
    {
      type: 'category',
      label: 'Cartography',
      link: { type: 'doc', id: 'Carto-Mode' },
      items: [
        'Layers',
        'Drawing-Tools',
        'Styles',
        'Overlays',
        'Page-Setup',
      ],
    },
    'Map-3D',
    {
      type: 'category',
      label: 'Profiles',
      link: { type: 'doc', id: 'Profiles' },
      items: ['Complex-Profiles'],
    },
    'Data-Table',
    'Data-Tools',
    'Statistics-And-Report',
    'Project-Library',
    'Aggregator',
    'Data-Mixer',
    'Linked-Video',
    'Import-Export',
    'Plugins-And-Languages',
    'Options',
    'Shortcuts',
    'Files-And-Command-Line',
    'Licensing',
    'Troubleshooting',
  ],
};

export default sidebars;
