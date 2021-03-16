/* eslint-disable no-undef */
import nodemailerLib from 'nodemailer';

export const sendMailMock = jest.fn().mockReturnValue(true);

jest.mock('nodemailer');

export const nodemailer = nodemailerLib;

nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });
