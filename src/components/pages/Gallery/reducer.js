const initialState = {
    photos: [
        { id:1, name: 'image-1' },
        { id:2, name: 'image-2' },
        { id:3, name: 'image-3' },
        { id:4, name: 'image-4' },
    ],
}

export default function (state = initialState, action) {

    switch(action.type){
        case 'ADD_IMAGE': 
            return {
                ...state,
                photos: [...state.photos, action.image]
            }
        default: return state;
    }    
}