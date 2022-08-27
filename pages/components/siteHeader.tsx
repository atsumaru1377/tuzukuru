import Head from "next/head"

type Props = {
    title : string
}

const SiteHead = (props:Props) =>{
    return(
    <Head>
    <title>{props.title}</title>
    <meta name="description" content="Tuzukuru site" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    )
}

export default SiteHead