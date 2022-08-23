import Head from "next/head"

const SiteHead = () =>{
    return(
    <Head>
    <title>Tuzukuru | はじめて続く、作るサイクル</title>
    <meta name="description" content="Tuzukuru site" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
    </Head>
    )
}

export default SiteHead