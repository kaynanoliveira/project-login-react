import {Link} from 'react-router-dom'
import { Button } from '../../components/Button'

const Home = () => {
    return(<>
        <h1>Home</h1>
        <Button title='Teste1' />
        <Button varient='secondary' title='Teste2'/>
        <Link to="/login">Fazer login</Link>
    </>)
}

export {Home}