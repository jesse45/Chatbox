class User {
    constructor(userData) {
        this.user = userData.id;
        this.login = userData.login;
        this.password = userData.password;
        this.email = userData.email;
        this.external_user_id = userData.external_user_id;
        this.facebook_id = userData.facebook_id;
        this.twitter_id = userData.twitter_id;
        this.full_name = userData.full_name;
        this.phone = userData.phone;
        this.website = userData.website;
        this.custom_data = userData.custom_data;
        this.user_tags = userData.user_tags;
        this.avatar = userData.avatar;
        this.created_at = userData.created_at;
        this.updated_at = userData.updated_at;
        this.last_request_at = userData.last_request_at;

        //encrypt the password
    }

}
export default User;