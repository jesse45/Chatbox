import ConnectyCube from 'connectycube/dist/connectycube.min.js';

class UserService {

    async deletUser() {
        ConnectyCube.users
            .delete()
            .then((result) => { console.log(result) })
            .catch((error) => { console.log(error) });
    }

    async getListOfUsers(name) {

        const searchParams = { full_name: name };

        return await ConnectyCube.users.get(searchParams);

        //handle errors like token is required
    }

}

const userService = new UserService();
Object.freeze(userService);

// module.exports = userService;

export default userService;