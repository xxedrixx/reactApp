import { VStack, Text, HStack } from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";

import { TfiWrite } from "react-icons/tfi";

import { LiaMoneyCheckSolid } from "react-icons/lia";

import { FiUser } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

const SideBar = () => {
  return (
    <VStack
      pos={"fixed"}
      h="100vh"
      // boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
      w="300px"
      justifyContent="space-between"
    >
      <VStack
        fontSize="20"
        pl="10%"
        pt={"20"}
        w="100%"
        alignItems="flex-start"
        spacing={5}
      >
        <HStack
          as={"button"}
          spacing={4}
          _hover={{ bg: "black", color: "white", borderRadius: "10px" }}
        >
          <FiUser />
          <Text>Eleve</Text>
        </HStack>

        <HStack
          as={"button"}
          _hover={{ bg: "black", color: "white", borderRadius: "10px" }}
        >
          <GiTeacher />
          <Text>Classe</Text>
        </HStack>

        <HStack
          as={"button"}
          _hover={{ bg: "black", color: "white", borderRadius: "10px" }}
        >
          <LiaChalkboardTeacherSolid />
          <Text>Emploi du Temps</Text>
        </HStack>

        <HStack
          as={"button"}
          _hover={{ bg: "black", color: "white", borderRadius: "10px" }}
        >
          <TfiWrite />
          <Text>Bulletin</Text>
        </HStack>

        <HStack
          as={"button"}
          _hover={{ bg: "black", color: "white", borderRadius: "10px" }}
        >
          <LiaMoneyCheckSolid />
          <Text>Ecolage</Text>
        </HStack>
      </VStack>
      <VStack fontSize="20" p="10%" w="100%" alignItems="flex-start">
        <HStack
          as={"button"}
          _hover={{ bg: "black", color: "white", borderRadius: "10px" }}
        >
          <AiOutlineLogout />
          <Text>Deconnexion</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default SideBar;
