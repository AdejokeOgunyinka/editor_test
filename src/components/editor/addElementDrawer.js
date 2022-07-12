import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "../../assets/svgs";
import DrawerComponent from "./drawerComponent";
import {
  addElementDrawerContents,
  mediaDrawerContents,
} from "../../utils/drawerUtils";

const AddElementDrawer = ({ onClose, isOpen }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          maxWidth={{ base: "100% !important", lg: "40% !important" }}
        >
          <DrawerCloseButton />
          <DrawerHeader>Select Block Element</DrawerHeader>
          <DrawerBody>
            <InputGroup alignItems="center">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
                top="unset !important"
              />
              <Input
                placeholder="Search for block elements..."
                bg="#E5E8F0"
                height="50px"
                borderRadius="100px"
                _placeholder={{ color: "#91989E" }}
              />
            </InputGroup>

            <Text mt="34px" fontSize="14px" color="#4D5155" mb="12px">
              Basic Blocks
            </Text>
            <Flex direction="column" rowGap="12px">
              {addElementDrawerContents.map((content, index) => (
                <DrawerComponent
                  key={index}
                  header={content.header}
                  description={content.description}
                  icon={content.icon}
                />
              ))}
            </Flex>

            <Text mt="34px" fontSize="14px" color="#4D5155" mb="12px">
              Media
            </Text>
            <Flex direction="column" rowGap="12px">
              {mediaDrawerContents.map((content, index) => (
                <DrawerComponent
                  key={index}
                  header={content.header}
                  description={content.description}
                  icon={content.icon}
                />
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddElementDrawer;