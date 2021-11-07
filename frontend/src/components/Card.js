import styled, { css } from 'styled-components';

const Card = styled.div`
    height: 10rem;
    width: 25rem;
    border-radius: 1rem;
    background: #000000;
`

const CardTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12px;
`

const CardContent = styled.div`
    font-size: 12px;
    color: white;
`

const SimpleCard = function(){
    return(
        <Card>
            <CardTitle>Simple Card</CardTitle>
            <CardContent>Simple Card</CardContent>
        </Card>
    );
}

export default SimpleCard;