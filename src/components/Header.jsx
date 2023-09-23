import { AppBar , Toolbar, styled } from '@mui/material';



const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

export default function Header () {

    // const logo = '../code'
    return(
        <Container position='static'>
            <Toolbar>
            </Toolbar>
        </Container>
    )
}