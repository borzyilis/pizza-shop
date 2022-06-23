import Layout from '../components/Layout'
import '../styles/globals.css'
import store from "../redux/store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </Provider>

  )
}

export default MyApp
