import React from 'react';
import { useDispatch } from 'react-redux';

import fileActions from '~redux/File/actions';
import FileDropzone from '~app/components/FileDropzone';

import styles from './styles.module.scss';

function FileDropzoneExample() {
  const dispatch = useDispatch();
  const handleDrop = droppedFile => dispatch(fileActions.uploadImage(droppedFile));
  return (
    <div className={`full-width m-bottom-3 ${styles.container}`}>
      <h3 className="subtitle bold text-center m-bottom-4">File Dropzone</h3>
      <FileDropzone types={['.jpg', '.png']} handleDrop={handleDrop} />
    </div>
  );
}

export default FileDropzoneExample;
