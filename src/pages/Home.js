import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Home extends React.Component {
  render() {
    return (
        <div className='homepagebox'>
            <h2 className='welcometext'>Welcome!</h2>
            <p className='par'>Our business is driven by customers success.We are here to 
                help you succeed. We sell products and offer personal 
                services.Check out our products and services page for
                more information. Feel free to contact us with any question.
            </p>
        </div>
    )
  }
};