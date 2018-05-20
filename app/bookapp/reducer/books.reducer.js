export default function(state = null, action){
    switch(action.type){
        case "ADD_BOOK":
            let newState = [...state];
            newState.push(action.payload);
            return newState;
        default:
            return[
                {title:'Javascript: The Good Parts'},
                {title:'Harry Potter'},
                {title:'Head first Java'},
                {title:'Design patterns in Java'}
            ]
    }
    
}