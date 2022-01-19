import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-light text-dark-dark dark:bg-dark dark:text-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
