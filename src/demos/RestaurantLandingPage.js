import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

export default () => {
  const Address = tw.span`leading-relaxed`;
  const AddressLine = tw.span`block`;
  const Email = tw.span`text-sm mt-6 block text-gray-500`;
  const Phone = tw.span`text-sm mt-0 block text-gray-500`;
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Delicious & Affordable <HighlightedText>Meals Near You.</HighlightedText></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
      <MainFeature
        subheading={<Subheading>Established Since 2014</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <Features />
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      />
      
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+"
          },
          {
            key: "Chefs",
            value: "1500+"
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <GetStarted />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "New York",
            description: (
              <>
                <Address>
                  <AddressLine>40 Gates Court</AddressLine>
                  <AddressLine>Endicott, NY 13760</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "Illinois",
            description: (
              <>
                <Address>
                  <AddressLine>602 Annadale Drive</AddressLine>
                  <AddressLine>Dekalb, IL 60115</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "California",
            description: (
              <>
                <Address>
                  <AddressLine>96 NE. Delaware Lane</AddressLine>
                  <AddressLine>Sacramento, CA 95820</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "Tennessee",
            description: (
              <>
                <Address>
                  <AddressLine>74 Peachtree Ave.</AddressLine>
                  <AddressLine>Dyersburg, TN 38024</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "New Jersey",
            description: (
              <>
                <Address>
                  <AddressLine>8355 Summer Street</AddressLine>
                  <AddressLine>Manchester, NJ 08759</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "Ohio",
            description: (
              <>
                <Address>
                  <AddressLine>7713 Snake Hill Ave.</AddressLine>
                  <AddressLine>Piqua, OH 45356</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
