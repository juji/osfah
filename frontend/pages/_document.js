import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {

    const sheet = new ServerStyleSheet()

    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      styles: (
        <>
          {page.styles}
          {styleTags}
        </>
      )
    }
  }
}
