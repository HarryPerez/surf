/* eslint-disable import/prefer-default-export */
import path from 'path';

import { sendEmail } from '../services/mailer.js';
import { renderFile } from '../helpers/ejs.js';

export const forgotPasswordEmail = async (to, { resetLink }) => {
  const html = await renderFile(path.resolve('src/mailers/templates/forgotPassword.ejs'), { to, resetLink, bucketUrl: process.env.BUCKET_URL });
  return sendEmail({
    to,
    subject: 'Bootstrap: cambio de contraseña',
    raw: `Si solicitaste un cambio de contraseña para tu usuario ${to}, podes hacerlo entrando en el siguiente link: ${resetLink}`,
    html,
  });
};
