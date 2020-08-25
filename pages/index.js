import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MercadoPago form?
        </h1>
        {/* action="https://www.mi-sitio.com/procesar-pago" method="POST" */}
        <form className={styles.form}>
          <script
            src="https://www.mercadopago.com.pe/integrations/v1/web-tokenize-checkout.js"
            samesite="none"
            data-public-key=""
            data-transaction-amount="100.00">
          </script>
        </form>
      </main>
    </div>
  )
}
