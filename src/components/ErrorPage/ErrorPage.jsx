import Error from '../../assets/img/error-404.png'
import './ErrorPage.css'

function ErrorPage() {
    return (
        <div className='div-error'>
            <img src={Error} alt="error-404" />
            <div className='div-texto'>
                <p>ERROR 404</p>
                <p>Página no Encontrada</p>
            </div>
        </div>
    )
}

export default ErrorPage