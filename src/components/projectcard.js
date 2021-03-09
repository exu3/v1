import React from 'react'
import { ChakraProvider, Box, Text, Image, HStack, Badge } from "@chakra-ui/react"
import { LinkIcon } from "@chakra-ui/icons"

export default class ProjectCard extends React.Component {
    render() {
        const { image, alt, title, date, blurb, link, techStack } = this.props;

        return (
            <ChakraProvider>
            <Box mr={5} mb={5} rounded="20px" bg="gray.100" w="250px" overflow="hidden" boxShadow="md">
                <Image src={image} alt={alt} />
                <Box paddingBottom={5} px={5}>
                    <Badge variant="subtle" rounded="full" px={2} colorScheme="teal">{techStack}</Badge>
                <a href={link}>
                    <HStack>
                    <Text fontWeight="semibold" fontSize="2xl">{title}</Text>
                    <LinkIcon />
                    </HStack>
                </a>
                <Text>{date}</Text><br/>
                <Text noOfLines={[1,2,3,4,5,6]}>{blurb}</Text>
                </Box>
            </Box>
            </ChakraProvider>
        )
    }
}