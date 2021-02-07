import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
        Copyright © {currentYear}, Bookstore Private Limited. All Rights Reserved
    </footer>;
}

export default Footer;