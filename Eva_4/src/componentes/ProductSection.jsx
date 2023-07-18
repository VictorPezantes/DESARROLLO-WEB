import mouse from '../imagen/mouse.jpg';
import zapato from '../imagen/zapato.webp';
import espejo from '../imagen/espejo.jpg';

const ProductSection =() =>{
    return(
        <section className='seccion_productos'>
            <ul>
                <li>
                <h3>Zapato</h3>
                <img src={zapato}/>
                <p>Bello zapato de cuero</p>
                </li>
                <li>
                <h3>Espejo</h3>
                <img src={espejo}/>
                <p>Bello espejo de cristal</p>
                </li>
                <li>
                <h3>Mouse</h3>
                <img src={mouse}/>
                <p>Bello mouse de fibra de carbono</p>
                </li>
            </ul>
        </section>
    )
}
export default ProductSection;