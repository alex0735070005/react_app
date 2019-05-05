import { combineReducers } from 'redux';
import gallery from '../components/pages/Gallery/reducer';
import header from '../components/Header/reducer';

export default combineReducers({
    gallery,
    header,
});