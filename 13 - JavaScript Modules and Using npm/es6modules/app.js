import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { 
    apiKey as key, 
    url, 
    sayHi 
} from './src/config';
import User, { createURL, gravatar } from './src/user';

const user = new User('wes bos', 'wesbos@gmail.com', 'wesbos.com');
const profile = createURL(user.name);
const image = gravatar(user.email);
console.log(profile);
console.log(user);
console.log(image);
