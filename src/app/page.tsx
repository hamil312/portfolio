'use client'
import Image from "next/image";
import { motion } from "motion/react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ThemeSwitch from "./components/ThemeSwitch";
import Head from "next/head";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };
  const [selectedImage, setSelectedImage] = useState("/chicken.jpg");

  const experiences = [
    {
      title: "Basic and Medium Education",
      description:
        "I studied at the IEM Pedagógico in the city of Pasto, where I received basic education focused on the values of Respect, solidarity, responsability and honesty",
      image: "/pedagogico.jpeg", // Cambia esto al path de tu imagen.
    },
    {
      title: "Engineering Seminar",
      description:
        "At UCC, students have the opportunity to participate in a seminar dedicated to discussing various relevant engineering topics.",
      image: "/seminario.jpg", // Cambia esto al path de tu imagen.
    },
    {
      title: "Animals",
      description:
        "I am partly in charge of taking care of a group of hens, which includes checking for diseases, checking that they do not go missing, feeding them, provide treatment for illnesses, etc.",
      image: "/chicken.jpg", // Cambia esto al path de tu imagen.
    },
  ];
  return (
    <section>
      <header className="bg-maincolor-600 fixed top-0 w-full h-16 z-10 dark:bg-maincolor-900">
        <h1 className="text-center text-3xl md:text-4xl font-[family-name:var(--font-kode-bold-mono)] dark:text-white">My Portfolio</h1>
        <ThemeSwitch />
      </header>
      <main className="flex justify-center p-24 md:p-24 h-full bg-maincolor-50 dark:bg-maincolor-950">  
        <section className="flex w-full md:w-[90%] flex-col justify-center items-center h-[50%]">
          <Tabs aria-label="Options" className="w-full justify-center items-center content-center">
            <TabList className="flex flex-wrap justify-center ">
              <Tab className="bg-maincolor-500 rounded-md p-2 dark:bg-maincolor-900"><p className="font-[family-name:var(--font-kode-bold-mono)] dark:text-white">About Me</p></Tab>
              <Tab className="bg-maincolor-500 rounded-md p-2 dark:bg-maincolor-800"><p className="font-[family-name:var(--font-kode-bold-mono)] dark:text-white">My Projects</p></Tab>
              <Tab className="bg-maincolor-400 rounded-md p-2 dark:bg-maincolor-700"><p className="font-[family-name:var(--font-kode-bold-mono)] dark:text-white">Academic and Laboral Experiences</p></Tab>
              <Tab className="bg-maincolor-300 rounded-md p-2 dark:bg-maincolor-600"><p className="font-[family-name:var(--font-kode-bold-mono)] dark:text-white">Personal Experiences</p></Tab>
              <Tab className="bg-maincolor-200 rounded-md p-2 dark:bg-maincolor-600"><p className="font-[family-name:var(--font-kode-bold-mono)] dark:text-white">Contact Me</p></Tab>
              <Tab className="bg-maincolor-100 rounded-md p-2 dark:bg-maincolor-600"><p className="font-[family-name:var(--font-kode-bold-mono)] dark:text-white">Technical Skills and Tools</p></Tab>
            </TabList>
            <TabPanel className="bg-maincolor-600 grid w-full grid-rows-[auto] md:grid-rows-[40%_auto] p-2 rounded-md md:h-full dark:bg-maincolor-900">
              <section className="flex flex-col md:flex-row bg-maincolor-300 rounded-md dark:bg-maincolor-700">
                <section className="w-full md:w-[25%] p-4 md:ml-5">
                  <h2 className="font-[family-name:var(--font-kode-bold-mono)] text-3xl md:text-6xl dark:text-white">About Me</h2>
                  <p className="font-[family-name:var(--font-kode-bold-mono)] text-sm md:text-base dark:text-white">My name is Hamilton Santiago Insandara Alvarez, i&apos;m 19 years old and I&apos;m a student in the software engineering program at the UCC in Pasto.</p>
                </section>
                <img src="/myphoto.png" alt="Portrait of Hamilton Santiago Insandara Alvarez" className="w-full md:w-[45%] object-contain"></img>
                <p className="w-full md:w-[25%] p-4 text-center md:text-right font-[family-name:var(--font-kode-bold-mono)] text-sm md:text-base dark:text-white">I live in Colombia and I am studying so i can bring my ideas to life through software</p>
              </section>
              <section>
                <section className="items-center justify-center flex sm:flex-row flex-col">
                  <section>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 items-start m-20 sm:mb-52 dark:fill-white" viewBox="0 0 24 24"><path d="M7.061 22c1.523 0 2.84-.543 3.91-1.613 1.123-1.123 1.707-2.854 1.551-4.494l8.564-8.564a3.123 3.123 0 0 0-.002-4.414c-1.178-1.18-3.234-1.18-4.412 0l-8.884 8.884c-1.913.169-3.807 1.521-3.807 3.919 0 .303.021.588.042.86.08 1.031.109 1.418-1.471 2.208a1.001 1.001 0 0 0-.122 1.717C2.52 20.563 4.623 22 7.061 22c-.001 0-.001 0 0 0zM18.086 4.328a1.144 1.144 0 0 1 1.586.002 1.12 1.12 0 0 1 0 1.584L12 13.586 10.414 12l7.672-7.672zM6.018 16.423c-.018-.224-.037-.458-.037-.706 0-1.545 1.445-1.953 2.21-1.953.356 0 .699.073.964.206.945.475 1.26 1.293 1.357 1.896.177 1.09-.217 2.368-.956 3.107C8.865 19.664 8.049 20 7.061 20H7.06c-.75 0-1.479-.196-2.074-.427 1.082-.973 1.121-1.989 1.032-3.15z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 items-end m-20 dark:fill-white" viewBox="0 0 24 24"><path d="M22 8.65A5 5 0 0 0 17 4H7a5 5 0 0 0-5 4.74A2 2 0 0 0 2 9v7.5A3.48 3.48 0 0 0 5.5 20c1.43 0 2.32-1.06 3.19-2.09.32-.37.65-.76 1-1.1a4.81 4.81 0 0 1 1.54-.75 6.61 6.61 0 0 1 1.54 0 4.81 4.81 0 0 1 1.54.75c.35.34.68.73 1 1.1.87 1 1.76 2.09 3.19 2.09a3.48 3.48 0 0 0 3.5-3.5V9a2.09 2.09 0 0 0 0-.26zm-2 7.85a1.5 1.5 0 0 1-1.5 1.5c-.5 0-1-.64-1.66-1.38-.34-.39-.72-.85-1.15-1.26a6.68 6.68 0 0 0-2.46-1.25 6.93 6.93 0 0 0-2.46 0 6.68 6.68 0 0 0-2.46 1.25c-.43.41-.81.87-1.15 1.26C6.54 17.36 6 18 5.5 18A1.5 1.5 0 0 1 4 16.5V9a.77.77 0 0 0 0-.15A3 3 0 0 1 7 6h10a3 3 0 0 1 3 2.72v.12A.86.86 0 0 0 20 9z"></path><circle cx="16" cy="12" r="1"></circle><circle cx="18" cy="10" r="1"></circle><circle cx="16" cy="8" r="1"></circle><circle cx="14" cy="10" r="1"></circle><circle cx="8" cy="10" r="2"></circle></svg>
                  </section>
                  <svg className="w-72 h-72 items-end dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                  <section>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 items-start m-20 sm:mb-52 dark:fill-white" viewBox="0 0 24 24"><path d="m19.684 5.821-9-3.272A1.998 1.998 0 0 0 8 4.428v6.129A3.953 3.953 0 0 0 6 10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V4.428L19 7.7v6.856A3.962 3.962 0 0 0 17 14c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7.7c0-.838-.529-1.594-1.316-1.879zM6 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm11 4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 items-end m-20 dark:fill-white" viewBox="0 0 24 24" ><path d="M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z"></path></svg>
                  </section>
                </section>
                <section>
                  <p className="text-center font-[family-name:var(--font-kode-bold-mono)] text-white">I like videogames, music, art and writing</p>
                </section>
              </section>
            </TabPanel>
            <TabPanel className="bg-maincolor-500 w-full p-2 rounded-md h-full grid grid-rows-[80%_auto] dark:bg-maincolor-800">
              <section className="flex flex-col items-center justify-center h-full">
                <h2 className="text-center font-[family-name:var(--font-kode-bold-mono)] text-3xl md:text-6xl dark:text-white">My Projects</h2>
                <section className="items-center justify-center h-full">
                  <Carousel activeIndex={index} onSelect={handleSelect} className="w-[100%] h-full items-center justify-center" data-bs-ride="false">
                    <Carousel.Item key={1} className="p-10 rounded-md">
                      <section className="grid lg:grid-cols-[20%_auto] grid-rows-[auto_auto] bg-maincolor-200 rounded-md">
                        <img src="/proyectoSpringboot.jpg" alt="Screenshot of Java Spring Boot Course API project" className="h-[100%] border-solid border-2 border-black"></img>
                        <section className="bg-maincolor-200 md:m-2">
                          <p className="font-[family-name:var(--font-kode-bold-mono)] ml-2">A project created for a university course, consisting of an API that stores and retrieves course information from a database</p>
                          <section className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M9.37 17.51c-3.09.86 1.87 2.64 5.8 1a7.18 7.18 0 0 1-1.1-.54 11.59 11.59 0 0 1-4.16.18c-1.31-.15-.54-.64-.54-.64zm5.33-1.68a16.27 16.27 0 0 1-5.36.26c-1.31-.14-.45-.77-.45-.77-3.4 1.12 1.89 2.4 6.64 1a2.25 2.25 0 0 1-.83-.49zm1.82-9.73s-6.87 1.71-3.59 5.49a1.47 1.47 0 0 1-.25 2.12s2.46-1.27 1.33-2.86-1.86-2.22 2.51-4.75z"></path><path d="M18.13 19.14s.56.46-.63.82c-2.27.69-9.43.9-11.42 0-.72-.31.62-.74 1-.83a2.54 2.54 0 0 1 .69-.08c-.8-.56-5.15 1.1-2.21 1.58 8.05 1.37 14.64-.56 12.57-1.49zm-2.76-4.88a7 7 0 0 1 .92-.49s-1.51.27-3 .4a28.11 28.11 0 0 1-4.82.05C6.09 13.91 9.74 13 9.74 13a6.81 6.81 0 0 0-3.16.75c-2.06 1.03 5.09 1.48 8.79.51zm.91 2.44a.39.39 0 0 1-.08.09c5-1.32 3.18-4.65.78-3.81a.71.71 0 0 0-.33.25s.14-.05.43-.12c1.22-.25 2.92 1.63-.8 3.59zM12 13c-.74-1.67-3.26-3.14 0-5.71C16.09 4.08 14 2 14 2c.84 3.31-3 4.31-4.34 6.37-.93 1.41.47 2.92 2.34 4.63z"></path><path d="M16.41 21.32a29.75 29.75 0 0 1-9.14.14s.46.38 2.84.53c3.61.23 9.15-.12 9.29-1.83 0 0-.26.64-2.99 1.16z"></path></svg>
                            <p className="pt-2 ml-2 font-[family-name:var(--font-kode-bold-mono)] text-xl">Java</p>
                          </section>
                          <section className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292.274-2.539-.476-5.763-1.752-9.596"></path></svg>
                            <p className="pt-2 ml-2 font-[family-name:var(--font-kode-bold-mono)] text-xl">Spring Framework</p>
                          </section>
                        </section>
                      </section>
                      <p className="pt-2 pl-2 font-[family-name:var(--font-kode-bold-mono)] text-xl dark:text-white">Course API</p>
                    </Carousel.Item>
                    <Carousel.Item key={2} className="p-10 rounded-md">
                      <section className="grid lg:grid-cols-[20%_auto] grid-rows-[auto_auto] bg-maincolor-200 rounded-md">
                        <img src="/basicTextEditor.jpg" alt="Screenshot of Basic Text Editor project" className="h-[100%] border-solid border-2 border-black"></img>
                        <section className="bg-maincolor-200 md:m-2">
                          <p className="font-[family-name:var(--font-kode-bold-mono)] ml-2">A project created for a university course, it is a basic text editor made in Java using libraries such as JavaSwing and JFrame</p>
                          <section className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M9.37 17.51c-3.09.86 1.87 2.64 5.8 1a7.18 7.18 0 0 1-1.1-.54 11.59 11.59 0 0 1-4.16.18c-1.31-.15-.54-.64-.54-.64zm5.33-1.68a16.27 16.27 0 0 1-5.36.26c-1.31-.14-.45-.77-.45-.77-3.4 1.12 1.89 2.4 6.64 1a2.25 2.25 0 0 1-.83-.49zm1.82-9.73s-6.87 1.71-3.59 5.49a1.47 1.47 0 0 1-.25 2.12s2.46-1.27 1.33-2.86-1.86-2.22 2.51-4.75z"></path><path d="M18.13 19.14s.56.46-.63.82c-2.27.69-9.43.9-11.42 0-.72-.31.62-.74 1-.83a2.54 2.54 0 0 1 .69-.08c-.8-.56-5.15 1.1-2.21 1.58 8.05 1.37 14.64-.56 12.57-1.49zm-2.76-4.88a7 7 0 0 1 .92-.49s-1.51.27-3 .4a28.11 28.11 0 0 1-4.82.05C6.09 13.91 9.74 13 9.74 13a6.81 6.81 0 0 0-3.16.75c-2.06 1.03 5.09 1.48 8.79.51zm.91 2.44a.39.39 0 0 1-.08.09c5-1.32 3.18-4.65.78-3.81a.71.71 0 0 0-.33.25s.14-.05.43-.12c1.22-.25 2.92 1.63-.8 3.59zM12 13c-.74-1.67-3.26-3.14 0-5.71C16.09 4.08 14 2 14 2c.84 3.31-3 4.31-4.34 6.37-.93 1.41.47 2.92 2.34 4.63z"></path><path d="M16.41 21.32a29.75 29.75 0 0 1-9.14.14s.46.38 2.84.53c3.61.23 9.15-.12 9.29-1.83 0 0-.26.64-2.99 1.16z"></path></svg>
                            <p className="pt-2 ml-2 font-[family-name:var(--font-kode-bold-mono)] text-xl">Java</p>
                          </section>
                        </section>
                      </section>
                      <p className="pt-2 pl-2 font-[family-name:var(--font-kode-bold-mono)] text-xl dark:text-white">Basic Text Editor</p>
                    </Carousel.Item>
                    <Carousel.Item key={3} className="p-10 rounded-md">
                      <section className="grid lg:grid-cols-[20%_auto] grid-rows-[auto_auto] bg-maincolor-200 rounded-md">
                        <img src="/dataStructuresProjects.jpg" alt="Screenshot of Data Structures Projects" className="h-[100%] border-solid border-2 border-black"></img>
                        <section className="bg-maincolor-200 md:m-2">
                          <p className="font-[family-name:var(--font-kode-bold-mono)] ml-2">A project created for a university course, it is a basic library management system made using Python and TKinter, built specifically to make use of different data structures such as queues, stacks, arrays and linked lists</p>
                          <section className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"></path><path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"></path></svg>
                            <p className="pt-2 ml-2 font-[family-name:var(--font-kode-bold-mono)] text-xl">Python</p>
                          </section>
                        </section>
                      </section>
                      <p className="pt-2 pl-2 font-[family-name:var(--font-kode-bold-mono)] text-xl dark:text-white">Book Management System</p>
                    </Carousel.Item>
                    <Carousel.Item key={4} className="p-10 rounded-md">
                      <section className="grid lg:grid-cols-[20%_auto] grid-rows-[auto_auto] bg-maincolor-200 rounded-md ">
                        <img src="/linkedinlike.jpg" alt="Screenshot of LinkedIn-like web application project" className="h-[100%] border-solid border-2 border-black"></img>
                        <section className="bg-maincolor-200 md:m-2 ">
                          <p className="font-[family-name:var(--font-kode-bold-mono)] ml-2">A group project created for a university course, it is a web application for a linkedin like page, a social network focused on connecting workers and employers, it uses a PostgreSQL database, a backend built using Django and a frontend using Angular</p>
                          <section className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"></path><path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"></path></svg>
                            <p className="pt-2 ml-2 font-[family-name:var(--font-kode-bold-mono)] text-xl">Python</p>
                          </section>
                          <section className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M7.533 12.249c-.011 1.985 1.445 3.168 3.768 2.63V9.618c-2.352-.716-3.758.733-3.768 2.631m3.839-10.238h3.199v15.143c-3.066.501-6.004.819-8.104-.355-2.705-1.513-2.923-6.319-.782-8.46 1.085-1.085 3.271-1.85 5.616-1.351V2.225c-.006-.101-.012-.202.071-.214m8.389 3.342h-3.199V2.011h3.199v3.342z"></path><path d="M19.761 7.044c-.003 2.356-.003 4.048-.003 6.911-.136 2.813-.104 5.052-1.135 6.398-.203.266-.634.652-.995.924-.303.228-.881.691-1.208.711-.331.021-1.18-.459-1.564-.64-.505-.237-.971-.553-1.493-.71 1.218-.754 2.372-1.32 2.844-2.844.41-1.326.355-3.247.355-5.119 0-1.849.009-3.998.009-5.63l3.19-.001z"></path></svg>
                            <p className="pt-2 ml-2 font-[family-name:var(--font-kode-bold-mono)] text-xl">Django</p>
                          </section>
                          <section className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path></svg>
                            <p className="pt-2 ml-2 font-[family-name:var(--font-kode-bold-mono)] text-xl">HTML</p>
                          </section>
                          <section className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3zm-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 0 1-.67.74 3 3 0 0 1-1 .39 5.81 5.81 0 0 1-1.2.12 7 7 0 0 1-1.23-.11 4.52 4.52 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 0 0 1 .54 3.06 3.06 0 0 0 1.13.2 2.58 2.58 0 0 0 .6-.06 1.47 1.47 0 0 0 .42-.17.75.75 0 0 0 .25-.25.69.69 0 0 0-.06-.74 1.24 1.24 0 0 0-.35-.33 3.12 3.12 0 0 0-.53-.3l-.67-.28a3.57 3.57 0 0 1-1.37-1 2 2 0 0 1-.46-1.33 2.16 2.16 0 0 1 .24-1.06 2.09 2.09 0 0 1 .66-.71 2.88 2.88 0 0 1 1-.42 5.11 5.11 0 0 1 1.19-.13 7 7 0 0 1 1.09.07 4.53 4.53 0 0 1 .88.23v1.65a2.42 2.42 0 0 0-.42-.24 3.58 3.58 0 0 0-.49-.17 3 3 0 0 0-.49-.1 2.45 2.45 0 0 0-.46 0 2.29 2.29 0 0 0-.56.06 1.54 1.54 0 0 0-.43.16.78.78 0 0 0-.26.25.63.63 0 0 0-.09.33.62.62 0 0 0 .1.35 1.19 1.19 0 0 0 .3.29 2.15 2.15 0 0 0 .46.28l.63.28a6.56 6.56 0 0 1 .84.42 2.65 2.65 0 0 1 .64.49 1.79 1.79 0 0 1 .42.63 2.48 2.48 0 0 1 .14.85 2.68 2.68 0 0 1-.25 1.08z"></path></svg>
                            <p className="pt-2 ml-2 font-[family-name:var(--font-kode-bold-mono)] text-xl">Typescript</p>
                          </section>
                          <section className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M10.483 12.482h3.034L12 8.831z"></path><path d="M12 3.074 3.689 6.038l1.268 10.987 7.043 3.9 7.043-3.9 1.268-10.987L12 3.074zm5.187 13.621H15.25l-1.045-2.606h-4.41L8.75 16.695H6.813L12 5.047l5.187 11.648z"></path></svg>
                            <p className="pt-2 ml-2 font-[family-name:var(--font-kode-bold-mono)] text-xl">Angular</p>
                          </section>
                        </section>
                      </section>
                      <p className="pt-2 pl-2 font-[family-name:var(--font-kode-bold-mono)] text-xl dark:text-white">LinkedIn Like Webpage</p>
                    </Carousel.Item>
                    <Carousel.Item key={5} className="p-10 rounded-md">
                      <section className="grid lg:grid-cols-[20%_auto] grid-rows-[auto_auto] bg-maincolor-200 rounded-md">
                        <img src="/sistemaGestionHospital.jpg" alt="Screenshot of Sistema de Gestion Hospital project" className="h-[100%] border-solid border-2 border-black"></img>
                        <section className="bg-maincolor-200 md:m-2">
                          <p className="font-[family-name:var(--font-kode-bold-mono)] ml-2">A project created for a university course, it is a basic program made in java that connects to a MySQL Database and allows users to modify, create and delete data from it, it emulates the basic functions that a management system for a hospital could need</p>
                          <section className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24"><path d="M9.37 17.51c-3.09.86 1.87 2.64 5.8 1a7.18 7.18 0 0 1-1.1-.54 11.59 11.59 0 0 1-4.16.18c-1.31-.15-.54-.64-.54-.64zm5.33-1.68a16.27 16.27 0 0 1-5.36.26c-1.31-.14-.45-.77-.45-.77-3.4 1.12 1.89 2.4 6.64 1a2.25 2.25 0 0 1-.83-.49zm1.82-9.73s-6.87 1.71-3.59 5.49a1.47 1.47 0 0 1-.25 2.12s2.46-1.27 1.33-2.86-1.86-2.22 2.51-4.75z"></path><path d="M18.13 19.14s.56.46-.63.82c-2.27.69-9.43.9-11.42 0-.72-.31.62-.74 1-.83a2.54 2.54 0 0 1 .69-.08c-.8-.56-5.15 1.1-2.21 1.58 8.05 1.37 14.64-.56 12.57-1.49zm-2.76-4.88a7 7 0 0 1 .92-.49s-1.51.27-3 .4a28.11 28.11 0 0 1-4.82.05C6.09 13.91 9.74 13 9.74 13a6.81 6.81 0 0 0-3.16.75c-2.06 1.03 5.09 1.48 8.79.51zm.91 2.44a.39.39 0 0 1-.08.09c5-1.32 3.18-4.65.78-3.81a.71.71 0 0 0-.33.25s.14-.05.43-.12c1.22-.25 2.92 1.63-.8 3.59zM12 13c-.74-1.67-3.26-3.14 0-5.71C16.09 4.08 14 2 14 2c.84 3.31-3 4.31-4.34 6.37-.93 1.41.47 2.92 2.34 4.63z"></path><path d="M16.41 21.32a29.75 29.75 0 0 1-9.14.14s.46.38 2.84.53c3.61.23 9.15-.12 9.29-1.83 0 0-.26.64-2.99 1.16z"></path></svg>
                            <p className="pt-2 ml-2 font-[family-name:var(--font-kode-bold-mono)] text-xl">Java</p>
                          </section>
                        </section>
                      </section>
                      <p className="pt-2 pl-2 font-[family-name:var(--font-kode-bold-mono)] text-xl dark:text-white">Basic Hospital Management System</p>
                    </Carousel.Item>
                  </Carousel>
                </section>
              </section>
            </TabPanel>
            <TabPanel className="bg-maincolor-400 grid w-full grid-rows-[40%_auto] p-2 rounded-md h-full dark:bg-maincolor-700">
              <section className="items-center justify-center">
                <h2 className="md:w-[40%] font-[family-name:var(--font-kode-bold-mono)] text-3xl dark:text-white">Academic And Laboral Experiences</h2>
                <section className="flex items-center flex-col">
                  <section className="grid grid-rows-[auto_auto_auto] md:grid-cols-[20%_50%_30%] mt-10">
                    <section className="mt-3 md:border-solid md:border-t-2 md:border-black dark:border-white">
                      <p className="font-[family-name:var(--font-kode-bold-mono)] invisible dark:text-white">-------------</p>
                    </section>
                    <section className="">
                      <h3 className="font-[family-name:var(--font-kode-bold-mono)] text-3xl dark:text-white">Academic Experience</h3>
                      <p className="font-[family-name:var(--font-kode-bold-mono)] dark:text-white">At University I have been able to create several projects using languages such as Python, Java, html, etc and some frameworks such as Tailwind and Springboot, while also learning about good practices while coding and the different stages of software development, i also have the chance of sharing and collaborating with my peers, learning about teamwork and soft skills </p>
                    </section>
                    <section>
                      <img src="/universidad.jpg" alt="Photo of campus" className="w-full p-3"></img>
                    </section>
                  </section>
                  <section className="grid md:grid-cols-[30%_50%_20%] grid-rows-[auto_auto_auto] mt-10">
                    <section className="row-start-2 md:col-start-1 md:row-span-full">
                      <img src="/tienda.jpg" alt="Photo of store" className="w-full p-3"></img>
                    </section>
                    <section className="items-end row-start-1 md:col-start-2 md:row-span-full">
                      <h3 className="font-[family-name:var(--font-kode-bold-mono)] text-3xl text-end dark:text-white">Laboral Experience</h3>
                      <p className="font-[family-name:var(--font-kode-bold-mono)] text-end dark:text-white">Currently i do not have experience within the field of software development, so far, i have only worked on a small grocery shop.</p>
                    </section>
                    <section className="row-start-3 md:col-start-3 md:row-span-full mt-3 md:border-solid md:border-t-2 md:border-black dark:border-white">
                      <p className="font-[family-name:var(--font-kode-bold-mono)] invisible dark:text-white">-------------</p>
                    </section>
                  </section>
                </section>
              </section>
            </TabPanel>
            <TabPanel className="bg-maincolor-300 grid w-full grid-rows-[40%_auto] p-2 rounded-md h-full dark:bg-maincolor-600">
              <section className="items-center justify-center">
                <h2 className="md:w-[40%] font-[family-name:var(--font-kode-bold-mono)] text-3xl dark:text-white">
                  My Personal Experiences
                </h2>
                <section className="flex items-center md:flex-row flex-col">
                  <section className="items-center w-[60%]">
                    <img src={selectedImage} className="rounded-full w-full" alt="Experience" />
                  </section>
                  <section className="flex flex-column p-3">
                    {experiences.map((experience, index) => (
                      <section
                        key={index}
                        className="bg-maincolor-400 p-2 rounded-lg m-2 border-solid border-black border-1 cursor-pointer dark:bg-maincolor-700 dark:border-white"
                        onClick={() => setSelectedImage(experience.image)}
                      >
                        <h3 className="font-[family-name:var(--font-kode-bold-mono)] text-3xl dark:text-white">
                          {experience.title}
                        </h3>
                        <p className="font-[family-name:var(--font-kode-bold-mono)] dark:text-white">
                          {experience.description}
                        </p>
                      </section>
                    ))}
                  </section>
                </section>
              </section>
            </TabPanel>
            <TabPanel className="bg-maincolor-200 grid w-full grid-rows-[auto] md:grid-rows-[40%_auto] p-2 rounded-md h-full dark:bg-maincolor-500">
              <section className="items-center justify-center place-items-center">
                <h2 className="w-full md:w-[40%] font-[family-name:var(--font-kode-bold-mono)] text-3xl dark:text-white">Contact Me</h2>
                <section className="bg-maincolor-300 p-2 rounded-lg m-2 flex flex-col xl:flex-row items-center justify-center place-items-center dark:bg-maincolor-600">
                  <section className="xl:justify-center xl:p-20 border-solid xl:border-r-2 border-b-2 xl:border-b-0 border-black w-full xl:w-auto dark:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-24 md:h-24 mx-auto dark:fill-white" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                    <h3 className="font-[family-name:var(--font-kode-bold-mono)] text-3xl text-center dark:text-white">Personal Email</h3>
                    <p className="font-[family-name:var(--font-kode-bold-mono)] text-sm md:text-base text-center dark:text-white">hamisan36@gmail.com</p>
                  </section>
                  <section className="xl:justify-center xl:p-20 border-solid xl:border-r-2 border-b-2 xl:border-b-0 border-black w-full xl:w-auto dark:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-24 md:h-24 mx-auto dark:fill-white" viewBox="0 0 24 24"><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>
                    <h3 className="font-[family-name:var(--font-kode-bold-mono)] text-3xl text-center dark:text-white">Phone Number</h3>
                    <p className="font-[family-name:var(--font-kode-bold-mono)] text-sm md:text-base text-center dark:text-white">3148308355</p>
                  </section>
                  <section className="xl:justify-center xl:p-10 xl:border-b-0 w-full xl:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-24 md:h-24 mx-auto dark:fill-white" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>
                    <h3 className="font-[family-name:var(--font-kode-bold-mono)] text-wrap text-3xl text-center dark:text-white">Institutional Email</h3>
                    <p className="font-[family-name:var(--font-kode-bold-mono)] text-wrap text-sm md:text-base text-center dark:text-white">hamilton.insandara@campusucc.edu.co</p>
                  </section>
                </section>
              </section>
            </TabPanel>
            <TabPanel className="bg-maincolor-100 grid w-full grid-rows-[40%_auto] p-2 rounded-md h-full dark:bg-maincolor-400">
              <section className="items-center justify-center">
                <h2 className="md:w-[40%] w-full font-[family-name:var(--font-kode-bold-mono)] text-3xl">Technical Skills and Tools</h2>
                <section className="items-center bg-maincolor-300 flex flex-col xl:flex-row rounded-md dark:bg-maincolor-600">
                  <section className="flex flex-col">
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex md:flex-row flex-col dark:bg-maincolor-500">
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)] text-2xl">Java</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)]">I am familiar with the usage of the java language due to its usage within our university projects</p>
                      </section>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-56 md:-mr-12 dark:fill-white" viewBox="0 0 24 24"><path d="M9.37 17.51c-3.09.86 1.87 2.64 5.8 1a7.18 7.18 0 0 1-1.1-.54 11.59 11.59 0 0 1-4.16.18c-1.31-.15-.54-.64-.54-.64zm5.33-1.68a16.27 16.27 0 0 1-5.36.26c-1.31-.14-.45-.77-.45-.77-3.4 1.12 1.89 2.4 6.64 1a2.25 2.25 0 0 1-.83-.49zm1.82-9.73s-6.87 1.71-3.59 5.49a1.47 1.47 0 0 1-.25 2.12s2.46-1.27 1.33-2.86-1.86-2.22 2.51-4.75z"></path><path d="M18.13 19.14s.56.46-.63.82c-2.27.69-9.43.9-11.42 0-.72-.31.62-.74 1-.83a2.54 2.54 0 0 1 .69-.08c-.8-.56-5.15 1.1-2.21 1.58 8.05 1.37 14.64-.56 12.57-1.49zm-2.76-4.88a7 7 0 0 1 .92-.49s-1.51.27-3 .4a28.11 28.11 0 0 1-4.82.05C6.09 13.91 9.74 13 9.74 13a6.81 6.81 0 0 0-3.16.75c-2.06 1.03 5.09 1.48 8.79.51zm.91 2.44a.39.39 0 0 1-.08.09c5-1.32 3.18-4.65.78-3.81a.71.71 0 0 0-.33.25s.14-.05.43-.12c1.22-.25 2.92 1.63-.8 3.59zM12 13c-.74-1.67-3.26-3.14 0-5.71C16.09 4.08 14 2 14 2c.84 3.31-3 4.31-4.34 6.37-.93 1.41.47 2.92 2.34 4.63z"></path><path d="M16.41 21.32a29.75 29.75 0 0 1-9.14.14s.46.38 2.84.53c3.61.23 9.15-.12 9.29-1.83 0 0-.26.64-2.99 1.16z"></path></svg>
                    </section>
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex md:flex-row flex-col dark:bg-maincolor-500">
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)] text-2xl ">Python</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)] ">I am familiar with the usage of python, learning it through university and independently through the internet</p>
                      </section>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-56 md:-mr-12 dark:fill-white" viewBox="0 0 24 24"><path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"></path><path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"></path></svg>
                    </section>
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex md:flex-row flex-col dark:bg-maincolor-500">
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)] text-2xl ">C++</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)] ">I learned  c++ to a basic level through independent means</p>
                      </section>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-48 md:-mr-12 dark:fill-white" viewBox="0 0 24 24"><path d="M20.66 7a1.51 1.51 0 0 0-.55-.57l-7.34-4.24a1.67 1.67 0 0 0-1.54 0L3.89 6.43a1.68 1.68 0 0 0-.77 1.33v8.48a1.57 1.57 0 0 0 .22.76 1.51 1.51 0 0 0 .55.57l7.34 4.24a1.67 1.67 0 0 0 1.54 0l7.34-4.24a1.51 1.51 0 0 0 .55-.57 1.57 1.57 0 0 0 .22-.76V7.76a1.57 1.57 0 0 0-.22-.76zM12 17.92A5.92 5.92 0 1 1 17.13 9L16 9.71l-.36.2-1 .61A3 3 0 0 0 9 12a2.88 2.88 0 0 0 .4 1.48 3 3 0 0 0 5.13 0l2.6 1.52A5.94 5.94 0 0 1 12 17.92zm5.92-5.59h-.66V13h-.65v-.66H16v-.66h.66V11h.65v.66h.66zm2.47 0h-.66V13h-.66v-.66h-.65v-.66h.65V11h.66v.66h.66z"></path></svg>
                    </section>
                  </section>
                  <section className="items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 dark:fill-white" viewBox="0 0 24 24"><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path></svg>
                  </section>
                  <section className="flex flex-col">
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex md:flex-row flex-col dark:bg-maincolor-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-56 md:-ml-12 dark:fill-white" viewBox="0 0 24 24"><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)] text-2xl">English</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)]">As of now, my English level is considered to be B2, and I can understand both written and spoken English, as well as write and speak it myself.</p>
                      </section>
                    </section>
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex md:flex-row flex-col dark:bg-maincolor-500">
                      <section className=" flex md:flex-col flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="md:w-8 md:-ml-6 md:-mt-20 dark:fill-white" viewBox="0 0 24 24"><path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="md:w-12 md:-ml-10 dark:fill-white" viewBox="0 0 24 24"><path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="md:w-8 md:-ml-10 md:-mb-20 dark:fill-white" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path></svg>
                      </section>
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)] text-2xl">Web Development</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)]">I have basic experience with the usage of basic web development tools such as javascript, html and css</p>
                      </section>
                    </section>
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex md:flex-row flex-col dark:bg-maincolor-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-48 md:-ml-12 dark:fill-white" viewBox="0 0 24 24"><path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292.274-2.539-.476-5.763-1.752-9.596"></path></svg>
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)] text-2xl">Spring Boot</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)]">I have used spring boot to create a java API REST in university</p>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </TabPanel>
          </Tabs>
          <p className="place-self-center mt-20 font-[family-name:var(--font-kode-bold-mono)] dark:text-white">Made by Hamilton Santiago Insandara Alvarez</p>
        </section>
      </main>
    </section>
  );
}
