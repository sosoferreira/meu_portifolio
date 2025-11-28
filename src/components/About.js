import React from 'react';
import eu from './img/eu.jpg';


const About = () => {
    return (
        <section id="sobre-mim" className="sobre-mim section-padding">
            <div className="container">
                <h3 className="section-title">👱🏻‍♀️ Sobre Mim</h3>
                <div className="content-wrapper">
                    <div className="text-content">
                        <p>Minha paixão está na intersecção entre o pixel perfeito e o código otimizado. Busco sempre soluções que sejam visualmente atraentes e tecnicamente robustas.</p>
                        <p>Mais detalhes sobre minha jornada e o que me motiva...</p>
                        <div className="skills">
                            <span className="skill-tag design">UI/UX Design</span>
                            <span className="skill-tag dev">Desenvolvimento Frontend</span>
                            <span className="skill-tag tool">Figma</span>
                            <span className="skill-tag design">Design System</span>
                            <span className="skill-tag dev">JavaScript</span>
                            <span className="skill-tag tool">React</span>
                        </div>
                    </div>

                    <div className="image-placeholder">
                        <img 
                            src={eu} 
                            alt="Minha foto profissional" 
                            className="foto-perfil"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
