const MainBody = () => {
    const mostrarCuadroDialogo = () => {
        alert("Se ha hecho clic en el titular del MainBody");
      };
    return(
        <main className="maincito">
            <h2 onClick={mostrarCuadroDialogo}>Hacer click acá</h2>
            <p>Descripcion del trabajo, muy bacan</p>
            <ul>
                <li>Conciso</li>
                <li>Preciso</li>
                <li>Rápido</li>
            </ul>
        </main>
    )
}
export default MainBody;