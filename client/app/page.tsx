'use client'
import React,{FC,useState} from 'react';
import Heading from './utils/Heading';
import Header from './components/Header';
import Hero from './components/Route/Hero';
import Courses from "./components/Route/Courses"
import Reviews from "./components/Route/Reviews";
import FAQ from "./components/FAQ/FAQ";
import Footer from './components/Footer';
interface Props{}

const Page:FC<Props>=()=>{
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    
    <div>
      <Heading
        title="My Learning"
        description='MyLearning is a platform for students to learn and get help from teachers'
        keywords='Programing'
      />
    <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Hero />
        <Courses/>
        <Reviews/>
        <FAQ/>
        <Footer/>
    </div>
  )
}
export default Page;
