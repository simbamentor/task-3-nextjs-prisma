import {Provider} from 'next-auth/client'

export default function App({Component, pageProps}) {
    return (
        <Provider options={{clientMaxAge: 0}} session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    )
}