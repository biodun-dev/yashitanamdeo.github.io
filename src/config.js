module.exports = {
  siteTitle: 'Abiodun Abdullahi',
  siteDescription: '',
  siteKeywords: '',
  siteUrl: 'https://biodun-portfolio.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Abiodun Abdullahi',
  location: 'Lagos,Nigeria',
  email: 'biodundev@gmail.com',
  github: 'https://github.com/biodun-dev',
  twitterHandle: 'https://twitter.com/biodun_dev',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/biodun-dev',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/toheeb-abdullahi-9b5682300',
    },
    {
      name: 'Codepen',
      url: '',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/biodun_1404',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/biodun_dev',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
