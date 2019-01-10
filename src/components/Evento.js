import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Evento extends Component {
  render() {
    const {name} = props.info;

    if(!name) return null;
    let desc = props.info.description.text;

    if(desc.length > 250){
      desc = desc.substr(0, 250);
    }
    return (
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {props.info.logo !== null
            ? <img src={props.info.logo.url} alt={props.info.name.text} />
            : ''}
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.info.name.text}</h3>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}

Evento.propTypes = {
    info: PropTypes.object.isRequired
}

export default Evento;
