import React from 'react';
import { connect } from 'react-redux';
import Users from '../components/Users';
import { getUsers } from '../actions/usersAction';

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = { getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
