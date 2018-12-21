import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Statistics = ({ members }) => {
  const getTyyCount = () => {
    return members.reduce((count, member) => {
      return member.memberOfTyy ? count + 1 : count;
    }, 0);
  };

  return (
    <div className="row">
      <div className="col">
        <p>Yhdistyksen jäseniä {members.length}kpl</p>
        <p>TYY:n jäseniä {getTyyCount()}kpl</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  members: state.jasenrekisteri.members,
});

const mapDispatchToProps = () => ({});

Statistics.propTypes = {
  members: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
