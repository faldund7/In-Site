import styled, { css } from 'styled-components';

const TextCard = styled.div`
    height: 200px;
    width: 300px;
    background: none;
    display: flex;
    flex-wrap: wrap;
    align-content: left;
    margin-right: 1.5rem;
    margin-left: -1rem;
`

const TextCardTitle = styled.div`
    margin-top: 2rem;
    margin-left: 1rem;
    color: #053868;
    font-size: 15px;
    font-family: Helvetica;
    font-weight: bold;
`

const TextCardContent = styled.div`
    margin-top: -1rem;
    margin-left: 1rem;
    margin-bottom: 1.5rem;
    font-size: 10px;
    color: #7b7b7b;
    font-family: 'Montserrat';
`

const ArticleCard = styled.div`
    height: 150px;
    width: 350px;
    background: #F8F8F8;
    display: flex;
    flex-wrap: wrap;
    align-content: left;
    margin-top: 1rem;
    border-radius: 2rem;
`

const ArticleCardTitle = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: 1.5rem;
    color: #7B7B7B;
    font-size: 13px;
    font-family: 'Montserrat';
    font-weight: bold;
`

const ArticleCardContent = styled.div`
    font-size: 10px;
    color: #7b7b7b;
    font-family: Montserrat;
    margin-top: -1rem;
    margin-left: 1rem;
    margin-bottom: 1.5rem;
    margin-right: 1rem;
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
                <TextCardContent>inSite is trained on hundreds of examples of false information expertly procured by
                researchers for a study published in Frontiers in Psychology to identify COVID-19 misinformation. Using Machine Learning,
                we are able to determine the likelihood that a given input is true or not.
                </TextCardContent>
            </TextCard>
            <ArticleCard>
                <ArticleCardTitle>Cheese is one dangerous little guy</ArticleCardTitle>
                <ArticleCardContent>The cheese mafia will murder your family and steal everything from you. They hate you and your non-cheese ways. 
                    I hope you die in a bucket of cheese where you belong. It’s delicous. I envy you and your cheese bucket death. 
                    Some of us don’t get to die a hero. But you, you will die in a cheese bucket.
                </ArticleCardContent>
            </ArticleCard>
        </div>
        <div className="box-wrapper">
            <TextCard>
                <TextCardTitle>Why this is important</TextCardTitle>
                <TextCardContent>The COVID-19 pandemic has been devastating for the world. Our mission is to identify
                    COVID-19 misinformation and to equip people with helpful information. By combatting these falsities, we hope
                    to educate people with trustworthy information. It's important for everyone to work together in order to fully emerge 
                    from this epidemic.
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