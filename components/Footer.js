import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Sofia Alcântara Ferreira</h4>
                        <p>Desenvolvedora Front-End & UI/UX Designer</p>
                        <p>Criando experiências digitais incríveis com código e design.</p>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Contato</h4>
                        <p>📧 soso.alcantara4@gmail.com</p>
                        <p>📱 (11) 99721-7871</p>
                        <p>📍 São Paulo, Brasil</p>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Redes Sociais</h4>
                        <div className="social-links-footer">
                            <a href="https://github.com/asoferr" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i> GitHub
                            </a> 
                            <a href="https://www.instagram.com/sosoaf_/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Links Rápidos</h4>
                        <a href="#sobre-mim">Sobre Mim</a>
                        <a href="#projetos">Projetos</a>
                        <a href="#contato">Contato</a>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sofia Alcântara Ferreira. Todos os direitos reservados.</p>
                    <p>Desenvolvido com 💜 e React</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;