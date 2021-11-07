import styled, { css } from 'styled-components';

const ArticleCard = styled.div`
    height: 200px;
    width: 300px;
    border-radius: 1rem;
    background: #053868;
`

const TextCard = styled.div`
    height: 200px;
    width: 300px;
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
    padding-left: 30px;
    padding-right: 30px;
    font-size: 10px;
    color: black;
`

const ArticleCardTitle = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
`

const ArticleCardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
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
            <ArticleCard>
                <ArticleCardTitle>Why Cheese is out for your money</ArticleCardTitle>
                <ArticleCardContent>The cheese mafia will murder your family and steal everything from you. They hate you and your non-cheese ways. 
                    I hope you die in a bucket of cheese where you belong. It’s delicous. I envy you and your cheese bucket death. 
                    Some of us don’t get to die a hero. But you, you will die in a cheese bucket.
                </ArticleCardContent>
            </ArticleCard>
        </div>
        <div className="box-wrapper">
            <TextCard>
                <TextCardTitle>Why this is important</TextCardTitle>
                <TextCardContent>It is a long established fact that a reader will be distracted by the readable content of a 
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using 'Content here, content here', making it look like readable English.
                </TextCardContent>
            </TextCard>
            <ArticleCard>
                <ArticleCardTitle>Why Cheese is out for your money</ArticleCardTitle>
                <ArticleCardContent>The cheese mafia will murder your family and steal everything from you. They hate you and your non-cheese ways. 
                    I hope you die in a bucket of cheese where you belong. It’s delicous. I envy you and your cheese bucket death. 
                    Some of us don’t get to die a hero. But you, you will die in a cheese bucket.
                </ArticleCardContent>
            </ArticleCard>
        </div>
    </div>
        
    );
}

export default Insights;