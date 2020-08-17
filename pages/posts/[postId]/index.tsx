import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import PageLayout from "../../../components/_layouts/default";
import { PostsApi } from "../../../api/api";
import { Post } from "../../../interfaces/index"

const PostPage: React.FunctionComponent<{}> = () => {
    const [post, setPost] = useState<Post>({
        id: 0,
        title: '',
        body: ''
    });
    const router = useRouter()
    const {postId} = router.query

    useEffect(() => {
        const getPost = async () => {
            const {data} = await PostsApi.getPost(postId as string);
            setPost(data);
        };
        getPost()
    }, [postId]);

    return (
        <PageLayout title="Post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </PageLayout>
    )
}

export default PostPage;