module.exports = {
  title: 'Office UI Fabric Vue',
  description: 'The front-end framework for building experiences that fit seamlessly into Office and Office 365 - now for Vue.',

  head: [
    ['link', { rel: 'stylesheet', href: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/9.6.0/css/fabric.min.css' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      {
        text: 'Official Links',
        items: [
          { text: 'Office UI Fabric', link: 'https://developer.microsoft.com/en-us/fabric' },
          { text: 'Office UI Fabric Core - GitHub', link: 'https://github.com/OfficeDev/office-ui-fabric-core' },
          { text: 'Office UI Fabric React - GitHub', link: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/johannes-z/office-ui-fabric-vue' },
    ],
    sidebar: {
      '/components/': [
        {
          title: 'Basic inputs',
          collapsable: false,
          children: [
            'basic/button',
            'basic/checkbox',
            'basic/label',
            'basic/link',
            'basic/slider',
            'basic/spinbutton',
            'basic/textfield',
            'basic/toggle',
          ]
        },
        {
          title: 'Navigation',
          collapsable: false,
          children: [
            'navigation/searchbox',
          ]
        },
        {
          title: 'Content',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'Pickers',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'Progress & Validation',
          collapsable: false,
          children: [
            'progress/progressindicator',
            'progress/spinner',
          ]
        },
        {
          title: 'Surfaces',
          collapsable: false,
          children: [
            'surfaces/layer',
            'surfaces/panel',
          ]
        },
        {
          title: 'Utilities',
          collapsable: false,
          children: [
          ]
        },
      ]
    }
  }
}