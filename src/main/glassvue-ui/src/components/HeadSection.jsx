import { NavLink } from 'react-router-dom'
import { Button } from "../styles/Button";
import { styled } from 'styled-components';
import { useGlobalContext } from "../context"

const HeadSection = () => {

  const { name, image, isButton } = useGlobalContext();

  return (
    <Wrapper >
      <div className="grid head-img" style={{ backgroundImage: `url(${image})` }} >
        <div className="section-head-data grid-three-row">
          {/* <h1 className="head-name">HOME</h1> */}
          <h1 />
          <h1 className="head-data">{name}</h1>
          {isButton ? <NavLink to="/contact" disabled>
            <Button className="btn get-in-touch" disabled>
              Get In Touch
            </Button></NavLink> : <h1 />
          }
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  .section-head-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    place-items: center;
    max-width: 100%;
    background: rgba(29, 43, 83, 0.5);
  }

  .btn {
    max-width: 18rem;
    color: #000;
    background: none;
    border: 2px solid  #fff;
    padding: 10px 20px !important;
  }

  .head-name {
    text-transform: uppercase;
    font-weight: 1000;
    font-size: 6.4rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .head-data {
    color: rgb(255 255 255);
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 85rem;
  }

  .head-img {
    height: 400px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    float: center;
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }


  }`;

export default HeadSection