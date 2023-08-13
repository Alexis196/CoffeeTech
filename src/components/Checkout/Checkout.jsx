import './Checkout.css'
import FormCompra from "../FormCompra/FormCompra"

function Checkout() {
    return (
        <div className="checkout">
            <h2>Formulario de compra</h2>
            <p>
                Por favor complete los siguientes campos para finalizar el proceso de compra
            </p>
            <FormCompra/>
        </div>
    )
}

export default Checkout