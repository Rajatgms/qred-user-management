import React from 'react';
import { connect } from 'react-redux';
import Loader from '../components/Loader';

const mapStateToProps = ({ loader }) => ({ loader });

export default connect(mapStateToProps)(Loader);
