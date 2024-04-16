import { Footer } from "./footer/Footer"
import Navbar from "./navbar/Navbar"



export const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
