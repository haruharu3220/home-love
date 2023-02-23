import styled from 'styled-components'

const Sdiv = styled.div`
    width:100%;
    background-color:blue;
    height:2rem;
`



const H1 = styled.h1`
    color:red;
`

export const Footer = () =>{
    return(
        <Sdiv>
                <H1>
                    Hello world!
                </H1>
        </Sdiv>
    );


}