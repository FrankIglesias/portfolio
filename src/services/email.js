import api from '../config/api';

export function sendEmail(values) {
  return api.post('https://go-mailer.franciscojiglesias.vercel.app/api/', values);
}
