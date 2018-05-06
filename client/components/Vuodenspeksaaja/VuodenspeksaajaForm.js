import React from 'react';
import PropTypes from 'prop-types';
import styles from './Vuodenspeksaaja.css';


const Form = ({
  onSubmit, handleChange, submission, sent,
}) => (
  <form onSubmit={onSubmit}>
    <div className="row form-group align-items-center">
      <div className="col-sm-4">
        <label htmlFor="nameInput" className={styles.label}>Oma nimi</label>
      </div>
      <div className="col">
        <input type="text" name="name" id="nameInput" className="form-control" onChange={handleChange} value={submission.name} />
      </div>
    </div>

    <div className="row form-group align-items-center">
      <div className="col-sm-4">
        <label htmlFor="personToVoteInput">Ehdotettavan nimi</label>
      </div>
      <div className="col">
        <input type="text" name="personToVote" id="personToVoteInput" className="form-control" onChange={handleChange} value={submission.personToVote} />
      </div>
    </div>

    <div className="row form-group align-items-center">
      <div className="col-sm-4">
        <label htmlFor="commentArea">Perustelut</label>
      </div>
      <div className="col">
        <textarea name="comment" id="commentArea" rows="4" onChange={handleChange} value={submission.comment} className="form-control" />
      </div>
    </div>

    <div className={'row form-group align-items-center justify-content-center ' + styles.submit}>
      <div className="col-sm-5 d-flex justify-content-center text-center">
        {sent ? <p><i>Kiitos vastauksesta!</i></p> : <button className="btn btn-default" type="submit">Lähetä</button>}
      </div>
    </div>
  </form>
);

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  submission: PropTypes.object,
  sent: PropTypes.bool,
};
