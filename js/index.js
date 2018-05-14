import moment from "moment";
import 'bootstrap';
import '../scss/main.scss';

console.log('Bienvenue dans webpack');

console.log(moment().startOf('day').fromNow());
