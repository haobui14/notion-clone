import { ChangeEventHandler, useRef } from 'react';
import styles from './Cover.module.css';

const Cover = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onChangeCoverImage = () => {
    fileInputRef.current?.click();
  };

  const onCoverImageUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target;
    console.log(target?.files?.[0]);
  };

  return (
    <div className={styles.cover}>
      <img className={styles.image} src='./ztm-notes.png' alt='Cover' />
      <button className={styles.button} onClick={onChangeCoverImage}>
        Change cover
      </button>
      <input
        onChange={onCoverImageUpload}
        style={{ display: 'none' }}
        ref={fileInputRef}
        type='file'
      />
    </div>
  );
};

export default Cover;