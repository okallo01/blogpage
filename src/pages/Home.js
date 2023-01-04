import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ReorderIcon from '@material-ui/icons/Reorder';


export default class Home extends React.Component {
  render() {
    return (
        <div className={"homeitem"}>
            <div>
              <h2 className={"h2home"}><ShoppingCartIcon fontSize='large'/> Products</h2>
              <p>We sell products of different kinds</p>
            </div>
            <div className={"spacing"}>
              <h2><Diversity1Icon fontSize='large'/> Service</h2>
              <p>We offer unique services</p>
            </div>
            <div className={"spacing"}>
              <h2> <AccountCircleIcon fontSize='large'/> About us</h2>
              <p>Learn more about our company</p>
            </div>
            <div className={"spacing"}>
              <h2> <PermContactCalendarIcon fontSize='large'/> Contact</h2>
              <p>Feel free to reach out with any question</p>
            </div>
            <div className={"spacing"}>
              <h2><ReorderIcon fontSize='large'/></h2>
              <p>click top left</p>
            </div>
        </div>
    )
  }
};