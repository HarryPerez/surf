/* eslint-disable no-undef */
/* eslint-disable import/order */

import AWSlib from 'aws-sdk';

jest.mock('aws-sdk');

export const getSignedUrlPromiseMock = jest.fn((config, callback) => callback(false, { url: 'test.com', fields: {} }));

export const AWS = AWSlib;

export const S3 = AWS.S3.mockReturnValue({ createPresignedPost: getSignedUrlPromiseMock });
