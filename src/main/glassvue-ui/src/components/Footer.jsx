import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { styled } from "styled-components";
import { FaLinkedinIn, FaFacebook, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (

    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started?</h3>
            <h3>Connect With Us Today</h3>
          </div>

          <div className="get-in-touch">
            <NavLink to="/contact">
              <Button> Get In Touch </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer Section */}

      <footer>
        <div className="container grid grid-four-column">

          <div className="footer-about">
            <h3>About Us</h3>
            <p>GlassVue is team of Highly Motivated to provide 100% Client Satisfaction with cutting edge tools and technologies.</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="" target="_blank">
                  <FaLinkedinIn className="icons" />
                </a>
              </div>
              <div>
                <a href="" target="_blank">
                  <FaFacebook className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call US</h3>
            <div className="footer-contact--icons">
              <FaMobileAlt className="icons" /> &nbsp; &nbsp;
              <h3>720 900 1681</h3>
            </div>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} GlassVue. All Rights Reserved.
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
};

const Wrapper = styled.section`
.contact-short {
  max-width: 60%;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(50%);

  .get-in-touch{
    justify-self: end;
    align-self: center;
  }
}
footer {
  padding: 14rem 0 9rem 0;
  background-color: ${({ theme }) => theme.colors.footer_bg};

  h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 2.4rem;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
  }
  .footer-social--icons {
    display: flex;
    gap: 2rem;

    div {
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};
    }
  }
  .icons {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    position: relative;
    cursor: pointer;
  }
  .footer-bottom--section {
    padding-top: 3rem;

    hr {
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
      width: 100%;
    }
  }
  .footer-subscribe{
    display: grid;
  }
  .footer-contact--icons{
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
}
`;

export default Footer