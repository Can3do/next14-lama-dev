import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h2>Página no encontrada</h2>
            <p>La página que estabas buscando no existe</p>
            <Link href='/'>Volver a la HomePage</Link>
        </div>
    )
}

export default NotFound