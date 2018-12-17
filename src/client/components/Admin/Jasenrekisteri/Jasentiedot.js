import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Text, Radio, Dropdown } from '../../../Utils/Form';
import { updateSelectedMember, clearSelectedMember, saveMember, approveMember } from '../../../actions/jasenrekisteriActions';

const Jasentiedot = ({
  member, update, clear, save, approve,
}) => (
  <div>
    <div className="row">
      <div className="col">
        <h1>Jäsentiedot</h1>
        <h3>
          {member.fname} {member.sname}
        </h3>
      </div>
      <div className="col text-right">
        <a href="#" onClick={() => clear()} className="btn btn-default">
          <i className="fa fa-times" aria-hidden="true" />
        </a>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <Text
          id="fname-input"
          name="fname"
          type="fname"
          onChange={e => update({ ...member, fname: e.target.value })}
          value={member.fname}
          placeholder="Etunimet"
          label="Etunimet"
        />
      </div>
      <div className="col">
        <Text
          id="lname-input"
          name="sname"
          type="text"
          onChange={e => update({ ...member, sname: e.target.value })}
          value={member.sname}
          placeholder="Sukunimi"
          label="Sukunimi"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <Text
          id="email-input"
          name="email"
          type="email"
          onChange={e => update({ ...member, email: e.target.value })}
          value={member.email}
          placeholder="Sähköposti"
          label="Sähköposti"
        />
      </div>
      <div className="col">
        <Text
          id="hometown-input"
          name="hometown"
          type="text"
          onChange={e => update({ ...member, hometown: e.target.value })}
          value={member.hometown}
          placeholder="Kotikunta"
          label="Kotikunta"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        <Dropdown
          options={[
              { name: 'TYYn jäsen', value: 'yes' },
              { name: 'Ei TYYn jäsen', value: 'no' },
          ]}
          selected={member.memberOfTyy ? 'yes' : 'no'}
          name="memberOfTyy"
          onChange={e => update({ ...member, memberOfTyy: e.target.value === 'yes' })}
          id="memberoftyy-dropdown"
        />
      </div>
    </div>

    <div className="row">
      <div className="col">
        {member.updated ? (
          <button onClick={() => save(member)} className="btn btn-primary">
              Tallenna tiedot
          </button>
        ) : false}
        {!member.approved ? (
          <button onClick={() => approve(member)} className="btn btn-primary">
                Hyväksy jäseneksi
          </button>
            ) : (
              <p>
                Hyväksytty jäseneksi{' '}
                <Moment format="DD.MM.YYYY">{member.approveDate}</Moment>
              </p>
            )}
      </div>
    </div>
  </div>
);

Jasentiedot.propTypes = {
  member: PropTypes.object,
  update: PropTypes.func,
  clear: PropTypes.func,
  save: PropTypes.func,
  approve: PropTypes.func,
};

const mapStateToProps = state => ({
  member: state.jasenrekisteri.selectedMember,
});

const mapDispatchToProps = dispatch => ({
  update: member => dispatch(updateSelectedMember(member)),
  clear: () => dispatch(clearSelectedMember()),
  save: member => dispatch(saveMember(member)),
  approve: member => dispatch(approveMember(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jasentiedot);
