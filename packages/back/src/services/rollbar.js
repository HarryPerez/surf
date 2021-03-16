import Rollbar from 'rollbar';

const rollbar = process.env.ROLLBAR_TOKEN && new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

export default rollbar;
