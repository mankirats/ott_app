import React from "react";
import styled from "styled-components";

function Login(props) {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="CTAone" />
          <SignUp>GET IT ALL HERE</SignUp>
          <Description>
            All Rights Reserved. HBO, Home Box Office and all related channel
            and programming logos are service marks of, and all related
            programming visuals and elements are the property of, Home Box
            Office, Inc. All rights reserved.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="CTAtwo" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  color: #f9f9f9;
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: mcenter;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  transition-timing-function: ease-out;
  transition: opacity 5s;
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 550px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  outline: none;
  min-height: 52px;
  border: none;
  font-weight: bold;
  color: #f9f9f9;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 17px;

  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  color: hsla(0, 0%, 95.3%, 1);
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

// const 

export default Login;
