import React, { useState } from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

const Container = ({ onContainerClick, show }) => {
  return (
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
      onClick={() => onContainerClick()}
      cursor="pointer"
      opacity={show ? 1 : 0.6}
      transition="opacity 0.3s ease"
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
          velit varius, ullamcorper nisl vel, vestibulum leo. Phasellus euismod
          arcu tellus, ac bibendum turpis euismod eget.
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
      </Box>
    </Box>
  );
};

const Noo = () => {
  const [showContainer1, setShowContainer1] = useState(true);
  const [showContainer2, setShowContainer2] = useState(true);
  const [showContainer3, setShowContainer3] = useState(true);

  const handleContainerClick = (container) => {
    if (container === 1) {
      setShowContainer1(true);
      setShowContainer2(false);
      setShowContainer3(false);
    } else if (container === 2) {
      setShowContainer1(false);
      setShowContainer2(true);
      setShowContainer3(false);
    } else if (container === 3) {
      setShowContainer1(false);
      setShowContainer2(false);
      setShowContainer3(true);
    }
  };

  return (
    <Box marginLeft="0.5%" marginRight="0.5%">
      <Box textAlign="center">
        <Text
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          color="rgba(102,112,128)"
        >
          About Us
        </Text>
      </Box>
      <Container
        onContainerClick={() => handleContainerClick(1)}
        show={showContainer1}
      />
      <Container
        onContainerClick={() => handleContainerClick(2)}
        show={showContainer2}
      />
      <Container
        onContainerClick={() => handleContainerClick(3)}
        show={showContainer3}
      />
    </Box>
  );
};

export default Noo;
