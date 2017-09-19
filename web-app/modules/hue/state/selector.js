import {createSelector, createStructuredSelector} from 'reselect';

export const createOutletSelector = type => state => state.lights[type];
