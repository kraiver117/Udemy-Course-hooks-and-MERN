const initialState = [{
    id:1,
    todo:'comprar leche',
    done:false,
}];

const todoReducer = (state = initialState, action) => {
    switch (action?.type) {
        case 'addTodo':
            return [...state, action.payload];
    
        default:
            break;
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo:'Comprar pan',
    done:true,
}

const action = {
    type: 'addTodo',
    payload: newTodo
}

todos =todoReducer(todos, action)
console.log(todos)