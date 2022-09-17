const initialState = [{
    id:1,
    todo:'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState,action) => {
    if(action?.type=== 'agregar'){ //Undefined el action
        return [...state,action.payload];
    }
    return state;
}

let todos = todoReducer(); //Action undefined!

const newTodo = {
    id:2,
    todo:'Comprar leche',
    done: false
}
const action = {
    type: 'agregar',
    payload: newTodo
}
todos = todoReducer(todos, action);
console.log(todos);

