import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import styles from './Contato.module.css';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    motivo: '',
    cep: '',
    numero: '',
    complemento: '',
    tipoAtendimento: '',
    email: '',
    telefone: '',
    whatsapp: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleConsultaCep = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`);
      if (response.data.erro) {
        setErrorMessage('CEP não encontrado.');
      } else {
        setFormData({
          ...formData,
          logradouro: response.data.logradouro,
          bairro: response.data.bairro,
          cidade: response.data.localidade,
          estado: response.data.uf
        });
      }
    } catch (error) {
      setErrorMessage('Erro ao buscar o endereço.');
      console.error('Erro ao buscar o endereço:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!formData.nome || !formData.motivo || !formData.numero || !formData.tipoAtendimento || !formData.email || !formData.telefone || !formData.whatsapp) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    if (!formData.cep || !formData.logradouro || !formData.bairro || !formData.cidade || !formData.estado) {
      setErrorMessage('Por favor, consulte o CEP antes de enviar.');
      return;
    }
    sendEmail();
  };

  const sendEmail = () => {
    const templateParams = {
      nome: formData.nome,
      motivo: formData.motivo,
      cep: formData.cep,
      logradouro: formData.logradouro,
      bairro: formData.bairro,
      cidade: formData.cidade,
      estado: formData.estado,
      numero: formData.numero,
      complemento: formData.complemento,
      tipoAtendimento: formData.tipoAtendimento,
      email: formData.email,
      telefone: formData.telefone,
      whatsapp: formData.whatsapp,
      to_email: 'fernando.tonehunter@gmail.com',
    };

    emailjs
      .send(
        'service_4to3796',
        'template_feboaic',
        templateParams,
        'hZQ0sHHfHsR7a9mi1'
      )
      .then(
        (response) => {
          console.log('Email enviado com sucesso!', response.status, response.text);
          setIsEmailSent(true);
          setFormData({
            nome: '',
            motivo: '',
            cep: '',
            numero: '',
            complemento: '',
            tipoAtendimento: '',
            email: '',
            telefone: '',
            whatsapp: '',
            logradouro: '',
            bairro: '',
            cidade: '',
            estado: ''
          });
        },
        (error) => {
          console.error('Erro ao enviar email:', error);
          setErrorMessage('Erro ao enviar o email. Por favor, tente novamente.');
        }
      );
  };

  return (
    <div className={styles['main-container']}>
      <div className={styles['atendimento-form']}>
        <h1>Contato</h1>
        <br/>
        <p>Conheça nosso estúdio ou receba nossa visita.</p>
        <p>Entre em contato conosco e realize seu agendamento.</p>
        <p>Preencha o formulário, retornaremos o contato em até 48h.</p>
        <br/>
        <form onSubmit={handleSubmit}>
          <div className={styles['form-container']}>
            <label>
              Nome:
              <br/>
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
            </label>
          </div>
          
          <div className={styles['form-container']}>
            <label>
              Motivo do Contato:
              <br/>
              <input type="text" name="motivo" value={formData.motivo} onChange={handleChange} required />
            </label>
          </div>
          
          <div className={styles['form-container']}>
            <label>
              CEP:
              <br/>
              <input type="text" name="cep" value={formData.cep} onChange={handleChange} required />
            </label>
            <br/>
            <button type="button" onClick={handleConsultaCep}>Consultar CEP</button>
          </div>
          <br/>
          <div className={styles['form-container']}>
          <label>
                  Logradouro:
                  <br/>
                  <input type="text" name="logradouro" value={formData.logradouro} onChange={handleChange} />
                </label>
                <br/>
            <label>
              Número:
              <br/>
              <input type="text" name="numero" value={formData.numero} onChange={handleChange} required />
            </label>
            <br/>
            <label>
              Complemento:
              <br/>
              <input type="text" name="complemento" value={formData.complemento} onChange={handleChange} />
            </label>
            <br/>
            <label>
                  Bairro:
                  <br/>
                  <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} />
                </label>
                <br/>
                <label>
                  Cidade:
                  <br/>
                  <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} />
                </label>
                <br/>
                <label>
                  Estado:
                  <br/>
                  <input type="text" name="estado" value={formData.estado} onChange={handleChange} />
                </label>
          </div>
          
          
          
          <div className={styles['form-container']}>
            <label>
              E-mail:
              <br/>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
          </div>
          
          <div className={styles['form-container']}>
            <label>
              Telefone com DDD:
              <br/>
              <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} required />
            </label>
          </div>
          
          <div className={styles['form-container']}>
            <label>
              WhatsApp com DDD:
              <br/>
              <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
            </label>
            
            <label>
            <br/>
              Tipo de Atendimento:
              <br/>
              <select name="tipoAtendimento" value={formData.tipoAtendimento} onChange={handleChange} required>
                <option value="">Selecione...</option>
                <option value="Agendar">Agendar Atendimento</option>
                <option value="Domicílio">Atendimento a Domicílio</option>
              </select>
            </label>
            
          </div>
          
          <button type="submit">Enviar Dados por Email</button>
        </form>
        {errorMessage && <p className={styles['errorMessage']}>{errorMessage}</p>}
        {isEmailSent && <p className={styles['successMessage']}>Email enviado com sucesso!</p>}
      </div>
    </div>
  );
}

export default Contato;
