export const navigationItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About Us',
    href: '/about',
    subItems: [
      { label: 'Mission & Vision', href: '/about/mission' },
      { label: 'Team & Leadership', href: '/about/team' },
      { label: 'Partners & Collaborations', href: '/about/partners' }
    ]
  },
  {
    label: 'Features',
    href: '/features',
    subItems: [
      { label: 'Asset Tracking', href: '/features/asset-tracking' },
      { label: 'Fraud Detection', href: '/features/fraud-detection' },
      { label: 'Network Mapping', href: '/features/network-mapping' },
      { label: 'AI-Powered Auditing', href: '/features/ai-auditing' },
      { label: 'Recovery Mechanisms', href: '/features/recovery' }
    ]
  },
  {
    label: 'Whistleblower Portal',
    href: '/whistleblower',
    subItems: [
      { label: 'Submit Report', href: '/whistleblower/submit' },
      { label: 'Track Report', href: '/whistleblower/track' },
      { label: 'Guidelines & Confidentiality', href: '/whistleblower/guidelines' }
    ]
  },
  {
    label: 'Analytics Dashboard',
    href: '/analytics',
    subItems: [
      { label: 'Real-Time Analytics', href: '/analytics/real-time' },
      { label: 'Fraud Trends', href: '/analytics/trends' },
      { label: 'Recovery Reports', href: '/analytics/recovery' },
      { label: 'Government Agency Stats', href: '/analytics/agency-stats' }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    subItems: [
      { label: 'Blog & Articles', href: '/resources/blog' },
      { label: 'Research Papers', href: '/resources/research' },
      { label: 'Case Studies', href: '/resources/cases' },
      { label: 'FAQs', href: '/resources/faqs' }
    ]
  },
  {
    label: 'Contact Us',
    href: '/contact',
    subItems: [
      { label: 'General Inquiries', href: '/contact/general' },
      { label: 'Support', href: '/contact/support' },
      { label: 'Media & Press', href: '/contact/media' }
    ]
  }
] as const;