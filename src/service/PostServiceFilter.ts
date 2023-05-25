import axios from "axios";

export default class PostServiceFilter {

    static async getFilter(page: number, url: string) {

        const response = await axios.get(url)
        return response
    }


}