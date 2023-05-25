import axios from "axios";

export default class PostService {

        static async getAll(page: number) {

                const response = await axios.get(`https://rickandmortyapi.com/api/character`, {

                        params: {

                                page: page
                        }

                })
                return response

        }


}