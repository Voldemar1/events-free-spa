import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './EventDetailFooter.scss';

import Location from '../Location/Location';
import Map from '../Location/Map';

import Contacts from '../Contacts/Contacts';

import SocialButtons from 'components/SocialButtons/SocialButtons';

const propTypes = {
//locaton
// title
// id
// contacts
}

class EventDetailFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowMap: false,
    }

    this.handleClick = this.handleClick.bind(this); 

  }

  handleClick() {
    this.setState({ isShowMap: !this.state.isShowMap });
  }



  render() {
      const { title, location, id, contacts } = this.props;
    return (

        <div className="additional-info">
            <div className="first-row">
                <SocialButtons
                link={`http://www.eventsfree.by/event/${id}`}
                title={title}
                isShowCount={false}
            />
            {contacts && Object.keys(contacts).length > 0 && <Contacts contacts={contacts} />}
            {location && 
            <div>
                    <Location location={location}   />
                    <button  className="btn-link" onClick={this.handleClick}>{!this.state.isShowMap ? 'Показать на карте' : 'Скрыть'} </button>

            </div>}
            </div>
          
        {this.state.isShowMap &&       <Map location={this.props.location} />}
        
        </div>

    )
  }
}

EventDetailFooter.propTypes = propTypes;

export default EventDetailFooter;