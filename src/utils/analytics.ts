export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Implementation for analytics tracking
  console.log(`Event tracked: ${eventName}`, properties);
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', { page: pageName });
};

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', { form: formName, success });
};