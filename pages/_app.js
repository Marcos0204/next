import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme } from '../GlobalStyles'

function MyApp({ Component, pageProps }) {
  
    return (
        <>
            <GlobalStyles/>
            <Component {...pageProps} />
        </>
    )

}

export default MyApp