import React from 'react';
import { connect } from 'react-redux';
import Users from '../components/Users';
import { fetchUsers } from '../actions/fetchUsers';

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = { fetchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
