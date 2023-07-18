import { useState } from "react";
const MainBody = () => {
    const [mostrarDialogo, setMostrarDialogo] = useState(false);
    const funcionMostrarDialogo = () => {
        setMostrarDialogo(!mostrarDialogo)
    }
    return (

        <>
            <main>
                <h2 onClick={funcionMostrarDialogo}>ejercicio2 titulo</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, ullam voluptatum? Asperiores, at velit autem voluptas, ea esse delectus vel voluptatibus adipisci id est quasi error itaque quos voluptates excepturi.</p>
                <ul>
                    <li>lista li 1</li>
                    <li>lista li 2</li>
                    <li>lista li 3</li>
                    <li>lista li 4</li>
                </ul>
                {
                    mostrarDialogo &&
                    <div>
                        mostrar mesaje al hacer click al titulo
                    </div>
                }
            </main>
        </>
    )
}

export default MainBody;