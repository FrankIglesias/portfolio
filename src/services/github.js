import api from '../config/api';


export function getRepos() {
  return api.get('https://api.github.com/users/Frankiglesias/repos',{}, {headers: {accept: 'application/vnd.github.mercy-preview+json'}});
}
