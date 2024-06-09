import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Contatos from './pages/Contato'
import Page404 from './pages/Page404'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PageBase from './pages/pageBase'

function AppRoutes() {
    return (

        <BrowserRouter>
            <Routes>
            <Route path='/' element={ <PageBase /> }>
                <Route index element={ <Home /> }></Route>
                <Route path="/sobre" element={<Sobre />}>  </Route>
                <Route path="/servicos" element={<Servicos />}>  </Route>
                <Route path="/contatos" element={<Contatos />}>  </Route>
                <Route path="*" element={ <Page404 /> }></Route>
            </Route>
            </Routes>
        </BrowserRouter>


    )

}
export default AppRoutes