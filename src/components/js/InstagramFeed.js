import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Instafeed from 'react-instafeed';
import './../css/InstagramFeed.css';

const instafeedTarget = 'instafeed';
const template = `
    <div class="col-md-6 col-xs-6 insta-box">
    <a href='{{link}}' target='_blank' class='instafeed__item'>
        <img class='instafeed__item__background' src='{{image}}' />
    </a>
    </div>
    `;
    
   
export class InstagramFeed extends Component {
    render() {
      return ( 
          <Row id={instafeedTarget}>
                <Instafeed
                    limit='6'
                    ref='instafeed'
                    resolution='standard_resolution'
                    sortBy='most-recent'
                    target={instafeedTarget}
                    template={template}
                    userId={this.props.userId}
                    clientId={this.props.clientId}
                    accessToken={this.props.accessToken}
                />
          </Row>            
      );
    }
  }
//clubdebordadomx
// curl -F 'client_id= 2cc36afa67a54c2db3cbe423e21b932a' \
//     -F 'client_secret=f0fbd6bb72c9402ab1a7d303f397d6f8' \
//     -F 'grant_type=authorization_code' \
//     -F 'redirect_uri=https://g4br13l4.github.io/speligro/' \
//     -F 'code=4018dfb929284a28ab5993278f0eeb2f' \
//     https://api.instagram.com/oauth/access_token
    
//speligro
// curl -F 'client_id=65b3795a54284f08ad8f893042b7fc0c' \
//     -F 'client_secret=c0f221096b244d6186a5a01b3d13cb02' \
//     -F 'grant_type=authorization_code' \
//     -F 'redirect_uri=https://g4br13l4.github.io/speligro/' \
//     -F 'code=82e84122337c40689c60b2ca47f41ada' \
//     https://api.instagram.com/oauth/access_token