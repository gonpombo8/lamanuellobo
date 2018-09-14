import React, { Component } from 'react';

import Row from '../components/row';
import Title from '../components/title';

const TitleDesc = <div>
  <p>Telefono: <strong>+598 4522 2463</strong></p>
  <p>Email: <strong><a href="mailto:posada@lamanuellobo.com">posada@lamanuellobo.com</a></strong></p>
  <p>Dirección: <strong>Ituzaingó 160, Colonia del Sacramento</strong></p>
</div>;

export default class ContactInfo extends Component {
  render() {
    return (
      <div>
        <Row>
          <Title
            className="contact-info-title"
            title={TitleDesc}
          />
          <div className="col-lg-12 mt30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.243713576057!2d-57.849554100000006!3d-34.4713412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3125d6adcc1cf%3A0x66c1cfc87711d656!2sPosada+Manuel+de+Lobo!5e0!3m2!1ses!2sar!4v1514483225830"
              width="100%"
              height="450"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              style={{border: 0}}
              />
          </div>
        </Row>
      </div>
    );
  }
};
