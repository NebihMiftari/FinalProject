import React from "react";
import {FaFacebookSquare,FaInstagram,FaTwitterSquare} from "react-icons/fa"

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box id="nm" className="d-flex flex-column">
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        
      </h1>
      <Container>
        <Row>
         
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/ThisisNebiih?mibextid=LQQJ4d">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                <FaFacebookSquare/>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fnebihmiftari%3Figshid%3DNTdlMDg3MTY%253D%26fbclid%3DIwAR2Z5D-2O-dUXsG-1Q1AQRqgA4QW-4SIygXWRptCRGGXtITxj3qReHRW2_w&h=AT0eU9xLF4NTuYR3jdeBg-aV-flQNdmG7apjUw72DdMMoi3gZm4dI69MzSFVfmzraC9_4SCH2jqalnJWJVadQWJLP32oiwkTdioLE0yr_vODfwi5XhFS0TWbDEi1sQDiq-qfsA">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  <FaInstagram/>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  <FaTwitterSquare/>
                </span>
              </i>
            </FooterLink>
           <h3 className="mx-100"></h3>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;