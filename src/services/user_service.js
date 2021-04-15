import ConnectyCube from 'connectycube/dist/connectycube.min.js';

class UserService {

    async deletUser() {
        ConnectyCube.users
            .delete()
            .then((result) => { console.log(result) })
            .catch((error) => { console.log(error) });
    }

}

const userService = new UserService();
Object.freeze(userService);

// module.exports = userService;

export default userService;