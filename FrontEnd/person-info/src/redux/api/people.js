import axious from 'axios';
const baseUrl = "http://localhost:5000/api/";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    PepleApi(url = baseUrl + "Contacts") {
        return {
            fetchAll: () => axious.get(url),
            postData: (data) => axious.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }
    }
}