import React from "react";
import { ArrowUpSlantIcon } from "../../assets/svgs";
import { Link, Button } from "@chakra-ui/react";

const LinkExternalButton = ({ text, link }) => {
  return (
    <Button
      as={Link}
      height="56px"
      borderRadius="100px"
      bg="#242429"
      href={link}
      rightIcon={<ArrowUpSlantIcon />}
      width="100%"
      color="#fff"
      _hover={{ textDecoration: "none" }}
      isExternal
    >
      {text}
    </Button>
  );
};

export default LinkExternalButton;
