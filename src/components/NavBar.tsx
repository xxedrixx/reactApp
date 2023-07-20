import ColorModeSwitch from "./ColorModeSwitch";
import { HStack } from "@chakra-ui/react";
import AvatarPic from "./Avatar";

const Navbar = () => {
  return (
    <HStack
      w="100%"
      pos={"fixed"} //invisible navbar
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
      justifyContent={"space-between"}
      bg={"white"}
    >
      <div>Logo</div>
      <ColorModeSwitch />
      <AvatarPic />
    </HStack>
  );
};

export default Navbar;
