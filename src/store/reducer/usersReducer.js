import { FETCH_USERS} from '../actions/type'






const initialState = {
	users:[],
	
    
}
function reducer(state = initialState, action) {
	switch (action.type) {
	
		
            
	
		  
		 
		case FETCH_USERS:{
             console.log('reducer',action.payload);
			return{

                   ...state,
				   users:action.payload
				  
			}
		}	

		
		// case UPDATE_CATEGORY: {
		// 	return {
		// 		...state,
		// 	};
		// }
		
       

        default:
            return state;
            
    }
}


export default reducer;