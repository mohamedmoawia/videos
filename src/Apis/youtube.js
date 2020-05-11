import axios from 'axios'

const KEY ='AIzaSyCm4UAQzqxONt48efcDGsrbGcQHmSZp-l8'
const newLocal = 'https://www.googleapis.com/youtube/v3'
export default axios.create({
    baseURL: newLocal,
    
    params: {
        
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
