import axios from 'axios';

export default {
    async logIn(username: string, password: string) {
        const res = await axios.post(
            "https://morra.carminezacc.com/users/login",
            `username=${username}&password=${password}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );
        console.log(res);
        return {data: res.data, status: res.status};
    },
    async signUp(username: string, password: string) {
        const res = await axios.post(
            "https://morra.carminezacc.com/users/signup",
            `username=${username}&password=${password}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );
        console.log(res);
        return {data: res.data, status: res.status};
    }
}
