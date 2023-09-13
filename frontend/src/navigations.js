export const navigations = [
  // Home
  { label: 'Home', type: 'label' },
  { name: '대시보드', path: '/home/dashboard', icon: 'dashboard' },
  { name: '공지사항', path: '/home/announcement', icon: 'report' },
  { name: '통계', path: '/home/statistics', icon: 'poll' },

  // Data
  { label: 'Data', type: 'label' },
  { name: '데이터 카탈로그', path: '/data-catalog', icon: 'library_books' },
  {
    name: '데이터 파이프라인',
    icon: 'storage',
    children: [
      { name: '작업 관리', icon: 'play_arrow', path: '/data-pipeline/jobs' },
      { name: '신규 연동신청', icon: 'control_point', path: '/data-pipeline/new' },
      { name: '연동신청 관리', icon: 'content_paste', path: '/data-pipeline/all' }
    ]
  },
  // Platform
  { label: 'Platform', type: 'label' },
  { name: 'Jupyter Hub', path: '/platform/jupyterhub', icon: 'tv' },

  // System
  { label: 'System', type: 'label' },
  {
    name: '시스템 관리',
    icon: 'security',
    children: [
      { name: '로그', icon: 'short_text', path: '/system/log' },
      { name: '알림', icon: 'notifications_none', path: '/system/notification' }
    ]
  },
  // User
  { label: 'Settings', type: 'label' },
  {
    name: '설정',
    icon: 'settings',
    children: [
      { name: '사용자 목록', icon: 'people', path: '/settings/users' },
      { name: '권한', icon: 'vpn_key', path: '/settings/permissions' }
    ]
  },
  { label: 'DOCS', type: 'label' },
  {
    name: 'User Guide',
    icon: 'assignment',
    type: 'extLink',
    path: ''
  },
  {
    name: 'Documentation',
    icon: 'launch',
    type: 'extLink',
    path: ''
  }
];
