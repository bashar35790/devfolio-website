import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="mx-auto py-20 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* bio setion */}
      <section className="text-lg text-secondary max-w-3xl mx-auto text-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          assumenda ea culpa. Quasi voluptate repellat hic veniam. Reprehenderit
          eos placeat eveniet debitis, maxime ad natus recusandae, nostrum
          explicabo quam tempora?
        </p>
      </section>

      {/* skill section  */}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg Shadow-md">
            <FaCode className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind css</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg Shadow-md">
            <FaLaptopCode className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg Shadow-md">
            <FaCode className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools and Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* experience section */}
      <section className="mb-16">
        <h2 className="section-title">Expriences</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3>Senior Full Stack Developer</h3>
            <p className="text-primary mb-2">WellDev •2020--present</p>
            <ul className="text-secondary list-disc space-y-2 list-inside">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3>Senior Full Stack Developer</h3>
            <p className="text-primary mb-2">WellDev •2020--present</p>
            <ul className="text-secondary list-disc space-y-2 list-inside">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
        
      </section>

    {/* education section  */}
    <section className="mb-16"> 
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3>Computer Science And Engineering</h3>
            <p className="text-primary mb-2">ZUMS University •2025--present</p>
            <ul className="text-secondary list-disc space-y-2 list-inside">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
   
        </div>
        
      </section>


    </div>
  );
};

export default About;
