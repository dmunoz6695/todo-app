export const todoReducer = (state, action) => {

  console.log('action', action)

  switch (action.type) {
  case '[TODO] create':
      
    return [...state, action.payload]
  
  default:
    return state
  }

}