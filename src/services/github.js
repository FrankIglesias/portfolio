import api from '../config/api';


export function getRepos() {
  return api.get('https://api.github.com/users/Frankiglesias/repos');
}
