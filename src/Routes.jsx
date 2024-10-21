import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Pages/Inicio"
import Header from "./components/Header"
import QuemSomos from "./Pages/QuemSomos"
import DefaultLayout from "./components/DefaultLayout"
import DissertacoesTeses from "./Pages/DissertacoesTeses"
import MateriaisDidaticos from "./Pages/MateriaisDidaticos"
import Livros from "./Pages/Livros"
import Aceu from "./Pages/Aceu"
import AtividadesCartograficas from "./Pages/AtividadesCartograficas"
import Forum from "./Pages/Forum"
import Contato from "./Pages/Contato"
import Footer from "./components/Footer"

export default function Router() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Inicio />} />
                    <Route path="quem-somos" element={<QuemSomos />} />
                    <Route path="dissertacoes-teses" element={<DissertacoesTeses />} />
                    <Route path="materiais-didaticos" element={<MateriaisDidaticos />} />
                    <Route path="livros" element={<Livros />} />
                    <Route path="aceu-trabalhos-de-extensao" element={<Aceu />} />
                    <Route path="atividades-cartograficas" element={<AtividadesCartograficas />} />
                    <Route path="forum" element={<Forum />} />
                    <Route path="contato" element={<Contato />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}