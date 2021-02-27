import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import { Text } from '@chakra-ui/react'

const ProjectsPage = () => {
    return (
        <Layout>
            <Head />
            <Text fontSize="4xl" fontWeight="extrabold">Projects</Text>
            <Text>currently a wip... if you're curious, you can reach me via email exu6056 at g mail dot com or alternatively, I am also on the Hack Club Slack as <a href="https://slack.hackclub.com">Ella</a>.</Text>
        </Layout>
    )
}

export default ProjectsPage