import React, { useState, useEffect } from 'react';

const Header = function() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = function() {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = function() {
        setIsMenuOpen(false);
    };

    useEffect(function() {
        const handleEsc = function(event) {
            if (event.keyCode === 27) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        } else {
            document.body.style.overflow = 'unset';
        }

        return function() {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isMenuOpen]);

    return React.createElement('header', { className: 'header' },
        React.createElement('div', { className: 'container' },
            React.createElement('h1', { className: 'logo' }, 'Sofia Alcântara Ferreira'),
            React.createElement('button', { 
                className: 'menu-toggle ' + (isMenuOpen ? 'active' : ''),
                'aria-label': isMenuOpen ? 'Fechar menu' : 'Abrir menu',
                onClick: toggleMenu
            },
                React.createElement('i', { 
                    className: 'fas ' + (isMenuOpen ? 'fa-times' : 'fa-bars'),
                    'aria-hidden': 'true'
                })
            ),
            React.createElement('nav', { className: isMenuOpen ? 'nav-open' : '' },
                React.createElement('ul', { className: 'nav-menu ' + (isMenuOpen ? 'nav-menu-open' : '') },
                    React.createElement('li', null,
                        React.createElement('a', { 
                            href: '#sobre-mim', 
                            onClick: closeMenu 
                        }, 'Sobre Mim')
                    ),
                    React.createElement('li', null,
                        React.createElement('a', { 
                            href: '#projetos', 
                            onClick: closeMenu 
                        }, 'Projetos')
                    ),
                    React.createElement('li', null,
                        React.createElement('a', { 
                            href: '#contato', 
                            onClick: closeMenu 
                        }, 'Contato')
                    )
                )
            )
        )
    );
};

export default Header;