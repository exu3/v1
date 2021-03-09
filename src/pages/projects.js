import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import ProjectCard from '../components/projectcard'
import { Text, Flex, Stack } from '@chakra-ui/react'

const ProjectsPage = () => {
    return (
        <Layout>
            <Head />
            <Text fontSize="4xl" fontWeight="extrabold">Projects</Text> <br />
            <Flex flexDirection="row" flexWrap="wrap">
            <ProjectCard 
                image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/409/778/datas/gallery.jpg" 
                alt="Cookbook recipe app" 
                title="Cookbook" 
                date="February 2021" 
                blurb="Cookbook is a mobile app for users to find inspiration, organize, and create recipes. During the ideation process, we surveyed several individuals about their cooking habits and how COVID-19 has affected them. We learned that many people were cooking their own meals more often now than before the pandemic. Many respondents indicated their frustration with finding recipes online were related to cluttered websites and advertisements. And due to COVID-19 many expressed fear about leaving their house for the grocery store. We used this feedback in our brainstorm and design process to develop the features of the app."
                link="https://devpost.com/software/cookbook-h4xni0"
                techStack="Figma"
                />

            <ProjectCard 
                image="https://cloud-gffvcan24-hack-club-bot.vercel.app/0screen_shot_2021-03-05_at_10.32.38_pm.png" 
                alt="dog" 
                title="Magnify Wellness" 
                date="November 2020" 
                blurb="Magnify Wellness's website serves as a resource for anyone who is struggling with mental health. The website features the Magnify Wellness staff team, blog, an overview of the app, and more."
                link="https://magnifywellness.org"
                techStack="html, css, javascript"
                />

            <ProjectCard 
                image="https://cdn.discordapp.com/attachments/813282422426566666/817646719180472350/Screen_Shot_2021-03-05_at_10.35.33_PM.png" 
                alt="Clouds and rainbow, PACE logo" 
                title="PACE" 
                date="January 2021" 
                blurb="PACE is a website dedicated to anyone struggling with mental health, specifically PTSD. It features interactive activities including a diagnostic quiz, meditation activities, journal prompts, and randomized quote generator, and more."
                link="https://me.ntal-health.space"
                techStack="html, css, javascript"
                />

            <ProjectCard 
                image="https://cdn.discordapp.com/attachments/813282422426566666/817649533836066846/Screen_Shot_2021-03-05_at_10.46.49_PM.png" 
                alt="Purple Hydrangea Project" 
                title="Purple Hydrangea" 
                date="December 2020" 
                blurb="The Purple Hydrangea Project is a mental health nonprofit organization dedicated to eliminate the stigma around mental health. The website was built with Gatsby with Contentful CMS and GraphQL for the blog."
                link="https://github.com/Purple-Hydrangea-Project/PHP-gatsby"
                techStack="gatsby, graphql, contentful"
                />

            <ProjectCard
                image="https://cdn.discordapp.com/attachments/813282422426566666/817650111890718760/Screen_Shot_2021-03-05_at_10.49.17_PM.png"
                alt="my website"
                title="This Website"
                date="February 2021"
                blurb="I built my website with Gatsby and Chakra-UI. It features a short blurb about myself and some projects I worked on."
                link="https://github.com/eilla1/website"
                techStack="Gatsby, Chakra-ui"
                />

            <ProjectCard
                image="https://cdn.discordapp.com/attachments/813282422426566666/817651344064118784/Screen_Shot_2021-03-05_at_10.54.10_PM.png"
                alt="American Cancer Society Club Website"
                title="ACS Club"
                date="March 2021"
                blurb="I built this website for the American Cancer Society Club at my school. Past meeting information is fetched from Contentful with GraphQL."
                link="https://github.com/eilla1/foothill-acs"
                techStack="Gatsby, GraphQL, Contentful"
                />      

            <ProjectCard
                image="https://cdn.discordapp.com/attachments/813282422426566666/818733173423996938/Screen_Shot_2021-03-08_at_10.32.59_PM.png"
                alt="InnovateHER Website"
                title="InnovateHER"
                date="March 2021"
                blurb="I built this website for the a month-long event empowering female and nonbinary students in STEM. The website serves to inform particpants of guidelines, information, and a gallery of project submissions from the community."
                link="https://innovather.vercel.app/"
                techStack="Gatsby, Chakra-UI"
                />  
                </Flex>
        </Layout>
    )
}

export default ProjectsPage