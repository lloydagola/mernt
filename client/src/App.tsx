import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App:React.FC = () => {

    return <div className='App'>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    </div>
}

const Home:React.FC = () => {

    return <>Home sweet home</>
}

const About:React.FC = () => {
    
    return <>I know all about that"</>
}

const Contact:React.FC = () => {

    return <>the smoking gun</>
}
 
export default App