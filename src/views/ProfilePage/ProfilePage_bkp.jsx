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


import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/arsalan-shakeel-face.jpg";

import dldesignconsiderations from "assets/img/cardsmedia/DataLakeDesignConsiderations.png";
import dlmetadatacategories from "assets/img/cardsmedia/DataLakeMetadataCategories.png";
import bdlamdaarchitecture from "assets/img/cardsmedia/BigDataLambdaArchitecture.png";
import experienceglance from "assets/img/cardsmedia/ExperienceGlance1.png";
import cloudtrends from "assets/img/cardsmedia/CloudEmergingTrends.png";
import datastrategy from "assets/img/cardsmedia/DataStrategyDataExpectations1.png";

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
          brand="Analytics for better Insights!"
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
              <div className={classes.description}>
                <p align="left">
                A well-defined and well-articulated Data Strategy is an absolute must for a successful rollout of any 
                corporate initiative that aims to promote data-driven decision making in an organization. An effective 
                Data Strategy helps an enterprise establish necessary parameters for its leaders and empowers them to 
                make technology choices aligned with business objectives.
                
                Modern applications of analytics on data, such as Machine Learning, are changing the competitive landscape 
                of all sectors of digital economy. Cloud based compute and storage platforms can process massive volumes of 
                data and can support core business applications. This has enabled IT departments to not only deploy 
                complicated software systems faster and cheaper, but also create opportunities for other departments to 
                perform analytics on data according to their own specific use cases.
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
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
                            <div className={classes.description}>
                            <p align="left">
                             A well-defined and well-articulated Data Strategy is an absolute must for a successful rollout of any 
                             corporate initiative that aims to promote data-driven decision making in an organization. An effective 
                            Data Strategy helps an enterprise establish necessary parameters for its leaders and empowers them to 
                            make technology choices aligned with business objectives.
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
                            <div className={classes.description}>
                            <p align="left">
                             A well-defined and well-articulated Data Strategy is an absolute must for a successful rollout of any 
                             corporate initiative that aims to promote data-driven decision making in an organization. An effective 
                            Data Strategy helps an enterprise establish necessary parameters for its leaders and empowers them to 
                            make technology choices aligned with business objectives.
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
                            <div className={classes.description}>
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
                            <div className={classes.description}>
                            <p align="left">
                             A well-defined and well-articulated Data Strategy is an absolute must for a successful rollout of any 
                             corporate initiative that aims to promote data-driven decision making in an organization. An effective 
                            Data Strategy helps an enterprise establish necessary parameters for its leaders and empowers them to 
                            make technology choices aligned with business objectives.
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
                            <div className={classes.description}>
                            <p align="left">
                             A well-defined and well-articulated Data Strategy is an absolute must for a successful rollout of any 
                             corporate initiative that aims to promote data-driven decision making in an organization. An effective 
                            Data Strategy helps an enterprise establish necessary parameters for its leaders and empowers them to 
                            make technology choices aligned with business objectives.
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
                            <div className={classes.description}>
                            <p align="left">
                            Focus on Applications - such as Asset Analytics.
                            </p>
                            <p align="left">
                            The art of modeling involves selecting the right data sets, algorithms and variables and 
                            the right techniques to format data for a particular business problem. But there's more to it 
                            than model-building mechanics. No model will do any good if the business doesn't understand its 
                            results. Communicating the results to executives so they understand what the model discovered 
                            and how it can benefit the business is critical but challenging -- it's the "last mile" in 
                            the whole analytical modeling process and often the most treacherous. Without that 
                            understanding, though, business managers might be loath to use the analytical findings 
                            to make critical business decisions.
                            </p>
                            </div>
                            <img
                            alt="..."
                            src={dlmetadatacategories}
                            className={navImageClasses}
                            />
                            <Button size="small" color="info" href={"http://www.dawn.com"} target="_blank">
                            Go To Course
                            </Button> 
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
