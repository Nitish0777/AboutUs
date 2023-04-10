import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box marginLeft="0.5%" marginRight="0.5%">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box textAlign="center" color="rgb(102,112,128)">
          <h1>About Us</h1>
        </Box>
      </Box>
      <Box
        background="rgba(238,241,244)"
        maxWidth="800px"
        marginX="auto"
        marginTop="40px"
        padding="20px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={{ base: "100%", md: "80%" }}
        border=" 2px solid rgba(39,38,39)"
        borderRadius="10px"
      >
        <Box flexBasis="50%">
          <Text
            fontSize="xl"
            fontWeight="bold"
            marginBottom="0px"
            color="rgba(102,112,128)"
          >
            <h3>Pitch Us</h3>
          </Text>
          <Text marginBottom="10px" color="rgba(102,112,128)">
            <h3>Your Idea</h3>
          </Text>
          <Text color="rgb(102,112,128)" fontWeight="7px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
            velit varius, ullamcorper nisl vel, vestibulum leo. Phasellus
            euismod arcu tellus, ac bibendum turpis euismod eget.
          </Text>
          <Box marginTop="10px">
            <Button
              borderRadius="10px"
              background="rgba(102,112,128)"
              color="white"
              padding="5.5px 18px"
              fontSize="14px"
              fontWeight="bold"
              letterSpacing="1px"
              marginTop="20px"
            >
              Know More
            </Button>
          </Box>
        </Box>
        <Box flexBasis="50%" textAlign="center">
          <Image
            src="https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg"
            alt="Card Image"
            marginTop="0px"
            borderRadius="10px"
            marginBottom="0px"
            width="100%"
          />
          {/* <Text>Image caption goes here</Text> */}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
