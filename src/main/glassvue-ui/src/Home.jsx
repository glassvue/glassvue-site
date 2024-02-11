import { useEffect } from "react";
import HeadSection from "./components/HeadSection"
import { useGlobalContext } from "./context"
import { styled } from "styled-components";
import { FaCloudflare, FaDesktop, FaFileAlt, FaMobileAlt, FaPencilAlt, FaRegWindowMaximize } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <Wrapper>
      <HeadSection />
      <div className="main-title">
        <h2 className="common-heading"> WORK ENVIRONMENT </h2>

        <hr />

        <h3 className="head-intro">
          Increase your productivity by highly motivated professionals
        </h3>
        <div className="container grid grid-three-column">

          <div className="grid-item">
            <div>
              <NavLink to="/service">
                <div className="icon-parent">
                  <FaDesktop className="icons" />
                </div>
                <h3>Web Application Development</h3>
              </NavLink>
            </div>
            <div>
              <NavLink to="/service">
                <div className="icon-parent">
                  <FaFileAlt className="icons" />
                </div>
                <h3>Staffing</h3>
              </NavLink>
            </div>
          </div>
          <div className="grid-item">
            <div>
              <NavLink to="/service">
                <div className="icon-parent">
                  <FaMobileAlt className="icons" />
                </div>
                <h3> Mobile App Development</h3>
              </NavLink>
            </div>
            <div>
              <NavLink to="/service">
                <div className="icon-parent">
                  <FaPencilAlt className="icons" />
                </div>
                <h3>Training</h3>
              </NavLink>
            </div>
          </div>
          <div className="grid-item">
            <div>
              <NavLink to="/service">
                <div className="icon-parent">
                  <FaRegWindowMaximize className="icons" />
                </div>
                <h3>Website Development</h3>
              </NavLink>
            </div>
            <div>
              <NavLink to="/service">
                <div className="icon-parent">
                  <FaCloudflare className="icons" />
                </div>
                <h3>Cloud Services</h3>
              </NavLink>
            </div>

          </div>


        </div>
      </div>

    </Wrapper >
  )
}

const Wrapper = styled.section`
.main-title {
  margin-top: 3rem;
}

.head-intro {
  text-align: center;
  margin-bottom: 4rem;
}
.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6rem;

  h3{
    cursor: pointer;
  }
  
}

.icon-parent {
  margin: 2rem;
  border: 1px solid #d6d6d6;
  border-radius: 50%;
  cursor: pointer;
}

.icons {
  color: ${({ theme }) => theme.colors.icon_special};
  font-size: 12rem;
  position: relative;
  cursor: pointer;
  margin: 3rem;
}
`;

export default Home