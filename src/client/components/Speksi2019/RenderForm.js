import React from 'react';
import styles from './RenderForm.css';

export const RenderTextfield = field => (
  <div className={styles.inputGroup}>
    <label htmlFor={field.id} className={styles.label}>{field.label}</label>
    <input id={field.id} className={styles.input} {...field.input} placeholder={field.placeholder} type="text" />
  </div>
);

export const RenderNumber = field => (
  <div className={styles.inputGroup}>
    <label htmlFor={field.id} className={styles.label}>{field.label}</label>
    <input id={field.id} className={styles.input} {...field.input} type="number" />
  </div>
);

export const RenderDateField = field => (
  <div className={styles.inputGroup}>
    <label htmlFor={field.id} className={styles.label}>{field.label}</label>
    <input id={field.id} className={styles.input} {...field.input} type="datetime-local" />
  </div>
);

export const RenderTextarea = field => (
  <div className={`${styles.inputGroup} ${styles.inputTextarea}`}>
    <label htmlFor={field.id} className={styles.label}>{field.label}</label>
    <textarea id={field.id} className={styles.input} rows={field.rows} placeholder={field.placeholder} {...field.input} />
  </div>
);
