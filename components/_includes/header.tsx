import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
width: 100hv;
height: 70px;
display: flex;
justify-content: space-between;
padding: 1.5rem;
font-size: 40px;
color: white;
text-align: left;
background: #452F2F;
opacity: 0.7;
border-radius: 7px;
`
const StyledButton = styled.button`
padding: 1rem 1.5rem;
font-size: 2 rem;
color: white;
margin-right: 1.5rem;
border-radius: 5px;
border: solid white 1px;
background: transparent;
cursor: pointer;
`

const StyledA = styled.a`
text-decoration: none;
color: white;
`

const Header: React.FunctionComponent<{}> = () => {
    return (
        <StyledHeader>
            My test blog
            <div>
                <StyledButton>
                    <Link href="/posts/newPost">
                        <StyledA>Create new post</StyledA>
                    </Link>
                </StyledButton>
                <StyledButton>
                    <Link href="/">
                        <StyledA>All posts</StyledA>
                    </Link>
                </StyledButton>
            </div>
        </StyledHeader>
    )
}
export default Header;