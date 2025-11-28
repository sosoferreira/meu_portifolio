import React, { useState } from 'react';

const Contact = function() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = function(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = function(e) {
        e.preventDefault();
        
        const subject = 'Mensagem do Portfólio - ' + formData.name;
        const body = formData.message + '%0D%0A%0D%0A---%0D%0ADados de contato:%0D%0ANome: ' + formData.name + '%0AEmail: ' + formData.email;
        
        const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=soso.alcantara4@gmail.com&su=' + subject + '&body=' + body;
        
        window.open(gmailUrl, '_blank');
        
        setFormData({ name: '', email: '', message: '' });
    };

    return React.createElement('section', { id: 'contato', className: 'contato section-padding' },
        React.createElement('div', { className: 'container' },
            React.createElement('h3', { className: 'section-title white-text' }, '📧 Vamos Construir Algo Incrível Juntos?'),
            React.createElement('p', { className: 'white-text contact-description' },
                'Entre em contato para discutir seu próximo projeto ou apenas para trocar ideias!'
            ),
            React.createElement('form', { className: 'contact-form', onSubmit: handleSubmit },
                React.createElement('div', { className: 'form-group' },
                    React.createElement('input', { 
                        type: 'text', 
                        name: 'name',
                        placeholder: 'Seu Nome Completo', 
                        value: formData.name,
                        onChange: handleChange,
                        required: true
                    })
                ),
                React.createElement('div', { className: 'form-group' },
                    React.createElement('input', { 
                        type: 'email', 
                        name: 'email',
                        placeholder: 'seu@email.com', 
                        value: formData.email,
                        onChange: handleChange,
                        required: true
                    })
                ),
                React.createElement('div', { className: 'form-group' },
                    React.createElement('textarea', { 
                        name: 'message',
                        placeholder: 'Sua mensagem...', 
                        rows: '6',
                        value: formData.message,
                        onChange: handleChange,
                        required: true
                    })
                ),
                React.createElement('button', { type: 'submit', className: 'send-button' },
                    React.createElement('i', { className: 'fab fa-google' }),
                    ' ENVIAR VIA GMAIL'
                )
            ),
            React.createElement('div', { className: 'social-links' },
                React.createElement('p', { className: 'white-text' }, 'Ou me encontre no:'),
                React.createElement('a', { 
                    href: 'https://github.com/asoferr', 
                    target: '_blank', 
                    rel: 'noopener noreferrer', 
                    className: 'github-link'
                },
                    React.createElement('i', { className: 'fab fa-github' }),
                    ' GitHub'
                )
            )
        )
    );
};

export default Contact;