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
      { text: 'GitHub', link: 'https://github.com/johannes-z/office-ui-fabric-vue' },
    ],
    sidebar: {
      '/components/': [
        {
          title: 'Basic inputs',
          children: [
            'button',
            'checkbox',
          ]
        },
        {
          title: 'Navigation',
          children: [
          ]
        },
        {
          title: 'Content',
          children: [
          ]
        },
        {
          title: 'Pickers',
          children: [
          ]
        },
        {
          title: 'Progress & Validation',
          children: [
          ]
        },
        {
          title: 'Surfaces',
          children: [
          ]
        },
        {
          title: 'Utilities',
          children: [
          ]
        },
      ]
    }
  }
}