import React from 'react';
import cuid from 'cuid';
import styles from './BookingManagement.css';

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
  <div className={styles.inputGroup}>
    <label htmlFor={field.id} className={styles.label}>{field.label}</label>
    <textarea id={field.id} className={styles.input} rows={field.rows} {...field.input} />
  </div>
);

export const RenderCheckbox = field => (
  <div className={styles.inputGroup}>
    <label htmlFor={field.id} className={styles.label}>{field.label}</label>
    <input type="checkbox" className={`${styles.input} ${styles.checkbox}`} {...field.input} />
  </div>
);

export const RenderDropdown = field => (
  <div className={styles.inputGroup}>
    <label htmlFor={field.id} className={styles.label}>{field.label}</label>
    <select className={`${styles.input}`} id={field.id} {...field.input}>
      <option value="">Maksutapa</option>
      {field.options.map((option) => {
        return (
          <option key={cuid()} value={option.value}>{option.name}</option>
        );
      })}
    </select>
  </div>
);
