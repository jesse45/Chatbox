

class APICALLS {
    signUp() {
        let url = "http://localhost:8080/auth/verify";

        const body = {
            method: 'POST',
            body: JSON.stringify(userParams),
            headers: {
                'Content-Type': 'application/json'
            }
        }

    }
}