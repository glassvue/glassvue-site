import { useEffect } from "react";
import HeadSection from "./components/HeadSection"
import { useGlobalContext } from "./context";
import { styled } from "styled-components";

const About = () => {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => updateAboutPage(), []);
  return (
    <Wrapper>
      <HeadSection />
      <div className="main-title">
        <h2 className="common-heading"> Who We are </h2>

        <hr />

        <h3 className="head-intro">
          GlassVue make software for business that want to be more profitable, efficient and agile.
        </h3>
        <div className="container grid grid-two-column">
          <div className="paragraph">
            <p className="para1">
            GlassVue is team of highly motivated experienced software developer sharing common Goal - innovation, excellence and 100% client satisfaction with client and customer business success using cutting edge latest tools and technologies. We do believe in transformative power of new tools and technologies. We make software for business that want to be more profitable, efficient and Agile.
            </p>
          </div>
          <div className="paragraph">
            <p className="para2">
            We do work by keeping in mind our mission and vision statements. We don’t compromise with software products and services quality and deliver bug free, efficient products and services. We always maintain our core values, awesome work culture with highly motivated team. We do providing services like Web Development, Website Designing and Development, Mobile App development, IT Staffing, IT Training and Cloud Services.
            </p>
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
.common-heading {
  text-transform: uppercase;
}
.head-intro {
  text-align: center;
  margin-bottom: 4rem;
}
.paragraph {
  text-align: justify;
}
`;

export default About