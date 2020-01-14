import styled from 'styled-components';
// import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  // background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  padding: .25rem 0;
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

  @media (min-width:700px) {
  .container-1 {
    display: flex;
  }

  .container-1 div {
    padding: 40px;
  }
}

  h1 {
    font-size: 20px;
    font-height: 24px;
    font-weight: 700;
  }

  .Skills_Header {
    color: #007bff;
    margin-bottom: 1rem;

  }

  .Skills_Label {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 900;
    line-height: 24px;
    color: #36363c;
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
