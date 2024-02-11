import { useEffect } from "react";
import HeadSection from "./components/HeadSection";
import { useGlobalContext } from "./context";
import { styled } from "styled-components";

const Contact = () => {
  const { updateContactPage } = useGlobalContext();

  useEffect(() => updateContactPage(), []);
  return (
    <Wrapper>
      <HeadSection />
      <div className="container grid grid-two-column">
        <div className="contact-form">
          <h3 className="common-heading"> Get in touch</h3>
          <form className="contact-inputs" action="https://formspree.io/f/xoqoaeev" method="POST">
            <input type="text" name="name" placeholder="Name" autoComplete="off" required />
            <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
            <textarea name="message" placeholder="Message" cols="30" rows="6" required />
            <input type="submit" value="Send" className="button" />
          </form>
        </div>
        <div className="contact-sub-info">
          <h3 className="common-heading"> location </h3>
          <iframe allowFullScreen
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEzvufpRdYBNtiDMjaml4yWaFHmiKU8wE&q=Denver,CO&attribution_source=Google+Maps+Embed+API&attribution_ios_deep_link_id=comgooglemaps://?daddr=Fairmont+Empress,+Victoria,+BC"
            style={{height: "50%", width: "100%"}}
          />

          
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  .contact-form {
    
    text-align: center;    
    margin-top: 3rem;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
}

.contact-sub-info{
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;   
}
`;

export default Contact