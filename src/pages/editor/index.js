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
        width="60%"
        boxSizing="border-box"
        direction="column"
        justify="space-between"
      >
        <Box>
          <Flex
            justify="space-between"
            px="24px"
            py="12px"
            align="center"
            mb="41px"
          >
            <Flex align="center">
              <Avatar alt="avatar" src={AvatarImage} boxSize="32px" />
              <Box ml="12px">
                <Heading
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="24px"
                  color="#131316"
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
          <Box px="60px" width="100%">
            <Flex
              direction="column"
              height="444px"
              border="1px solid #E5E8F0"
              borderRadius="12px"
              overflow="hidden"
              position="relative"
              align="center"
              width="100%"
            >
              <Image
                alt="hot air balloon"
                src={HotAirBalloon}
                height="175px"
                width="100%"
              />
              <Box width="100%" position="absolute" px="24px" top="90px">
                <Flex
                  bg="#fff"
                  height="264px"
                  width="100%"
                  borderRadius="24px"
                  p="24px"
                >
                  <Avatar src={AvatarImage} alt="avatar" boxSize="82px" />
                  <Box ml="18px">
                    <Heading fontSize="24px" lineHeight="32px" fontWeight="700">
                      Blessing Daniels
                    </Heading>
                    <Text fontSize="14px" lineHeight="22px" mt="16px" mb="14px">
                      Personal Trainer 💪 Dancer 💃 Meditator. I love all
                      animals 🐶 and donate a percentage of my income to marine
                      life 🐠
                    </Text>
                    <SocialMedia />
                    <HStack mt="24px" spacing="8px">
                      {tags.map((tag, index) => (
                        <Tag key={index} height="32px" bg="#E5E8F0 !important">
                          {tag}
                        </Tag>
                      ))}
                    </HStack>
                    <Flex width="100%" ml="50px">
                      <EditorButton marginTop="32px">Edit Profile</EditorButton>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Flex align="center" justify="center" pb="48px">
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
      </Flex>
      <Box width="40%" borderLeft="1px solid #E5E8F0">
        <EditorInfoSection />
      </Box>
    </Flex>
  );
};

export default Editor;
