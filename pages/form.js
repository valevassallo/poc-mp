import styles from '../styles/Home.module.css'

// another alternative?????

function Form() {
  return(
    <div style={{height: "100vh", width: "100%"}}>
      <button>
        <form className={styles.form}>
          <script
            src="https://www.mercadopago.com.pe/integrations/v1/web-tokenize-checkout.js"
            data-public-key=""
            data-transaction-amount="100.00">
          </script>
        </form>
      </button>
    </div>
  )
}

export default Form