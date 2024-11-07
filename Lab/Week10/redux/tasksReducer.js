const initialState = [
    { id: '1', title: 'Celia Lakin' },
    { id: '2', title: 'Hedio Varni' },
  ];
  
  export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...state,
          {
            id: action.payload.id,
            title: action.payload.title,
          },
        ];
      case 'CHANGED':
        return state.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      case 'DEL':
        return state.filter((task) => task.id !== action.payload.id);
      default:
        return state;
    }
  }
  