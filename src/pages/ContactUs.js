import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import 'bootstrap/dist/css/bootstrap.min.css';

  
export default class Contact extends React.Component {
  render() {
    
    return (
        <div className={"homeitem"}>
          <div>
            <h2><FacebookIcon fontSize='large' htmlColor='#3b5998'/> @Hooperkal</h2>
          </div>
          <div className={"spacing"}>
            <h2><TwitterIcon fontSize='large' htmlColor='#00acee'/> @Hooperkal</h2>
          </div>
          <div className={"spacing"}>
            <h2><InstagramIcon fontSize='large' htmlColor='#e95950'/> @Hooperkal</h2>
          </div>
          <div className={"spacing"}>
            <h2><PhoneIcon fontSize='large'/> comming soon !!</h2>
          </div> 
          <div className={"spacing"}>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Comment:</label>
              </div>
              <div>
                <textarea/>
              </div>
              <input type="submit" className="btn btn-primary" value="Submit"/>
            </form>
          </div>
        </div>
    )
    
  }
};