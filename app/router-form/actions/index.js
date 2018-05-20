import axios from 'axios'

export const FETCH_POSTS='fetch_posts';
const ROOT_URL='http://reduxblog.herokuapp.com/api';
// const KEY='?key=my_csjoshi_react'
const KEY='?key=123'

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${KEY}`)
    return {
        type:FETCH_POSTS,
        payload:request
    }
}