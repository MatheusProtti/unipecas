import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Whats from '@/Components/WhatsApp'
import Head from 'next/head'
import './globals.css'
import './page.css'
import './sobre-nos/sobrenos.css'
import './produtos/produtos.css'
import './contato/contato.css'
import '../Components/Card/card.css'
import '../Components/CardProduto/cardproduto.css'
import '../Components/Footer/footer.css'
import '../Components/Header/header.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>UNIPEÇAS - CORRENTES E ACESSÓRIOS LTDA.</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <Whats />
        </>
    )
  }