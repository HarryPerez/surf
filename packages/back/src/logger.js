import pino from 'pino';
import prettifier from 'pino-pretty';

const { NODE_ENV } = process.env;

const log = pino({
  prettyPrint: {
    levelFirst: true,
    translateTime: true,
  },
  prettifier,
});

const error = () => {};
const mockLog = () => {};

export default NODE_ENV !== 'testing' ? log : ({ info: mockLog, error });
