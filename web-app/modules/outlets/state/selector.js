import {createSelector, createStructuredSelector} from 'reselect';

export const createOutletSelector = type => state => state.outlets[type];
