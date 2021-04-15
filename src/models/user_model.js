
class User {
    constructor(user) {
        this.userName = user.login;
        this.password = null;
        this.email = null;
        this.firstName = null;
        this.lastName = null;
        this.phone = null;
        this.website = null;
        this.fullname = this.firstName + ' ' + this.lastName;
        this.custom_data = user.custom_data ? user.custom_data : '';
    }
}