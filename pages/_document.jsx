import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="text-dark-2 bg-light-2 dark:text-light-2 dark:bg-dark-1">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
