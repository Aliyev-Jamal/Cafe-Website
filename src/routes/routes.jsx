import { BrowserRouter, Route, Routes } from 'react-router'
import Wrapper from '../components/wrapper'
import Home from '../components/home/home'
import MenuPage from '../components/pages/menu'
import RecipesPage from '../components/pages/recipes'
import ChefsPage from '../components/pages/chefs'
import ContactsPage from '../components/pages/contacts'

const links = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/menu',
        element: <MenuPage />,
    },
    {
        path: '/recipes',
        element: <RecipesPage />,
    },
    {
        path: '/chefs',
        element: <ChefsPage />,
    },
    {
        path: '/contacts',
        element: <ContactsPage />,
    },
]

const MyRoutes = () => {
    return (
        <Wrapper>
            <BrowserRouter >
                <Routes>
                    {links.map(link => (
                        <Route path={link.path} element={link.element} />
                    ))}
                </Routes>
            </BrowserRouter>
        </Wrapper >
    )
}

export default MyRoutes