
import { combineReducers } from 'redux';
import newsList from './newsList';
import comments from './comments'

export default combineReducers({ newsList, comments });