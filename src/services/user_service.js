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

        const users = await ConnectyCube.users.get(searchParams);

        const data = await users;
        const data2 = await users.json();
        console.log(data);
        console.log(data2);

        //handle errors like token is required
    }

}

const userService = new UserService();
Object.freeze(userService);

// module.exports = userService;

export default userService;