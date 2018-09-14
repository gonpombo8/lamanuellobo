import React, { Component } from 'react';

import Row from '../components/row';
import Title from '../components/title';

class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = { name: '', email: '', tel: '', message: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTelChange = this.handleTelChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  render() {
    const { name, email, tel, message } = this.state;
    return (
        <Row>
          <Title title="Formulario de Contacto" />
          <form role="form" onSubmit={this.handleSubmit} >
            <input style={{display: 'none'}} name="subject" value="Consulta"/>
            <div className="container">
              <div className="row">
                <div className="form-group col-lg-5 col-lg-offset-1 col-md-5 col-sm-5 col-sm-offset-1 col-md-offset-1">
                  <div className="from-group mt30 text-center">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input placeholder="NOMBRE" value={name} onChange={this.handleNameChange} className="form-control" type="text" />
                    </div>
                  </div>
                <div className="form-group mt30 text-center">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                    <input placeholder="EMAIL" className="form-control" type="text" value={email} onChange={this.handleEmailChange} />
                  </div>
                </div>
                <div className="form-group mt30 text-center">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                    <input placeholder="TELÉFONO" className="form-control" type="text" value={tel} onChange={this.handleTelChange} />
                  </div>
                </div>
              </div>
              <div className="form-group col-lg-5 col-md-5 col-sm-5 mt30 text-center">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-comment"></i></span>
                  <textarea className="form-control" style={{height: '164px'}} rows="6" value={message} onChange={this.handleMessageChange} ></textarea>
                </div>
              </div>
                <div className="form-group col-lg-12 text-center">
                  <button type="submit" className="btn btn-info">Enviar <span className="glyphicon glyphicon-send"></span></button>
                </div>
            </div>
            </div>
          </form>
        </Row>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, tel, message } = this.state;
    if (!name || !email || !tel || !message)
      return this.setState({ error: true })

    this.setState({ error: false });

    const payload = { name, email, tel, message };
    const postHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    };

    fetch('/contacts', {
      method: 'POST',
      headers: postHeaders,
      body: JSON.stringify(payload),
    });
  }

  handleNameChange(e) {
    const name = e.target.value;
    this.setState({ name });
  }
  handleEmailChange(e) {
    const email = e.target.value;
    this.setState({ email });
  }
  handleTelChange(e) {
    const tel = e.target.value;
    this.setState({ tel });
  }
  handleMessageChange(e) {
    const message = e.target.value;
    this.setState({ message });
  }
};

export default ContactForm;
