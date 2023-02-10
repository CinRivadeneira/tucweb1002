import React, { useState } from 'react';
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from './Navbar.elements';
import Banner from "../Img/Banner.png"
import { FaBars, FaHome, FaUsers, FaMailBulk, FaRegIdCard, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <img src={Banner} alt="Logo" />
                </LogoContainer>


                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {showMobileMenu ? <FaTimes /> : <FaBars /> }

                </MobileIcon>

                <Menu open={showMobileMenu} >
                    

                    <MenuItem>
                        <MenuItemLink href='/inicio'>
                            <div>
                                <FaHome />
                            </div>
                            Inicio
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink href="/quienessomos">
                            <div>
                                <FaUsers />
                            </div>
                            Quienes somos
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink href="/contacto">
                            <div>
                                <FaMailBulk />
                            </div>
                            Contacto
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink href="/usuarios">
                            <div>
                                <FaRegIdCard />
                            </div>
                            Usuarios
                        </MenuItemLink>
                    </MenuItem>

                </Menu>

            </Wrapper>

        </Container>
    )
}

export default Navbar;
