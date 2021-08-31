

import userRepository from './userRepository';





const repositories = {

  
  user:userRepository


 
};

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  get: name => repositories[name],
  
};