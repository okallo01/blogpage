import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

  
export default class Contact extends React.Component {
  render() {
    return (
        <div>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <PhoneIcon/>

        <h1>Contact Us Page</h1>
        <p>Some text about how to contact us.</p>
        </div>
    )
    
  }
};