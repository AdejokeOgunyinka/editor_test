import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Heading,
  Image,
  Tag,
  HStack,
} from "@chakra-ui/react";
import EditorInfoSection from "../../components/editor/editorInfoSection";
import AvatarImage from "../../assets/avatar.png";
import HotAirBalloon from "../../assets/Hot_air_balloon.png";
import SocialMedia from "../../components/editor/socialMedia";
import EditorButton from "../../components/editor/button";
import { tags, controlStyles, controls } from "../../utils/editor";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routeUtils";
import "./styles.scss";

const Editor = () => {
  const history = useNavigate();

  const handleControlClick = (index) => {
    if (index === 1) {
      history(ROUTES.customization);
    } else {
    }
  };
  return (
    <Flex width="100%" height="100%" boxSizing="border-box">
      <Flex
        width={{ base: "100%", md: "60%" }}
        boxSizing="border-box"
        direction="column"
        justify="space-between"
      >
        <Box>
          <Flex
            justify="space-between"
            px={{ base: "20px", md: "24px" }}
            pb={{ md: "14px" }}
            pt={{ base: "12px", md: "unset" }}
            align="center"
            mb={{ base: "26px", md: "41px" }}
          >
            <Flex align="center">
              <Avatar alt="avatar" src={AvatarImage} boxSize="32px" />
              <Box ml="12px">
                <Heading
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="24px"
                  color="#131316"
                  letterSpacing="-0.015em"
                >
                  Editor
                </Heading>
                <Text fontSize="12px" color="#4D5760" lineHeight="18px">
                  mainstack.me/blessingdaniels
                </Text>
              </Box>
            </Flex>
            <Button bg="#FF5403" borderRadius="100px" color="#fff" disabled>
              Publish
            </Button>
          </Flex>
          <Box px={{ base: "20px", md: "60px" }} width="100%">
            <Flex
              direction="column"
              height={{ base: "382px", md: "444px" }}
              border="1px solid #E5E8F0"
              borderRadius="12px"
              position="relative"
              align="center"
              width="100%"
            >
              <Image
                alt="hot air balloon"
                src={HotAirBalloon}
                height={{ base: "119px", md: "175px" }}
                width="100%"
                borderTopRadius="inherit"
              />
              <Box
                width="100%"
                position="absolute"
                px={{ base: "16px", md: "24px" }}
                top={{ base: "56px", md: "90px" }}
              >
                <Flex
                  bg="#fff"
                  height={{ base: "326px", md: "264px" }}
                  width="100%"
                  borderRadius={{ base: "8px", md: "24px" }}
                  p={{ base: "16px", md: "24px" }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    mb={{ base: "16px", md: "unset" }}
                  >
                    <Avatar
                      src={AvatarImage}
                      alt="avatar"
                      boxSize={{ base: "74px", md: "82px" }}
                    />
                    <Box display={{ md: "none" }}>
                      <EditorButton>Edit Profile</EditorButton>
                    </Box>
                  </Flex>
                  <Box ml={{ md: "18px" }}>
                    <Heading
                      fontSize="24px"
                      lineHeight="32px"
                      fontWeight="700"
                      letterSpacing="-0.015em"
                    >
                      Blessing Daniels
                    </Heading>
                    <Text
                      fontSize="14px"
                      lineHeight="22px"
                      mt={{ base: "12px", md: "16px" }}
                      mb={{ base: "16px", md: "14px" }}
                    >
                      Personal Trainer 💪 Dancer 💃 Meditator. I love all
                      animals 🐶 and donate a percentage of my income to marine
                      life 🐠
                    </Text>
                    <SocialMedia />
                    <HStack mt={{ base: "16px", md: "24px" }} spacing="8px">
                      {tags.map((tag, index) => (
                        <Tag
                          key={index}
                          height="32px"
                          bg="#E5E8F0 !important"
                          fontSize="14px"
                        >
                          {tag}
                        </Tag>
                      ))}
                    </HStack>
                    <Flex
                      width="100%"
                      ml="50px"
                      display={{ base: "none", md: "inline" }}
                    >
                      <EditorButton marginTop="32px">Edit Profile</EditorButton>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Flex
          align="center"
          justify="center"
          pb="48px"
          display={{ base: "none", md: "inline" }}
        >
          <Flex {...controlStyles}>
            {controls.map((control, index) => (
              <Flex
                width="50%"
                height="100%"
                className="controlContainer"
                key={index}
                justify="center"
                align="center"
                cursor="pointer"
                onClick={() => handleControlClick(index + 1)}
              >
                <Image alt="control image" src={control.icon} boxSize="24px" />
                <Text color="#fff" ml="11px" fontSize="15px" fontWeight="600">
                  {control.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex
          width="100%"
          display={{ base: "inline-flex", md: "none" }}
          justify="flex-end"
          columnGap="12px"
          pr="20px"
          pb="12px"
        >
          {controls.map((control, index) => (
            <Flex
              w="48px"
              h="48px"
              justify="center"
              align="center"
              bg="#131316"
              borderRadius="100%"
              cursor="pointer"
              key={index}
              onClick={() => handleControlClick(index + 1)}
            >
              <Image alt="control image" src={control.icon} boxSize="24px" />
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Box
        width="40%"
        borderLeft="1px solid #E5E8F0"
        display={{ base: "none", md: "inline" }}
      >
        <EditorInfoSection />
      </Box>
    </Flex>
  );
};

export default Editor;
