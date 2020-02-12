import Document, { Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document{
  render(){
    return(
      <html>
        <Head>
          {/* Meta tags and scripts go here */}
          <title>Modern Shed</title>
          <link rel="stylesheet" href="/_next/static/theme.css"/>
        </Head>

        <body>
          <Main/>
          <NextScript/>
        </body>

      </html>
    )
  }
}
