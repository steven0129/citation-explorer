import React from 'react'
import Head from 'next/head'

export default ({ children }) => (
    <div >
        <Head>
            <title>文獻搜尋器</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
            <link rel='stylesheet' href='/static/main.css' />
        </Head>
        {children}
    </div >
)