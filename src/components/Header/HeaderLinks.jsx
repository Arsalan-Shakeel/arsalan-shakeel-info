/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import ListIcon from "@material-ui/icons/List";
import ListAlt from "@material-ui/icons/ListAlt";


// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Certifications"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <a
            href="https://www.youracclaim.com/badges/a5efc189-6ccf-4af5-bca9-c2c98666f78f/linked_in_profile"
            target="_blank"
            className={classes.dropdownLink}
          >
            SAS
          </a>,
            <a
              href="https://s3.amazonaws.com/arsalan-shakeel-images/Arsalan_Cloudera_CCA_Spark_Certification.jpg"
              target="_blank"
              className={classes.dropdownLink}
            >
              Cloudera
            </a>,
            <a
            href="https://s3.amazonaws.com/arsalan-shakeel-images/Arsalan_MongoDB_Certification.jpg"
            target="_blank"
            className={classes.dropdownLink}
          >
            MongoDB
          </a>,
            <a
            href="https://s3.amazonaws.com/arsalan-shakeel-images/Arsalan_Teradata_Certified_Master_2010.jpg"
            target="_blank"
            className={classes.dropdownLink}
          >
            Teradata
          </a>,
            <a
            href="https://s3.amazonaws.com/arsalan-shakeel-images/Arsalan_SAP_BW_2007_Certificate.jpg"
            target="_blank"
            className={classes.dropdownLink}
          >
            SAP Netweaver
          </a>
          ]}
        />
      </ListItem> 
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Experience"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ListIcon}
          dropdownList={[
            <a
              href="https://www.teradata.com/"
              target="_blank"
              className={classes.dropdownLink}
            >
              Teradata, Pakistan (Current)
            </a>,
            <a
            href="https://www.bluecrossnc.com/"
            target="_blank"
            className={classes.dropdownLink}
          >
            BCBSNC, Durham, NC USA
          </a>,
            <a
            href="https://adastracorp.com/"
            target="_blank"
            className={classes.dropdownLink}
          >
            Adastra, Toronto, ON Canada
          </a>,
            <a
            href="http://www.fanniemae.com/portal/index.html"
            target="_blank"
            className={classes.dropdownLink}
          >
            Fannie Mae (Contractor), Herndon, VA USA
          </a>,
            <a
            href="https://www.capitalone.com/"
            target="_blank"
            className={classes.dropdownLink}
          >
            CapitalOne (Contractor), Richmond, VA USA
          </a>
          ]}
        />
      </ListItem> 
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Degrees"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ListAlt}
          dropdownList={[
            <a
              href="https://s3.amazonaws.com/arsalan-shakeel-images/Arsalan_UVIC_MBA_Degree.jpeg"
              target="_blank"
              className={classes.dropdownLink}
            >
            MBA - Canada
            </a>,
            <a
              href="https://s3.amazonaws.com/arsalan-shakeel-images/Arsalan_CSU_Chico_MS_Comp_Science_Degree.jpeg"
              target="_blank"
              className={classes.dropdownLink}
            >
            MS - USA
            </a>,
            <a
              href="https://s3.amazonaws.com/arsalan-shakeel-images/Arsalan_NED_EE_BE_Degree.jpeg"
              target="_blank"
              className={classes.dropdownLink}
              >
              BE - Pakistan
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Connect on LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/arsalan-shakeel-4301044/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
