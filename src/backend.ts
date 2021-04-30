import axios from 'axios';

//const URL = "http://localhost:5000";
const URL = "https://morra.carminezacc.com";

export default {
    async logIn(username: string, password: string) {
        const res = await axios.post(
            URL+"/users/login",
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
            URL+"/users/signup",
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
    async addToPublicQueue(jwt: string) {
        const res = await axios.post(
            URL+`/mm/queue`,
            'type=public',
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer "+jwt
                }
            }
        );
        console.log(res);
        return {data: res.data, status: res.status};

    },
    async verifyUser(jwt: string) {
        const res = await axios.get(
            URL+`/users/verify`,
            {
                headers: {
                    "Authorization": "Bearer "+jwt
                }
            }
        );
        console.log(res);
        return {data: res.data, status: res.status};

    },
    async getQueueStatus(jwt: string) {
        const res = await axios.get(
            URL+`/mm/queue_status`,
            {
                headers: {
                    "Authorization": "Bearer "+jwt
                }
            }
        );
        console.log(res);
        return {data: res.data, status: res.status};

    },
    async addToPrivateQueue(jwt: string) {

        const res = await axios.post(
            URL+`/mm/queue`,'type=private',
            {
                headers: {
                    "Authorization": "Bearer "+jwt
                }
            }
        );
        console.log(res);
        return {data: res.data, status: res.status};
    },
    async playWithFriend(userid: string, jwt: string) {
        const res = await axios.post(
            URL+`/mm/play_with_friend`,
            "user="+userid,
            {
                headers: {
                    "Authorization": "Bearer "+jwt
                }
            }
        );
        console.log(res);
        return {data: res.data, status: res.status};
    },
    async setMove(hand: string, prediction: string, matchid: string, jwt: string) {
        const res = await axios.post(
            URL+`/matches/${matchid}/move`,
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
    },
    async getMove(matchid: string) {
        const res = await axios.get(
            URL+`/matches/${matchid}/last_round`,
            
        );
        console.log(res);
        return res;
    },
    async getMatch(id: string) {
        const res = await axios.get(
            URL+"/matches/"+id
        );
        return res.data;
    }
}
