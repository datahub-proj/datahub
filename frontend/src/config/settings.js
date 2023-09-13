import { themes } from 'theme/initThemes';

export const AppSettings = {
  activeLayout: 'layout', // layout1, layout2
  activeTheme: 'blue', // View all valid theme colors inside MatxTheme/themeColors.js
  perfectScrollbar: false,
  themes: themes,
  layoutSettings: {
    leftSidebar: {
      show: true,
      mode: 'full', // full, close, compact, mobile,
      theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
      bgImgURL: '/assets/images/sidebar/sidebar-bg-dark.jpg'
    },
    topbar: {
      show: true,
      fixed: true,
      theme: 'whiteBlue' // View all valid theme colors inside MatxTheme/themeColors.js
    }
  },
  footer: {
    show: true,
    fixed: false,
    theme: 'slateDark1' // View all valid theme colors inside MatxTheme/themeColors.js
  }
};
