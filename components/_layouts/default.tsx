import React from "react";
import Head from "next/head";
import Header from "../_includes/header";

type Props = {
    title?: string,
}

const PageLayout: React.FunctionComponent<Props> = ({children, title= "Default title"}) => {
    return (
        <>
            <main>
                <Head>
                    <title>{title}</title>
                    <meta name='description'/>
                </Head>
                <Header/>
                {children}
            </main>
        </>
    )
}

export default PageLayout;
