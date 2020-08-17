import {Axios} from "../utils/configAxios"

export const PostsApi = {
    getAllPosts() {
        return Axios.get('/posts')
    },
    getPost(postId: string) {
        return Axios.get(`/posts/${postId}`)
    },
    createPost({title, body}: { title: string, body: string}) {
        return Axios.post('/posts', {title, body})
    },
}