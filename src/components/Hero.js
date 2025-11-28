import React, { useState, useEffect } from 'react';

// Importações das imagens do banner
import banner1 from './img/banner1.png'; 
import banner2 from './img/banner2.png'; 
import banner3 from './img/banner3.png'; 

const images = [banner1, banner2, banner3]; 

const titles = [
    'Transforme sua marca com design profissional',
    'Sites modernos para negócios de sucesso',
    'Sua presença digital elevada ao máximo'
];

const subtitles = [
    'Crie experiências únicas e conquiste clientes com um site incrível.',
    'Design responsivo, rápido e elegante para destacar seu negócio.',
    'Tecnologia, criatividade e resultados para você crescer online.'
];

const Hero = function() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(function() {
        const interval = setInterval(function() {
            setFade(false);
            setTimeout(function() {
                setCurrent(function(prev) { return (prev + 1) % images.length; });
                setTimeout(function() {
                    setFade(true);
                }, 50);
            }, 500);
        }, 5000);
        
        return function() { return clearInterval(interval); };
    }, []);

    const goToSlide = function(idx) {
        setFade(false);
        setTimeout(function() {
            setCurrent(idx);
            setFade(true);
        }, 300);
    };

    const prevSlide = function() { return goToSlide(current === 0 ? images.length - 1 : current - 1); };
    const nextSlide = function() { return goToSlide((current + 1) % images.length); };

    return React.createElement('section', { className: 'hero-carousel novo-hero' },
        React.createElement('div', { className: 'carousel-img-bg' },
            React.createElement('img', { 
                src: images[current], 
                alt: 'Banner', 
                className: 'carousel-img-bg-img' + (fade ? ' fade-in' : ' fade-out')
            }),
            React.createElement('div', { className: 'carousel-bg-overlay' })
        ),
        React.createElement('div', { className: 'carousel-main-content' },
            React.createElement('h1', { className: 'carousel-title' }, titles[current]),
            React.createElement('p', { className: 'carousel-subtitle' }, subtitles[current]),
            React.createElement('a', { href: '#contato', className: 'carousel-cta' }, 'Solicite seu orçamento')
        ),
        React.createElement('button', { className: 'carousel-btn prev', onClick: prevSlide }, '<'),
        React.createElement('button', { className: 'carousel-btn next', onClick: nextSlide }, '>'),
        React.createElement('div', { className: 'carousel-indicators novo-indicators' },
            images.map(function(_, idx) {
                return React.createElement('span', { 
                    key: idx,
                    className: idx === current ? 'active' : '', 
                    onClick: function() { return goToSlide(idx); } 
                });
            })
        )
    );
};

export default Hero;