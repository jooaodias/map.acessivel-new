import React from 'react'
import { Container } from 'reactstrap'

const Footer = () => {
    return (
        <footer className="footer mt-5 py-1" style={{backgroundColor: "#4593EE"}}>
            <Container>
                <p className="mt-5 mb-3" style={{color: "white",textAlign: "center"}}>© Ana Clara, João Vitor, Luiz Roberto</p>
            </Container>
        </footer>
    )
}

export default Footer
