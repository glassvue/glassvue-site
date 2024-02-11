import { useEffect } from "react";
import HeadSection from "./components/HeadSection";
import { useGlobalContext } from "./context";
import { styled } from "styled-components";
import { FaCloudflare, FaDesktop, FaFileAlt, FaMobileAlt, FaPencilAlt, FaRegWindowMaximize } from "react-icons/fa";

const Services = () => {
  const { updateServicePage } = useGlobalContext();

  useEffect(() => updateServicePage(), []);
  return (
    <Wrapper>
      <HeadSection />
      <div className="main-title">
        <h2 className="common-heading"> What we offer </h2>

        <hr />

        <h3 className="head-intro">
          Reach Out And Touch Something.
        </h3>

      </div>
      <div className="container grid">
        <div className="main-row right" id="webappdevelopment">
          <div className="title-card">
            <FaDesktop className="icons" />
            <h3>Web Application Development</h3>
          </div>
          <p className="paragraph">
            <img alt="WebAppDevelopment-img" className="card-img-right" src="../images/WebAppDevelopment.jpg" />
            We develop your Interactive Web Application that meets your 100% business requirements.
            We offer complete cycle custom software development services in all phases of
            development cycle which include Business requirement Analysis, Architecture, Design,
            Deployment, Support and Future Enhancements. Our team of experts is committed to work
            on-site/off-site and deliver the product within the budget as per client’s needs. Web
            Development and Design is one the major services offered by GlassVue and implemented
            stable and scalable applications. We always focus on our Clients’ Success. We do believe
            to use latest cutting edge tools and technologies to develop our Client Web Application.
            We use variety of programming languages like Java, PHP, .NET, Python, Ruby, Perl and
            many more according to our Client request and budgets.
          </p>
        </div>

        <div className="main-row left" id="mobileappdevelopment">
          <div className="title-card">
            <FaMobileAlt className="icons" />
            <h3>Mobile App Development</h3>
          </div>
          <p className="paragraph">
            <img alt="AndroidApple-img" className="card-img-left" src="../images/AndroidApple.jpg" />
            We develop your Mobile App that meets your business requirements and you feel
            comfortable using it on any kind of cellphone.We develop your Application more
            responsive using your existing APIs on IOS and Android platform. We do provide mobile
            testing services and mobile app maintenance. We developed pre built components and micro
            apps which reduce the time taken to market your apps. Our designs are unique and
            technology latest, thus giving a plethora of technological advantage to the end users.
            The mobile apps developed by us has been widely acknowledged as the best one.
          </p>
        </div>

        <div className="main-row right" id="websitedevelopment">
          <div className="title-card">
            <FaRegWindowMaximize className="icons" />
            <h3>Website Development</h3>
          </div>

          <p className="paragraph">
            <img alt="website1-img" className="card-img-right" src="../images/website1.jpg" />
            We develop your business website with uniques and detailed information. We do have
            dedicated experts teams of UI/UX Designers and Developers. we are dedicated to deliver
            creative, scalable and impeccable website design that can work out all your desires of
            having a Web presence. There are several web products such as digital catalog, landing
            pages, ad banners, email flyer and website are needs of a business depending upon their
            intention to meet objective. Deciding a right tool starts with an excellent analysis of
            the requirements. Then the specifications, design choices, color preferences and
            well-designed needs to be analyzed. Our experienced customer friendly project manager
            help customers define their requirement and also can suggest industry best practices.
          </p>
        </div>

        <div className="main-row left" id="itstaffing">
          <div className="title-card">
            <FaFileAlt className="icons" />
            <h3>IT Staffing</h3>
          </div>
          <p className="paragraph">
            <img alt="WebAppDevelopment-img" className="card-img-left" src="../images/ITStaffing.jpg" />
            We do provide staffing services as per Client business requirements. We manage highly
            motivated professional pool to fulfill our client continuous requirements. We do focus
            on our direct fortune 500 clients, startups and medium size company on going
            requirements as well as we do provide bench sales requirements. GlassVue staffing
            expertise extends to a wide range of industries. Our specialists connect employers with
            highly skilled job seekers. With staffing services across USA, you can start your
            candidate search with us. You could send us your detailed requirements. We find best
            candidate with required skilllsets. We do have rigorous process to filter best candidate
            to fulfill our client 100% requirements. We take candidate’s technical screening and
            interview before forward it to our client. Please send us your requirements on
            <a href="mailto:staffing@glassvue.net"> staffing@glassvue.net</a>
          </p>
        </div>

        <div className="main-row right" id="ittraining">
          <div className="title-card">
            <FaPencilAlt className="icons" />
            <h3>IT Training</h3>
          </div>
          <p className="paragraph">
            <img alt="ITTraining-img" className="card-img-right" src="../images/ITTraining.jpg" />
            We do have expert team of software developers and trainers who emphasis on real time
            professional IT Training in Java, QA, UI, AWS, GCP and many more technologies. We keep
            limited number of candidate in each batch. We know that nowadays there are number of new
            technologies and tools come in market, our industry experts developers and trainers are
            capable to deliver right training that could be useful to your game changing careers. We
            do motivate candidates by number of ways. We also give 100% Job Assistance after
            completion of Successful training. We do have fortune 500 clients as well as startups
            and mid level valued clients in Silicon Valley, California and all over USA. Please send
            us your Resume on
            <a href="mailto:training@glassvue.net"> training@glassvue.net</a>
          </p>
        </div>

        <div className="main-row left" id="cloudservices">
          <div className="title-card">
            <FaCloudflare className="icons" />
            <h3>Cloud Services</h3>
          </div>
          <p className="paragraph">
            <img alt="cloud-img" className="card-img-left" src="../images/cloud.jpg" />
            We also provide cloud services to our clients, which includes Saas, Iaas, Paas cloud
            services across USA and all other countries. We provide services in Compute, Storage,
            Backup, Network, Infrastructure, and Management. We do have certified experts in AWS,
            Google Cloud Platform and Microsoft Azure cloud platforms.We also do provide in Big
            Data, Hadoop, ETL data processing services. We do provide integration services with
            ActiveMQ, Kafka, zookeeper etc. , with jenkins, Docker, nginx, Git. We provide flexible
            service as per client needs and requirements. We focus on client satisfaction and
            business success. Please send us your requirements on
            <a href="mailto:cloud@glassvue.net"> cloud@glassvue.net</a>
          </p>
        </div>
      </div>

    </Wrapper >
  )
}

const Wrapper = styled.section`

.main-row {
  display: grid;
}

img {
  width: 400px; 
  height: 200px;
}
.card-img-right {
  float: right;
  margin-left: 2rem;
}
.card-img-left {
  float: left;
  margin-right: 2rem;
}
.main-title {
  margin-top: 3rem;
}
.common-heading {
  text-transform: uppercase;
}
.head-intro {
  text-align: center;
  margin-bottom: 6rem;
}
.paragraph {
  text-align: justify;
}

.icons {
  color: ${({ theme }) => theme.colors.icon_special};
  font-size: 2rem;
  position: relative;
  margin-right: 2rem;
}

.title-card {
  display: flex;
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
  .card-img-right,card-img-left {
    float: left;
    margin-right: 2rem;
  }
  .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  img {
    float: left;
  }
  .card-img-right,
  .card-img-left {
    float: left;
    width: 100%; 
    height: 40%;
    margin-right: 2rem;
    margin-left: 0;
  }
  .grid-two-column,
  .grid-three-column {
    grid-template-columns: 1fr;
  }
}
`;


export default Services