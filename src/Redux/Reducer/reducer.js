const initialState = {
    dropdownData: [],
    cardData: [],
    currentSelected: 1,
};

const setState =(state=initialState,{type,payload}) => {
    switch(type){
        case "SET-DROPDOWN-DATA":
            return {...state, dropdownData:payload};
        case "SET-CARD-DATA":
            return {...state, cardData:payload};
        case "SET-SELECTED-DATA":
            return {...state, currentSelected:payload};

        default:
            return state;
    }
};

export default setState;