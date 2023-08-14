import { Ring } from '@uiball/loaders'
import './Loader.css'

function Loader() {
    return (
        <div className='carga'>
            <Ring size={40} lineWeight={5} speed={2} color="black" />
            <p>Cargando...</p>
        </div>
    )
}

export default Loader