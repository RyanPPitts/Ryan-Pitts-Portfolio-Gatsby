import styled from 'styled-components';
// import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
  padding-bottom: 1rem;
  // background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
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
    width: 100%;
    margin-bottom: 2rem;
  }

  .intro_button {
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 40px;
    line-height: 60px;
    font-weight: 300;
    color: #444452;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h2 {
    margin-bottom: 2.5rem;
    font-size: 40px;
    line-height: 60px;
    font-weight: 300;
    line-height: 60px;
    padding-right: 25%;
    color: #444452;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 40px;
    font-weight: 900;
    color: #444452;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
