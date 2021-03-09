import React from 'react'
import { Helmet } from 'react-helmet'

const Head = () => {
    return (
        <Helmet>
            <title>Ella | Portfolio</title>
            <meta name="description" content="Hey, I'm Ella, a high school student from California and an aspiring software developer." />

            {/* OpenGraph tags */}
            <meta property="og:url" content="https://ela.now.sh" />
            <meta property="og:title" content="Ella | Portfolio" />
            <meta property="og:description" content="Hey, I'm Ella, a high school student from California and an aspiring software developer." />

            {/* Twitter Card tags */}
            <meta name="twitter:title" content="Ella | Portfolio" />
            <meta name="twitter:description" content="Hey, I'm Ella, a high school student from California and an aspiring software developer." />
        </Helmet>
    )
}

export default Head