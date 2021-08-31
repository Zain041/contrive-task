import Repository from './Repository';




const get_users_resource = '/users';





export default{ 

  
  getUsers(){
  
      return Repository.get(`${get_users_resource}`)
    },
   
}