import React, { Component } from 'react'
import "./footer.style.css";

 class FooterPanel extends Component {
    render() {
        return (
            <>
                 <div className="py-2 text-center footer-style">© Muhammad Abbas &nbsp; {new Date().getFullYear()}</div>
            </>
        )
    }
}

export default FooterPanel
