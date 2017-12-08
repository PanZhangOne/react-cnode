import axios from 'axios';

axios.defaults.baseURL = ' https://cnodejs.org/api/v1/';

axios.interceptors.response.use((res) => {
    if (res.data.success) {
        return Promise.resolve(res.data)
    } else {
        return Promise.reject(res)
    }
}, (err) => {
    return Promise.reject(err)
})

export default (methods, url, data) => {
    let method = methods.toLowerCase();
    switch (method) {
        case 'get':
            return new Promise((resolve, reject) => {
                axios.get(url, {params: data})
                    .then(data => resolve(data.data))
                    .catch(err => reject(err))
            });
        case 'post':
            return new Promise((resolve, reject) => {
                axios.post(url, data)
                    .then(data => resolve(data.data))
                    .catch(err => reject(err))
            });
    }
}
