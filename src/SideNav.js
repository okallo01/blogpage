import React from 'react';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ReorderIcon from '@material-ui/icons/Reorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import "./index.css"



export default class MarerialUIDrawer
	extends React.Component {
constructor(props) {
	super(props);
	this.state = {
	isDrawerOpened: false,
	};
}
toggleDrawerStatus = () => {
	this.setState({
	isDrawerOpened: true,
	})
}
closeDrawer = () => {
	this.setState({
	isDrawerOpened: false,
	})
}
render() {
	const { isDrawerOpened } = this.state;
	return (
	<nav>
		<div className='sideNav'>
			<IconButton onClick={this.toggleDrawerStatus}>
			{!isDrawerOpened ? <ReorderIcon fontSize='large'/> : null }
			</IconButton>
		</div>
		<Divider/>
		<Drawer variant="temporary" open={isDrawerOpened} onClose={this.closeDrawer}>
			<Link to='/' className='link'>
				<List>
				<ListItem button key='Home'>
					<ListItemIcon><HomeIcon/></ListItemIcon>
					<ListItemText primary='Home'/>
				</ListItem>
				</List>
			</Link>
			<Link to='/products' className='link'>
				<List>
				<ListItem button key='Products'>
					<ListItemIcon><ShoppingCartIcon/></ListItemIcon>
					<ListItemText primary='Products'/>
				</ListItem>
				</List>
			</Link>
			<Link to='/services' className='link'>
				<List>
				<ListItem button key='Services'>
					<ListItemIcon><Diversity1Icon/></ListItemIcon>
					<ListItemText primary='Service'/>
				</ListItem>
				</List>
			</Link>
			<Link to='/about' className='link'>
				<List>
				<ListItem button key='About Us'>
					<ListItemIcon><AccountCircleIcon/></ListItemIcon>
					<ListItemText primary='About Us'/>
				</ListItem>
				</List>
			</Link>
			<Link to='/contact' className='link'>
			<List>
				<ListItem button key='Contact Us'>
				<ListItemIcon><PermContactCalendarIcon/></ListItemIcon>
				<ListItemText primary='Contact Us'/>
				</ListItem>
				</List>
			</Link>
		</Drawer>
	</nav>
	);
}
}
