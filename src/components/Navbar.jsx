import React from 'react'
import styled from 'styled-components'

const Container = styled.div`height: 60px;`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
flex: 1;
`
const Right = styled.div`
flex: 1;
`
const MenuItems = styled.div`
    display: flex;
    justify-content: space-between;

`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <MenuItems>
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">Promotions</a></li>
                    </ul>
                    </MenuItems>
                </Left>
                <Center>Search</Center>
                <Right>Login</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar