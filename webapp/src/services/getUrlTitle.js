import Axios from "axios";

const  getUrlTitle = (url) => {
     return Axios.get(`/api/scrapper/?url=${url}`).then(title => title.data)
}
export default getUrlTitle