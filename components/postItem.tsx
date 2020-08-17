import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Post } from "../interfaces";

const Li = styled.li`
display: flex;
flex-direction: column;
padding: 10px;
margin: 10px 0;
border: 1px solid #452F2F;
border-radius: 20px;
`

const A = styled.a`
text-decoration: none;
cursor: pointer;
`

const PostItem: React.FunctionComponent<Post> = ({body, title, id}) => {
    return (
        <Link href={`/posts/${id}`}>
            <A>
                <Li>
                    <strong>{title}</strong>
                    <span>{body}</span>
                </Li>
            </A>
        </Link>
    )
}
export default PostItem;
