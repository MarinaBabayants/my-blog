import React, { useEffect } from "react";
import { NextPage } from "next"
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPosts } from "../redux/actions/actionCreators";
import PageLayout from "../components/_layouts/default";
import styled from "styled-components";
import { Post } from "../interfaces";
import PostItem from "../components/postItem";
import { AppStateType } from "../redux/reducers";

const StyledContainer = styled.div`
text-align: center;
margin-top: 20px;
padding: 10px;
`

const BlogPage: NextPage<{}> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllPosts())
    }, [dispatch]);

    const posts = useSelector<AppStateType,Array<Post>>(state => state.postsPage.posts)
    return (
        <PageLayout title="All posts">
            <StyledContainer>
                <h1>All posts</h1>
                {posts.map(post => (<PostItem key={post.id} id={post.id} body={post.body} title={post.title}/>))}
            </StyledContainer>
        </PageLayout>
    )
}

export default BlogPage;
