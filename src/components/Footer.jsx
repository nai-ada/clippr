import React from  'react';

const Footer = () => {
    return (
        <Logo />
    )
}
    const Logo = () => {
        return (
            <div style={logoStyle}>
                <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h1>Clippr</h1>
                    <p style={{color: 'white'}}>For educational purposes only.</p>
                    <p style={{color: 'white'}}>© 2024 Lexie, Nadia, Rathan. All rights reserved.</p>
                </a>
            </div>
        )
}

const logoStyle = {
    fontSize: '12px',
    textTransform: 'uppercase',
    color: '#FCD12A',
    padding: '4px',
    margin: '0',
    marginTop: '15px',
    paddingBottom: '15px',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

export default Footer