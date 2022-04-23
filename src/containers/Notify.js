import React from 'react';
import { connect } from 'react-redux';
import { notifyReset } from '../actions/notifyAction';
import Notify from '../components/Notify';

const mapStateToProps = ({ notify }) => ({ notify });
const mapDispatchToProps = { notifyReset };

export default connect(mapStateToProps, mapDispatchToProps)(Notify);
