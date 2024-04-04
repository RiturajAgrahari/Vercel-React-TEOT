import { Link } from 'react-router-dom'


const NotFoundPage = () => {
    return (
        <div>
            <h1>404 PAGE NOT FOUND</h1>
            <h2><Link to="/">Home from Link</Link></h2>

            {/* a refreshes the whole page */}
            {/* <h2><a href='/'>Home from a</a></h2> */}
        </div>
    )
}

export default NotFoundPage