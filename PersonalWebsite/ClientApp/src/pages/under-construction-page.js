import styled from "styled-components";
import NextChevronIcon from '../svg/next-chevron-icon';
import breakpoints from '../helpers/breakpoints';

const ContainerBackground = styled.div`
  background-image: url("stock-images/construction-background.jpg");
  background-size: cover;
  background-position: center;
  filter: blur(1px) brightness(60%);

  z-index: -1;
  position: absolute;
  top: -1rem;
  bottom: -1rem;
  left: -1rem;
  right: -1rem;
`;

const LetInLink = styled.a`
  color: whitesmoke;
  fill: whitesmoke;

  p {
    margin-right: 0.2rem;

    transition-duration: 0.3s;
  }

  transition-duration: 0.3s;

  :hover {
    color: whitesmoke;
    text-decoration: underline;

    p {
      margin-right: 0.6rem;
    }
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  color: whitesmoke;

  overflow: hidden;

  h1 {
    font-size: 1.8rem;

    @media(min-width: ${() => breakpoints.medium}) {
      font-size: 2.4rem;
    }
  }

  .subtitle {
    font-size: 1.4rem;

    @media(min-width: ${() => breakpoints.medium}) {
      font-size: 1.6rem;
    }
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const UnderConstructionPage = () => {
  return(
    <Container className='d-flex justify-content-center align-items-center'>
      <ContainerBackground />
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-center m-0'>🚧 Under Construction 🚧</h1>
        <p className='text-center subtitle mb-1'>Massive overhaul underway</p>
        <LetInLink href='landing' className='w-auto d-block text-center'>
          <p className="d-inline my-auto d-inline">let me in anyway</p>
          <NextChevronIcon />
        </LetInLink>
      </div>
    </Container>
  );
};

export default UnderConstructionPage;