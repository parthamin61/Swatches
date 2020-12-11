import {colorConstants} from '../constants';

export const colorActions = {
    updateSelectedColor
};


function updateSelectedColor(selectedColor) {
    return dispatch => {
        dispatch(success(selectedColor));
    }

    function success(selectedColor) {return {type: colorConstants.CHANGED_COLOR_SUCCESS, selectedColor}};
}