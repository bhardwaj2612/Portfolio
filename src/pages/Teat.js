// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
export default function Test() {
    const [open, setOpen] = useState(false);
    return <>
        <div style={{ border: '1px solid black', background: "green", height: "5vh" }}>
            <span>
                click
            </span>
            <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text"
                aria-expanded={open} style={{ float: 'right' }}>
                click
            </Button>
        </div>
        <Collapse in={open}>
            <div id="example-collapse-text">
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <span class="navbar-text">
                            <ul style={{ float: 'right' }}>
                                <li>Home</li>
                                <li>Contect</li>
                                <li>About US</li>
                                <li>Project</li>
                                <li>Resume</li>
                            </ul>
                        </span>
                    </div>
                </nav>
            </div>
        </Collapse>
    </>
}