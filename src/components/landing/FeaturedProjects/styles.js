import styled from 'styled-components';

export const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  background-color: #e0e0e0;
`;

export const SkillsWrapper = styled.div`
  
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 20px;
    font-height: 24px;
    font-weight: 700;
        color: #007bff;

  }

 

  .className="Featured_Text" {
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    color: #444452;
  }

  .Featured_Title {
    color: #36363c;
    font-size: 18px;
    font-weight: 900;
    line-height: 24px;

  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
