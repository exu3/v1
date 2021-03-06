import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import ProjectCard from '../components/projectcard'
import { Text, Badge } from '@chakra-ui/react'

const ProjectsPage = () => {
    return (
        <Layout>
            <Head />
            <Text fontSize="4xl" fontWeight="extrabold">Projects</Text> <br />
            <ProjectCard 
                image="https://cloud-f2pye8tve-hack-club-bot.vercel.app/0image.png" 
                alt="dog" 
                title="Title Test" 
                date="February 2021" 
                blurb="This is a test test test is an English-language pangram—a
                sentence that contains all of the letters of the English alphabet. Owing to
                its existence, Chakra was created."
                link="#"
                />
        </Layout>
    )
}

export default ProjectsPage