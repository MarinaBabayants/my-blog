import React, {useState} from "react";
import styled from "styled-components";
import { PostsApi } from "../../../api/api";
import PageLayout from "../../../components/_layouts/default";

export const StyledContainer = styled.div`
margin: 0 auto;
margin-top: 2rem;
width: 1200px;
height: 600px;
background: #452F2F;
opacity: 0.5;
border-radius: 7px;
color: white;
`

const StyledForm = styled.form`
text-align: center;
width: 50%;
height: 100%;
margin: 0 auto;
padding-top: 20px;
`

const StyledLabel = styled.label`
font-size: 25px;
`

const StyledTitleInput = styled.input`
background: white;
color: black;
font-size: 16px;
display: block;
width: 100%;
height: 30px;
margin-bottom: 20px;
margin-top: 20px;
`

const StyledTextInput = styled.input`
background: white;
color: black;
font-size: 16px;
display: block;
width: 100%;
height: 30px;
margin-top: 20px;
`

const StyledButton = styled.button`
background: transparent;
color: white;
border: 1px solid white;
padding: 2rem;
margin-top: 40px;
text-align: center;
width: 100%;
&:disabled {
  cursor: not-allowed
}
`


const NewPostForm: React.FunctionComponent<{}> = () => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await PostsApi.createPost({title,body})
            alert('the post was created!')
            setTitle('');
            setBody('');
        } catch (e) {
            alert('error')
        }
    };
    return (
        <PageLayout title="Create new post">
            <StyledContainer>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledLabel>
                        Title
                        <StyledTitleInput value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
                    </StyledLabel>
                    <StyledLabel>
                        Your post
                        <StyledTextInput value={body} type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value)} />
                    </StyledLabel>
                    <StyledButton type="submit" disabled={!title && !body}>
                        Create post
                    </StyledButton>
                </StyledForm>
            </StyledContainer>
        </PageLayout>
    )
}
export default NewPostForm;