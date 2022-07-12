import React, { useContext } from "react";
import {
  Flex,
  Box,
  VStack,
  Image,
  Avatar,
  Text,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import HotAirBalloon from "../../assets/Hot_air_balloon.png";
import AvatarImage from "../../assets/avatar.png";
import SocialMedia from "./socialMedia";
import EditorButton from "./button";
import { LinkDrawerContext } from "../../contexts/linkDrawer";
import { ArrowUpSlantIcon } from "../../assets/svgs";

const EditorInfoSection = (props) => {
  const { linkObjectArray } = useContext(LinkDrawerContext);

  return (
    <Flex
      width="100%"
      pt="48px"
      px="60px"
      direction="column"
      position="sticky"
      right="0"
      top="0"
      height="100vh"
    >
      <Box
        bg="#131316"
        py="10px"
        px="10px"
        width="100%"
        height="85%"
        borderRadius="24px"
      >
        <VStack textAlign="center" overflowY="scroll">
          <Flex direction="column" alignItems="center" position="relative">
            <Image
              alt="hot air balloon"
              src={HotAirBalloon}
              height="119px"
              borderRadius="20px 20px 0px 0px"
            />
            <Avatar
              boxSize="74px"
              src={AvatarImage}
              position="absolute"
              top="85px"
            />
          </Flex>
          <Heading color="#E5E8F0" mt="55px !important" fontSize="24px">
            {" "}
            Blessing Daniels
          </Heading>
          <Text color="#E5E8F0" fontSize="14px" px="20px" mt="12px !important">
            Personal Trainer 💪 Dancer 💃 Meditator. I love all animals 🐶 and
            donate a percentage of my income to marine life 🐠
          </Text>
          <Box mt="21px !important">
            <SocialMedia />
          </Box>
          <VStack width="100%" spacing="16px" px="20px">
            {linkObjectArray.links?.length > 0 &&
              linkObjectArray.links?.map((linkObject, index) => (
                <Button
                  as={Link}
                  height="56px"
                  borderRadius="100px"
                  bg="#242429"
                  href={linkObject.link}
                  key={index}
                  rightIcon={<ArrowUpSlantIcon />}
                  width="100%"
                  color="#fff"
                  // target="_blank"
                  _hover={{ textDecoration: "none" }}
                  isExternal
                >
                  {linkObject.title}
                </Button>
              ))}
          </VStack>
        </VStack>
      </Box>
      <EditorButton marginTop="32px !important">Share Page Link</EditorButton>
    </Flex>
  );
};

export default EditorInfoSection;
