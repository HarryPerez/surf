import { createTypes, completeTypes } from 'redux-recompose';
import withPostSuccess from 'redux-recompose/lib/injections/withPostSuccess';

import { downloadFile } from '~utils/file';

import * as FileService from '../../services/FileService';

import { TARGETS } from './constants';

export const actions = createTypes(completeTypes([], ['UPLOAD_IMAGE', 'DOWNLOAD_CSV']), '@@FILE');

export const actionCreators = {
  uploadImage: file => ({
    type: actions.UPLOAD_IMAGE,
    target: TARGETS.UPLOAD_IMAGE,
    payload: file,
    service: FileService.uploadFileToS3
  }),
  downloadCSV: (data, filename) => ({
    type: actions.DOWNLOAD_CSV,
    target: TARGETS.DOWNLOAD_CSV,
    service: FileService.downloadCsv(data, filename),
    injections: [
      withPostSuccess((dispatch, response) => {
        if (response.status === 200) {
          downloadFile(response.data, filename);
        }
      })
    ]
  })
};

export default actionCreators;
