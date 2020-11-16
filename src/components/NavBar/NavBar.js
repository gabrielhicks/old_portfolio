import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavLogo, NavLinkMobile, MenuIcon, Times, NavItem } from './NavStyle';

class Navbar extends React.Component {
    state = {
        clicked: false
    }

    clickHandler = () => {
        this.setState(()=>({clicked: !this.state.clicked}))
    }

    closeMenu = () => {
        this.setState(()=>({clicked: false}))
    }

    closeMenuLogOut = (e) => {
        this.setState(()=>({clicked: false}))
        this.props.logoutHandler(e)
    }

    onMouseEnter = () => {
        if (window.innerWidth < 960) {
            this.setState(()=>({dropdown: false}))
        } else {
            this.setState(()=>({dropdown: true}))
        }
    };

    onMouseLeave = () => {
        if (window.innerWidth < 960) {
            this.setState(()=>({dropdown: false}))
        } else {
            this.setState(()=>({dropdown: true}))
        }
    }

    itemCount = () => {
        let items = 0;
        for (const item of this.props.cart) {
            items += parseInt(item.quantity)
        }
        return items
    }


    render() {
        return (
        <>
            <Nav>
                <NavLogo onClick={this.closeMenu} to="/"><img alt="Gabriel Hicks logo" src="https://i.ibb.co/4FcHSGV/gabriel-logo.webp"/></NavLogo>
                <MenuIcon onClick={this.clickHandler}>
                    {this.state.clicked ? <Times /> : <Bars />}
                </MenuIcon>
                {this.state.clicked ? 
                    <NavMenu className="active">
                    <NavItem><NavLink onClick={this.closeMenu} to="/projects">Projects</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/about">About Me</NavLink></NavItem>
                    <NavItem><NavLinkMobile onClick={this.closeMenu} to="/contact">Contact</NavLinkMobile></NavItem>
                    </NavMenu>
                : 
                    <NavMenu>
                    <NavItem><NavLink onClick={this.closeMenu} to="/projects">Projects</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/about">About Me</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/contact">Contact</NavLink></NavItem>
                    </NavMenu>
                }
                {/* <NavBtn>
                    <NavBtnLink to='/login'>sign in</NavBtnLink>
                </NavBtn> */}
            </Nav>
            </>
        )
    }
};

export default Navbar