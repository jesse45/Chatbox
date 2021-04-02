import ConnectyCube from 'connectycube/dist/connectycube.min';
import { CONFIG, CREDENDIALS } from '../appConfig';

class AuthService {
    async init() {
        await ConnectyCube.init(CREDENDIALS, CONFIG);
        this.CreateSession();
    }

    async CreateSession() {
        ConnectyCube.createSession()
            .then((session) => { console.log(session) })
            .catch((error) => { console.log(error) })
    }
}

const authservice = new AuthService();
Object.freeze(authservice);

export default authservice;