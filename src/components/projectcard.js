import React from 'react'
import { ChakraProvider, Box, Text, Flex, Image, HStack, Badge } from "@chakra-ui/react"
import { LinkIcon } from "@chakra-ui/icons"

export default class ProjectCard extends React.Component {
    render() {
        const { image, alt, title, date, blurb, link, badgeColor1, badgeColor2, badgeColor3, badgeColor4, techStack1, techStack2, techStack3, techStack4 } = this.props;

        return (
            <ChakraProvider>
            <Box rounded="20px" bg="gray.100" w="270px" overflow="hidden" boxShadow="md">
                <Image src={image} alt={alt} />
                <Box paddingBottom={5} px={5}>
                <Flex spacing={3}>
                    <Badge variant="solid" rounded="full" px={2} colorScheme={badgeColor1}>{techStack1}</Badge>
                    <Badge variant="solid" rounded="full" px={2} colorScheme={badgeColor2}>{techStack2}</Badge>
                    <Badge variant="solid" rounded="full" px={2} colorScheme={badgeColor3}>{techStack3}</Badge>
                    <Badge variant="solid" rounded="full" px={2} colorScheme={badgeColor4}>{techStack4}</Badge>
                </Flex>
                <a href={link}>
                    <HStack>
                    <Text fontWeight="semibold" fontSize="2xl">{title}</Text>
                    <LinkIcon />
                    </HStack>
                </a>
                <Text>{date}</Text><br/>
                <Text noOfLines={[1,2,3,4,5]}>{blurb}</Text>
                <a href={link}>
                    {/* <Button borderRadius="20px" fontWeight="normal" bg="black" color="white" _hover={{ }}>
                        {btn}
                        </Button> */}
                </a>
                </Box>
            </Box>
            </ChakraProvider>
        )
    }
}