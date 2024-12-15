import React from "react";
import { Carousel } from "flowbite-react";

import IMG from "./IMG/ISRO-Certificate.jpg";
import IMG2 from "./IMG/UPSDM.jpg";
import IMG3 from "./IMG/Praveen Kumar Gupta_Winter Internship Completion Certificate (2).jpg";
import IMG4 from "./IMG/Ardent Reader.jpg";
import IMG5 from "./IMG/Bharat Intern .jpg";
import IMG6 from "./IMG/certificate.jpg";
import IMG7 from "./IMG/IIIT Allahabad.jpg";
import IMG9 from "./IMG/most aware child.jpg";
import IMG8 from "./IMG/Oasis INFOBYTE.jpg";
import IMG10 from "./IMG/sunfest 2018.jpg";
import IMG11 from "./IMG/Tata Consultancy Services completion_certificate.jpg";
const Index = () => {

  return (
    <div className="h-[25rem] mx-auto lg:h-[33rem]  xl:w-[65%] lg:w-5/6">

      <div className="h-full p-6  lg:w-5/6 mx-auto ">
        <Carousel className="lg:px-28 lg:m-[-9rem] mx-auto h-full w-5/6 " slideInterval={1000} >
          <img height={100} src={IMG} alt="ISRO-Certificate" />
          <img height={100} src={IMG2} alt="UPSDM" />
          <img height={100} src={IMG3} alt="AhaSolar Winter Internship" />
          <img height={100} src={IMG4} alt="Ardent Reader" />
          <img height={100} src={IMG5} alt="Bharat Intern" />
          <img height={100} src={IMG6} alt="certificate" />
          <img height={100} src={IMG7} alt="IIIT Allahabad" />
          <img height={100} src={IMG8} alt="Oasis INFOBYTE" />
          <img height={100} src={IMG9} alt="most aware child" />
          <img height={100} src={IMG10} alt="sunfest 2018" />
          <img height={100} src={IMG11} alt="TCS" />
        </Carousel>
      </div>
    </div>

  );
};

export default Index;
