import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Comment = () => {
    // const [liked, setLiked] = useState(false);
    return (
        <>
            <Flex gap={4} py={2} my={2} w={"full"}>
                <Avatar src={'/zuck-avatar.png'} size={"sm"} />
                <Flex gap={1} w={"full"} flexDirection={"column"}>
                    <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                        <Text fontSize='sm' fontWeight='bold'>
                            Mark Zuckerberg
                        </Text>
                        <Flex gap={2} alignItems={'center'}>
                            <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
                            <BsThreeDots />
                        </Flex>
                    </Flex>
                    <Text>Hey This looks great</Text>
                    {/* <Actions/> */}
                    <Text fontSize={"sm"} color={"gray.light"} >
                        100 likes
                    </Text>
                </Flex>
            </Flex>

            <Divider />


        </>
    );
};

export default Comment;