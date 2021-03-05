import * as Sentry from '@sentry/node';

export default {
  dsn:
    'https://667852bd677248f69078df64dc899890@o543567.ingest.sentry.io/5664400',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
};
