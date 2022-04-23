import React from 'react';
import { connect } from 'react-redux';
import Users from '../components/Users';
import { usersAction } from '../actions/usersAction';

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = { fetchUsers: usersAction };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
