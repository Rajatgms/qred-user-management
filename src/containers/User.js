import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User/User';
import { fetchUserInfo, updateUserInfo } from '../actions/userAction';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { fetchUserInfo, updateUserInfo };

export default connect(mapStateToProps, mapDispatchToProps)(User);
