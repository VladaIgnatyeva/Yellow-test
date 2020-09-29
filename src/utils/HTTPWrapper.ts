import axios from 'axios';

const api = 'https://jogtracker.herokuapp.com/api/v1';

export default class HTTPWrapper {

    post(url: string, data: any) {
        return axios.post(`${api}/${url}`, data, { headers: { Authorization: localStorage.getItem('token') } }); 
    }

    get(url: string) {
        return axios.get(`${api}/${url}`, { headers: { Authorization: localStorage.getItem('token') } })
    }

    put(url: string, data: any) {
        return axios.put(`${api}/${url}`, data, { headers: { Authorization: localStorage.getItem('token') } })
    }

    patch(url: string, data: any) {
        return axios.patch(`${api}/${url}`, data, { headers: { Authorization: localStorage.getItem('token') } })
    }

    delete(url: string, data: any) {
        return axios.delete(`${api}/${url}`, { data: data, headers: { Authorization: localStorage.getItem('token') } })
    }

    auth(url: string){
        return axios.get(`${api}/${url}`)
    }
}