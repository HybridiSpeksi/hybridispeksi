import React from 'react';
import styles from './RenderForm.css';
import cuid from 'cuid';

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

export const RenderRadio = field => (
  <div className={`${styles.inputGroup}`}>

    {field.buttons.map((button) => {
    return (
      <div className={styles.radioWrapper}>
        <label htmlFor={field.id} className={styles.radioLabel}>{button}</label>
        <div className={styles.inputRadioOption} key={cuid()}>
          <input id={button} className={styles.inputRadio} {...field.input} type="radio" />
        </div>
      </div>
      );
    })}
    {/* handleClick={handleClick} selected={show.id === selectedShow.id} */}
  </div>
);

export const RenderCheckbox = field => (
  <div className={`${styles.inputGroup} ${styles.checkboxWrapper}`}>
    <label htmlFor={field.id} className={`${styles.label} ${styles.checkboxLabel}`}>{field.label}</label>
    <input type="checkbox" className={`${styles.input} ${styles.checkbox}`} {...field.input} />
  </div>
);

export const RenderDropdown = field => (
  <div className={styles.inputGroup}>
    <label htmlFor={field.id} className={styles.label}>{field.label}</label>
    <select className={`${styles.input}`} id={field.id} {...field.input}>
      {field.options.map((option) => {
        return (
          <option key={cuid()} value={option.value}>{option.name}</option>
        );
      })}
    </select>
  </div>
);
