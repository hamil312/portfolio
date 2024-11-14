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
  return (
    <section>
      <header className="bg-maincolor-600 fixed top-0 w-full h-16 z-10">
        <h1 className="text-center font-[family-name:var(--font-kode-bold-mono)]">My Portfolio</h1>
        <ThemeSwitch />
      </header>
      <main className="flex justify-center p-24 w-screen h-full bg-maincolor-50">  
        <section className="flex w-[90%] flex-col items-center h-[50%]">
          <Tabs aria-label="Options" >
            <TabList>
              <Tab>About Me</Tab>
              <Tab>My Projects</Tab>
              <Tab>Academic and Laboral Experiences</Tab>
              <Tab>Personal Experiences</Tab>
              <Tab>Contact Me</Tab>
              <Tab>Technical Skills and Tools</Tab>
            </TabList>
            <TabPanel className="bg-maincolor-600 grid w-full grid-rows-[40%_auto] p-2 rounded-md h-full">
              <section className="grid bg-maincolor-300 rounded-md">
                <h2 className="font-[family-name:var(--font-kode-bold-mono)] text-6xl">About Me</h2>
                <p className="w-[40%]">My name is Hamilton Santiago Insandara Alvarez, i’m 19 years old and I’m a student in the software engineering program at the UCC in Pasto.</p>
                <p className="ml-[60%] w-[40%] relative top-32">I live in Colombia and i’m studying so i can bring my ideas to life through software</p>
                <img src="/myphoto.png" className="h-96 ml-[40%] mt-[-10%]"></img>
              </section>
              <section className="items-center justify-center">
                <section className="items-center">
                  <section className="items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 relative top-24 left-[30%]" viewBox="0 0 24 24"><path d="M7.061 22c1.523 0 2.84-.543 3.91-1.613 1.123-1.123 1.707-2.854 1.551-4.494l8.564-8.564a3.123 3.123 0 0 0-.002-4.414c-1.178-1.18-3.234-1.18-4.412 0l-8.884 8.884c-1.913.169-3.807 1.521-3.807 3.919 0 .303.021.588.042.86.08 1.031.109 1.418-1.471 2.208a1.001 1.001 0 0 0-.122 1.717C2.52 20.563 4.623 22 7.061 22c-.001 0-.001 0 0 0zM18.086 4.328a1.144 1.144 0 0 1 1.586.002 1.12 1.12 0 0 1 0 1.584L12 13.586 10.414 12l7.672-7.672zM6.018 16.423c-.018-.224-.037-.458-.037-.706 0-1.545 1.445-1.953 2.21-1.953.356 0 .699.073.964.206.945.475 1.26 1.293 1.357 1.896.177 1.09-.217 2.368-.956 3.107C8.865 19.664 8.049 20 7.061 20H7.06c-.75 0-1.479-.196-2.074-.427 1.082-.973 1.121-1.989 1.032-3.15z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 relative top-[10%] left-[67%]" viewBox="0 0 24 24"><path d="M22 8.65A5 5 0 0 0 17 4H7a5 5 0 0 0-5 4.74A2 2 0 0 0 2 9v7.5A3.48 3.48 0 0 0 5.5 20c1.43 0 2.32-1.06 3.19-2.09.32-.37.65-.76 1-1.1a4.81 4.81 0 0 1 1.54-.75 6.61 6.61 0 0 1 1.54 0 4.81 4.81 0 0 1 1.54.75c.35.34.68.73 1 1.1.87 1 1.76 2.09 3.19 2.09a3.48 3.48 0 0 0 3.5-3.5V9a2.09 2.09 0 0 0 0-.26zm-2 7.85a1.5 1.5 0 0 1-1.5 1.5c-.5 0-1-.64-1.66-1.38-.34-.39-.72-.85-1.15-1.26a6.68 6.68 0 0 0-2.46-1.25 6.93 6.93 0 0 0-2.46 0 6.68 6.68 0 0 0-2.46 1.25c-.43.41-.81.87-1.15 1.26C6.54 17.36 6 18 5.5 18A1.5 1.5 0 0 1 4 16.5V9a.77.77 0 0 0 0-.15A3 3 0 0 1 7 6h10a3 3 0 0 1 3 2.72v.12A.86.86 0 0 0 20 9z"></path><circle cx="16" cy="12" r="1"></circle><circle cx="18" cy="10" r="1"></circle><circle cx="16" cy="8" r="1"></circle><circle cx="14" cy="10" r="1"></circle><circle cx="8" cy="10" r="2"></circle></svg>
                    <svg className="w-72 h-72 ml-[40%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 relative bottom-24 left-[25%]" viewBox="0 0 24 24"><path d="m19.684 5.821-9-3.272A1.998 1.998 0 0 0 8 4.428v6.129A3.953 3.953 0 0 0 6 10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V4.428L19 7.7v6.856A3.962 3.962 0 0 0 17 14c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7.7c0-.838-.529-1.594-1.316-1.879zM6 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm11 4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 relative bottom-48 left-[72%]" viewBox="0 0 24 24" ><path d="M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z"></path></svg>
                  </section>
                  <section>
                    <p className="text-center relative bottom-40">I like stuff</p>
                  </section>
                </section>
              </section>
            </TabPanel>
            <TabPanel className="bg-maincolor-500 w-full p-2 rounded-md h-full">
              <section className="flex flex-col items-center justify-center">
                <h2 className="text-center font-[family-name:var(--font-kode-bold-mono)]">My Projects</h2>
                <section className="items-center justify-center">
                  <Carousel activeIndex={index} onSelect={handleSelect} className="w-[90%]" data-bs-ride="false">
                    <Carousel.Item key={1} className="p-10 rounded-md bg-maincolor-400">
                      <section className="grid grid-cols-[20%_auto]">
                        <section>
                          <p>hello</p>
                        </section>
                        <section className="bg-maincolor-400">
                          <p className="font-[family-name:var(--font-kode-bold-mono)]">A project created for a university course, consisting of an API that stores and retrieves course information from a database</p>
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
                    </Carousel.Item>
                    <Carousel.Item key={2} className="p-10 rounded-md bg-maincolor-400">
                      <section className="grid grid-cols-[20%_auto] ">
                        <section>
                          <p>hello</p>
                        </section>
                        <section className="bg-maincolor-400">
                          <p className="font-[family-name:var(--font-kode-bold-mono)]">A project created for a university course, consisting of an API that stores and retrieves course information from a database</p>
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
                    </Carousel.Item>
                  </Carousel>
                </section>
              </section>
            </TabPanel>
            <TabPanel className="bg-maincolor-400 grid w-full grid-rows-[40%_auto] p-2 rounded-md h-full">
              <section className="items-center justify-center">
                <h2 className="w-[40%] font-[family-name:var(--font-kode-bold-mono)]">Academic And Laboral Experiences</h2>
                <section className="flex items-center flex-col">
                  <section className="grid grid-cols-[20%_50%_30%] mt-10">
                    <section>
                      <h3 className="font-[family-name:var(--font-kode-bold-mono)]">-------------</h3>
                    </section>
                    <section>
                      <h3 className="font-[family-name:var(--font-kode-bold-mono)]">Academic Experience</h3>
                      <p className="font-[family-name:var(--font-kode-bold-mono)]">At University I have been able to create several projects using languages such as Python, Java, html, etc and some frameworks such as Tailwind and Springboot, while also learning about good practices while coding and the different stages of software development, i also have the chance of sharing and collaborating with my peers, learning about teamwork and soft skills </p>
                    </section>
                    <section>
                      <img src="/universidad.jpg" className="w-full p-3"></img>
                    </section>
                  </section>
                  <section className="grid grid-cols-[30%_50%_20%] mt-10">
                    <section>
                      <img src="/tienda.jpg" className="w-full p-3"></img>
                    </section>
                    <section className="items-end justify-end">
                      <h3 className="font-[family-name:var(--font-kode-bold-mono)] text-end">Academic Experience</h3>
                      <p className="font-[family-name:var(--font-kode-bold-mono)] text-end">At University I have been able to create several projects using languages such as Python, Java, html, etc and some frameworks such as Tailwind and Springboot, while also learning about good practices while coding and the different stages of software development, i also have the chance of sharing and collaborating with my peers, learning about teamwork and soft skills </p>
                    </section>
                    <section>
                      <h3 className="font-[family-name:var(--font-kode-bold-mono)]">-------------</h3>
                    </section>
                  </section>
                </section>
              </section>
            </TabPanel>
            <TabPanel className="bg-maincolor-300 grid w-full grid-rows-[40%_auto] p-2 rounded-md h-full">
              <section className="items-center justify-center">
                <h2 className="w-[40%] font-[family-name:var(--font-kode-bold-mono)]">My Personal Experiences</h2>
                <section className="flex items-center flex-row">
                  <section className="items-center w-[60%]">
                    <img src="/chicken.jpg" className="rounded-full w-full"></img>
                  </section>
                  <section className="flex flex-column p-3">
                    <section className="bg-maincolor-400 p-2 rounded-lg m-2 border-solid border-black border-1">
                      <h3 className="font-[family-name:var(--font-kode-bold-mono)]">Basic and Medium Education</h3>
                      <p className="font-[family-name:var(--font-kode-bold-mono)]">I studied at the IEM Pedagógico in the city of Pasto, where I received basic education focused on the values of Respect, solidarity, responsability and honesty</p>
                    </section>
                    <section className="bg-maincolor-400 p-2 rounded-lg m-2 border-solid border-black border-1">
                      <h3 className="font-[family-name:var(--font-kode-bold-mono)]">Engineering Seminar</h3>
                      <p className="font-[family-name:var(--font-kode-bold-mono)]">At UCC, students have the opportunity to participate in a seminar dedicated to discussing various relevant engineering topics.</p>
                    </section>
                    <section className="bg-maincolor-400 p-2 rounded-lg m-2 border-solid border-black border-1">
                      <h3 className="font-[family-name:var(--font-kode-bold-mono)]">Animals</h3>
                      <p className="font-[family-name:var(--font-kode-bold-mono)]">I am partly in charge of taking care of a group of hens, which includes checking for diseases, checking that they don’t go missing, feeding them, provide treatment for illnesses, etc.</p>
                    </section>
                  </section>
                </section>
              </section>
            </TabPanel>
            <TabPanel className="bg-maincolor-200 grid w-full grid-rows-[40%_auto] p-2 rounded-md h-full">
              <section className="items-center justify-center">
                <h2 className="w-[40%] font-[family-name:var(--font-kode-bold-mono)]">Contact Me</h2>
                <section className="bg-maincolor-300 p-2 rounded-lg m-2 flex flex-row items-center justify-center">
                  <section className="p-2 border-solid border-r-2 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                    <h3 className="font-[family-name:var(--font-kode-bold-mono)]">Personal Email</h3>
                    <p className="font-[family-name:var(--font-kode-bold-mono)]">hamisan36@gmail.com</p>
                  </section>
                  <section className="p-2 border-solid border-r-2 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24"><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>
                    <h3 className="font-[family-name:var(--font-kode-bold-mono)]">Phone Number</h3>
                    <p className="font-[family-name:var(--font-kode-bold-mono)]">3148308355</p>
                  </section>
                  <section className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>
                    <h3 className="font-[family-name:var(--font-kode-bold-mono)]">Institutional Email</h3>
                    <p className="font-[family-name:var(--font-kode-bold-mono)]">hamilton.insandara@campusucc.edu.co</p>
                  </section>
                </section>
              </section>
            </TabPanel>
            <TabPanel className="bg-maincolor-100 grid w-full grid-rows-[40%_auto] p-2 rounded-md h-full">
              <section className="items-center justify-center">
                <h2 className="w-[40%] font-[family-name:var(--font-kode-bold-mono)]">Technical Skills and Tools</h2>
                <section className="items-center bg-maincolor-300 flex flex-row">
                  <section className="flex flex-col">
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex flex-row">
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)]">Java</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)]">I am familiar with the usage of the java language due to its usage within our university projects</p>
                      </section>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-64 -mr-12" viewBox="0 0 24 24"><path d="M9.37 17.51c-3.09.86 1.87 2.64 5.8 1a7.18 7.18 0 0 1-1.1-.54 11.59 11.59 0 0 1-4.16.18c-1.31-.15-.54-.64-.54-.64zm5.33-1.68a16.27 16.27 0 0 1-5.36.26c-1.31-.14-.45-.77-.45-.77-3.4 1.12 1.89 2.4 6.64 1a2.25 2.25 0 0 1-.83-.49zm1.82-9.73s-6.87 1.71-3.59 5.49a1.47 1.47 0 0 1-.25 2.12s2.46-1.27 1.33-2.86-1.86-2.22 2.51-4.75z"></path><path d="M18.13 19.14s.56.46-.63.82c-2.27.69-9.43.9-11.42 0-.72-.31.62-.74 1-.83a2.54 2.54 0 0 1 .69-.08c-.8-.56-5.15 1.1-2.21 1.58 8.05 1.37 14.64-.56 12.57-1.49zm-2.76-4.88a7 7 0 0 1 .92-.49s-1.51.27-3 .4a28.11 28.11 0 0 1-4.82.05C6.09 13.91 9.74 13 9.74 13a6.81 6.81 0 0 0-3.16.75c-2.06 1.03 5.09 1.48 8.79.51zm.91 2.44a.39.39 0 0 1-.08.09c5-1.32 3.18-4.65.78-3.81a.71.71 0 0 0-.33.25s.14-.05.43-.12c1.22-.25 2.92 1.63-.8 3.59zM12 13c-.74-1.67-3.26-3.14 0-5.71C16.09 4.08 14 2 14 2c.84 3.31-3 4.31-4.34 6.37-.93 1.41.47 2.92 2.34 4.63z"></path><path d="M16.41 21.32a29.75 29.75 0 0 1-9.14.14s.46.38 2.84.53c3.61.23 9.15-.12 9.29-1.83 0 0-.26.64-2.99 1.16z"></path></svg>
                    </section>
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex flex-row">
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)]">Python</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)]">I am familiar with the usage of python, learning it through university and independently through the internet</p>
                      </section>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-64 -mr-12" viewBox="0 0 24 24"><path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"></path><path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"></path></svg>
                    </section>
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex flex-row">
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)]">C++</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)]">I learned  c++ to a basic level through independent means</p>
                      </section>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-64 -mr-12" viewBox="0 0 24 24"><path d="M20.66 7a1.51 1.51 0 0 0-.55-.57l-7.34-4.24a1.67 1.67 0 0 0-1.54 0L3.89 6.43a1.68 1.68 0 0 0-.77 1.33v8.48a1.57 1.57 0 0 0 .22.76 1.51 1.51 0 0 0 .55.57l7.34 4.24a1.67 1.67 0 0 0 1.54 0l7.34-4.24a1.51 1.51 0 0 0 .55-.57 1.57 1.57 0 0 0 .22-.76V7.76a1.57 1.57 0 0 0-.22-.76zM12 17.92A5.92 5.92 0 1 1 17.13 9L16 9.71l-.36.2-1 .61A3 3 0 0 0 9 12a2.88 2.88 0 0 0 .4 1.48 3 3 0 0 0 5.13 0l2.6 1.52A5.94 5.94 0 0 1 12 17.92zm5.92-5.59h-.66V13h-.65v-.66H16v-.66h.66V11h.65v.66h.66zm2.47 0h-.66V13h-.66v-.66h-.65v-.66h.65V11h.66v.66h.66z"></path></svg>
                    </section>
                  </section>
                  <section className="items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-48 h-48" viewBox="0 0 24 24"><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path></svg>
                  </section>
                  <section className="flex flex-col">
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex flex-row">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-64 -ml-12" viewBox="0 0 24 24"><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)]">English</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)]">As of now, my English level is considered to be B2, and I can understand both written and spoken English, as well as write and speak it myself.</p>
                      </section>
                    </section>
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex flex-row">
                      <section>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 -ml-6 -mt-5" viewBox="0 0 24 24"><path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 -ml-10" viewBox="0 0 24 24"><path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 -ml-6 -mb-5" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path></svg>
                      </section>
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)]">Web Development</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)]">I have basic experience with the usage of basic web development tools such as javascript, html and css</p>
                      </section>
                    </section>
                    <section className="bg-maincolor-400 p-2 rounded-lg m-5 border-solid border-black border-1 flex flex-row">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-64 -ml-12" viewBox="0 0 24 24"><path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292.274-2.539-.476-5.763-1.752-9.596"></path></svg>
                      <section>
                        <h5 className="font-[family-name:var(--font-kode-bold-mono)]">Spring Boot</h5>
                        <p className="font-[family-name:var(--font-kode-bold-mono)]">I have used spring boot to create a java API REST in university</p>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </TabPanel>
          </Tabs>
        </section>
      </main>
    </section>
  );
}
