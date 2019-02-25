import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import ShowsList from './ShowsList';
import * as actions from 'actions/bookingActions';
import styles from './ShowsManagement.css';
import pagestyles from './BookingManagement.css';
import * as messageActions from 'actions/messageActions';
import { RenderTextfield, RenderNumber, RenderDateField } from './RenderForm';

const ShowInfo = ({ show, deleteShow, toggleShowForm }) => {
  if (!show.id) return null;
  return (
    <React.Fragment>
      <h2>Esityksen tiedot</h2>
      <p>{show.nameLong}</p>
      <p><Moment format="DD.MM.YYYY HH.mm">{show.date}</Moment></p>
      <div className={pagestyles.formRow}>
        <button className={pagestyles.button} onClick={toggleShowForm}>Muokkaa</button>
        <button onClick={deleteShow} className={`${pagestyles.button} ${pagestyles.danger}`}>Poista</button>
      </div>
    </React.Fragment>
  );
};

ShowInfo.propTypes = {
  show: PropTypes.object,
  deleteShow: PropTypes.func,
  toggleShowForm: PropTypes.func,
};

const Shows = ({ showForm, toggleShowForm, clearSelectedShow }) => {
  return (
    <React.Fragment>
      <ShowsList />
      {!showForm ? (
        <div className={pagestyles.formRow}>
          <button className={pagestyles.button} onClick={() => { clearSelectedShow(); toggleShowForm(); }}>
          Lisää uusi esitys
          </button>
        </div>
      ) : null}
      <Link to="varaustenhallinta">Palaa varaustenhallintaan</Link>
    </React.Fragment>
  );
};

Shows.propTypes = {
  toggleShowForm: PropTypes.func,
  showForm: PropTypes.bool,
  clearSelectedShow: PropTypes.func,
};

const Form = ({ isNewShow, toggleShowForm, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Hallinta</h2>
      <div className={pagestyles.formRow}>
        <Field name="date" id="dateInput" type="date" component={RenderDateField} label="Päivämäärä ja aika" />
        <Field name="limit" id="limitInput" type="number" component={RenderNumber} label="Katsojamäärä" />
      </div>
      <div className={pagestyles.formRow}>
        <Field name="nameLong" id="nameLongInput" component={RenderTextfield} label="Esityksen nimi, pitkä" />
      </div>
      <div className={pagestyles.formRow}>
        <Field name="nameShort" id="nameShortInput" component={RenderTextfield} label="Esityksen nimi, lyhyt" />
      </div>
      <div className={pagestyles.formRow}>
        <button type="submit" className={pagestyles.button}>{isNewShow ? 'Lisää uusi esitys' : 'Tallenna muutokset'}</button>
        <button onClick={toggleShowForm} className={pagestyles.button}>Peruuta</button>
      </div>
    </form>
  );
};

Form.propTypes = {
  toggleShowForm: PropTypes.func,
  handleSubmit: PropTypes.func,
};

class ShowsManagement extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
    };
    this.toggleShowForm = this.toggleShowForm.bind(this);
  }
  componentDidMount() {
    if (this.props.shows.length < 1) this.props.fetchShows();
  }

  toggleShowForm() {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }));
  }

  render() {
    const {
      selectedShow, deleteShow, createShow, updateShow, addWarningMessage, handleSubmit, clearSelectedShow,
    } = this.props;
    const { showForm } = this.state;

    const handleDelete = () => {
      if (selectedShow.bookingCount > 0) {
        addWarningMessage({ header: 'Esitystä ei voi poistaa, sillä siihen on tehty varauksia.' });
        return;
      }
      if (confirm('Poistetaanko esitys?')) {
        deleteShow(selectedShow);
      }
    };

    const isNewShow = selectedShow.id === '';

    const onSubmit = (values) => {
      if (isNewShow) {
        createShow(values);
      } else {
        updateShow(values);
      }
    };

    return (
      <div className={styles.container}>
        <div className={styles.showsList}>
          <h2>Esitykset</h2>
          <Shows showForm={showForm} toggleShowForm={this.toggleShowForm} clearSelectedShow={clearSelectedShow} />
        </div>
        <div className={styles.showInfo}>
          <ShowInfo show={selectedShow} deleteShow={handleDelete} toggleShowForm={this.toggleShowForm} />
        </div>
        {showForm ? (
          <Form
            toggleShowForm={this.toggleShowForm}
            handleSubmit={handleSubmit(onSubmit)}
            isNewShow={isNewShow}
          />
        ) : null}
      </div>
    );
  }
}

ShowsManagement.propTypes = {
  shows: PropTypes.array,
  selectedShow: PropTypes.object,
  addWarningMessage: PropTypes.func,
  fetchShows: PropTypes.func,
  deleteShow: PropTypes.func,
  updateShow: PropTypes.func,
  createShow: PropTypes.func,
  clearSelectedShow: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const mapStateToProps = state => ({
  shows: state.bookingManagement.shows,
  selectedShow: state.bookingManagement.selectedShow,
  initialValues: state.bookingManagement.selectedShow,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: () => dispatch(actions.fetchShows()),
  addWarningMessage: message => dispatch(messageActions.addWarningMessage(message)),
  createShow: show => dispatch(actions.createShow(show)),
  updateShow: show => dispatch(actions.updateShow(show)),
  deleteShow: show => dispatch(actions.deleteShow(show)),
  clearSelectedShow: () => dispatch(actions.clearSelectedShow()),
});

const ShowsManagementWithReduxForm = reduxForm({
  form: 'showForm',
  enableReinitialize: true,
})(ShowsManagement);

export default connect(mapStateToProps, mapDispatchToProps)(ShowsManagementWithReduxForm);
