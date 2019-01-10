import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Evento extends Component {
  render() {
    const {name} = this.props.info;

    if(!name) return null;
    let desc = this.props.info.description.text;

    if(desc.length > 250){
      desc = desc.substr(0, 250);
    }
    return (
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {this.props.info.logo !== null
            ? <img src={this.props.info.logo.url} alt={this.props.info.name.text} />
            : ''}
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{this.props.info.name.text}</h3>
          <p>{desc}</p>
        </div>
        <div className="uk-card-footer">
          <a className="uk-button uk-button-secondary" href={this.props.info.url}
          target='_blank' rel="noopener noreferrer">Más Información</a>
        </div>
      </div>
    );
  }
}

Evento.propTypes = {
    info: PropTypes.object.isRequired
}

export default Evento;
