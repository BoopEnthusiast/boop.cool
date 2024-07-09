import Head from 'next/head'

function Header() {
    return (
        <Head>
            <title>Boop</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="Boop" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://boop.website" />
            <meta property="og:image" content="https://boop.website/images/logo.png" />
            <meta property="og:description" content="YO!! HI PEOPLE OF THE INTERNET READING MY EMBED!!!"/>
            <meta property="og:site_name" content="Boop" />
            <meta property="og:locale" content="en" />
            <meta property="og:locale:alternate" content="en_NZ" />
            <meta property="og:locale:alternate" content="en_US" />
            <meta property="og:locale:alternate" content="en_GB" />
            <meta property="og:locale:alternate" content="en_AU" />
            <meta name="description" content="Personal website for the elustrious Boop" />
        </Head>
    )
}

export default Header