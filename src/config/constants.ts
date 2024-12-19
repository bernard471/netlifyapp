export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'ak', name: 'Akan' },
  { code: 'ee', name: 'Ewe' },
  { code: 'ga', name: 'Ga' }
] as const;

export const FILE_UPLOAD_CONFIG = {
  maxSizeMB: 10,
  allowedTypes: ['application/pdf', 'application/msword', 'image/jpeg', 'image/png'],
  maxFiles: 5
} as const;

export const API_CONFIG = {
  baseUrl: '/api',
  timeout: 30000,
  retryAttempts: 3
} as const;

export const THEME_COLORS = {
  primary: '#1a4d2e',
  secondary: '#2d694d',
  accent: '#4caf50'
} as const;