import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Portrait from "@material-ui/icons/PersonOutline";
import Cloud from "@material-ui/icons/CloudOutlined";
import ScatterPlot from "@material-ui/icons/ScatterPlotOutlined";
import BlurOn from "@material-ui/icons/BlurOn";
import Waves from "@material-ui/icons/Waves";
import TrendingUp from "@material-ui/icons/TrendingUp";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";


import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/arsalan-shakeel-face.jpg";

import dldesignconsiderations from "assets/img/cardsmedia/DataLakeDesignConsiderations.png";
import bdlamdaarchitecture from "assets/img/cardsmedia/BigDataToolsetSelection.png";
import experienceglance from "assets/img/cardsmedia/ExperienceGlance2.png";
import cloudtrends from "assets/img/cardsmedia/EmergingTrends3.png";
import datastrategy from "assets/img/cardsmedia/DataStrategyDataExpectations3.png";
import machinelearningmodels from "assets/img/cardsmedia/MachineLearningModels1.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Analytics for Better Insights!"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/arsalan-profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h2 className={classes.title}>Arsalan Shakeel</h2>
                      <h6>Leadership | Strategy | Data | Analytics</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description_up}>
                <p align="left">
                I have been delivering Advanced Analytics Solutions as a Big Data Architect for 
                various business units, including Marketing, Operations, Customer Service and Finance for 
                more than 5 years. Prior to this, I spent significant portion of my career designing and developing  
                Data Integration Applications for companies in Health Insurance, Banking and Payment Cards 
                industries.
                </p>
                <p align="left">
                I believe that a well-defined and a well-articulated Data Strategy is an absolute must for a successful 
                rollout of any corporate initiative that aims to promote data-driven decision making in an organization. 
                An effective Data Strategy helps an enterprise establish necessary parameters for its leaders and empowers 
                them to make technology choices aligned with business objectives.
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="info"
                    tabs={[
                      {
                        tabButton: "About Me",
                        tabIcon: Portrait,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10}>
                            <div className={classes.description_up}>
                            <p align="left">
                            Over the years, I have worked with numerous C-level executives and helped them maximize their investments 
                            in data and analytics platforms by deploying right combination of tools, technologies, and  
                            methodologies. Whether it is about identifying and fixing issues in underlying architecture 
                            to streamline deployment of analytical models in production, or about migrating on-premises applications to Cloud, 
                            I have experience and expertise to lead technical delivery teams and motivate individual contributors to produce 
                            quality deliverables. 
                            </p>
                            </div>
                            <img
                            alt="..."
                            src={experienceglance}
                            className={navImageClasses}
                            />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Data Strategy",
                        tabIcon: TrendingUp,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10}>
                            <div className={classes.description_up}>
                            <p align="left">
                            Data Strategy is essentially a detailed roadmap of activities for realizing the return on investments made by an
                            organization on its people and analytics infrastructure. It groups technologies and processes into one of these three categories: 
                            (a) Invest, (b) Maintain, and (c) Retire. It also establishes guidelines for Data Governance, and Workforce 
                            Training. The pace of advancement in technology has been increasing rapidly, and so has the expectations of 
                            forward-thinking organizations from its IT and Business leadership. These organizations expect their executives to 
                            promote operational decision-making based on data and analytics. The role of an IT department is not just limited 
                            to making sure that SLAs are met and automated reports are produced, it is also expected to work collaboratively 
                            with other departments and produce desired business outcome.
                            </p>
                            </div>
                            <img
                            alt="..."
                            src={datastrategy}
                            className={navImageClasses}
                            />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Cloud",
                        tabIcon: Cloud,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10}>
                            <div className={classes.description_up}>
                            <p align="left">
                             A well-defined and well-articulated Data Strategy is an absolute must for a successful rollout of any 
                             corporate initiative that aims to promote data-driven decision making in an organization. An effective 
                            Data Strategy helps an enterprise establish necessary parameters for its leaders and empowers them to 
                            make technology choices aligned with business objectives.
                            </p>
                            </div>
                            <img
                            alt="..."
                            src={cloudtrends}
                            className={navImageClasses}
                            />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Big Data",
                        tabIcon: BlurOn,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10}>
                            <div className={classes.description_up}>
                            <p align="left">
                            Selecting a vendor or a tool for an organization's Big Data Technology Ecosystem is not a simple process. 
                            There are literally hundreds of technologies and vendors that operate in this domain, and a variety of factors play 
                            a vital role in the selection process. One approach is to categorize these factors into: (1) Mandatory, 
                            (2) Negotiable, and (3) Relative, and then evaluate each potential vendor or technology based on its score on 
                            each of these factors. The scores are assigned by a team having representation from all major stakeholders. 
                            </p>
                            </div>
                            <img
                            alt="..."
                            src={bdlamdaarchitecture}
                            className={navImageClasses}
                            />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Data Lake",
                        tabIcon: Waves,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10}>
                            <div className={classes.description_up}>
                            <p align="left">
                            Without sound design considerations, a Data Lake is bound to become a Data Swamp. 
                            Since it is a repository of large volume of data from a variety of traditional and new sources having 
                            different load frequencies and structures, there are many aspects of design that must be considered and 
                            carefully evaluated while laying the foundation of a Data Lake. For example, an initial use case was to
                            dedicate a portion of it for exploration, where Data Scientists and other analysts could freely ingest 
                            data from the Internet and combine it with production grade integrated data from EDW and 
                            build and train their analytical models. This is a valid use of this environment for exploration and experimentation, 
                            however, if proper Governance controls are not in place and Metadata is not captured at right time, 
                            the data from unverified sources can spill into consumption regions and can greatly impact the quality 
                            and reliability of reports coming out of Data Lake environment.  
                            </p>
                            </div>
                            <img
                            alt="..."
                            src={dldesignconsiderations}
                            className={navImageClasses}
                            />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Machine Learning",
                        tabIcon: ScatterPlot,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10}>
                            <div className={classes.description_up}>
                            <p align="left">
                            We are experiencing a technological revolution unfolding before our own very eyes in the form of 
                            advancements in Machine Learning and Artificial Intelligence. Nowadays, it is normal for an organization to 
                            rely on an automated process that leverages machine learning based analytical models to make a 
                            prediction and then suggests a course of action (in near real-time) to a user facing app, a chatbot or 
                            to a human agent having a conversation with a customer. It is important to mention that developing 
                            analytical models to solve a specific business problem and putting them to use in decision-making does not 
                            necessarily get the job done. Analytical models need to be regularly tuned and compared against challenger 
                            models to reflect changes in data and customer behavior. Hence an organization also needs to invest in tools 
                            and processes to monitor performance of analytical models and promote/demote them accordingly.
                            </p>
                            </div>
                            <img
                            alt="..."
                            src={machinelearningmodels}
                            className={navImageClasses}
                            />
                           </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
