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
    },
    async setMove(hand: string, prediction: string, matchid: string, jwt: string) {
        const res = await axios.post(
            `https://morra.carminezacc.com/matches/${matchid}/move`,
            `hand=${hand}&prediction=${prediction}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer "+jwt
                }
            }
        );
        console.log(res);
        return {data: res.data, status: res.status};
    }
}
