import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Default, ES } from "../pages";

export const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Default />}/>
                <Route exact path="/es" element={<ES />}/>
            </Routes>
        </BrowserRouter>
    )
}