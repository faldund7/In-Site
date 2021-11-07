import styled, { css } from 'styled-components';

const ArticleCard = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 1rem;
    background: #053868;
`

const TextCard = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 1rem;
    background: #053868;
`

const TextCardTitle = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
`

const TextCardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: black;
`

const HeaderCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: black;
`

const Insights = function(){
    return(
    <div>
        <div className="box-wrapper">
            <TextCard>
                <TextCardTitle>How we decided on this result</TextCardTitle>
                <TextCardContent>It is a long established fact that a reader will be distracted by the readable content of a 
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using 'Content here, content here', making it look like readable English.
                </TextCardContent>
            </TextCard>
            <ArticleCard></ArticleCard>
        </div>
        <div className="box-wrapper">
            <TextCard>
                <TextCardTitle>Why this is important</TextCardTitle>
                <TextCardContent>It is a long established fact that a reader will be distracted by the readable content of a 
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using 'Content here, content here', making it look like readable English.
                </TextCardContent>
            </TextCard>
            <ArticleCard></ArticleCard>
        </div>
    </div>
        
    );
}

export default Insights;