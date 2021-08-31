
import { FETCH_USERS} from './type';


import {RepositoryFactory} from '../../repository/RepositoryFactory'

var userRepository=RepositoryFactory.get("user")

export const FetchUsers = ()=> async dispatch => {
                    
    try {
       let {data}=  await userRepository.getUsers()
       console.log("dataaaaa",data)
        dispatch({
                type: FETCH_USERS,
                payload:data
              });
     
    }catch (error) {
       
          dispatch(alert(error.message));
    }

  }