const ProjectCard = ({data}) => {


    return (
        <>
            <div className="text-[#000000] flex mt-16 ml-16">
                
                <div className="relative">
                    <div className="pointer-events-none">
                    <img src="macbook.svg" className="w-[1200px]" />
                    </div>
                    <div className="absolute top-0 left-0">
                        <div className="flex flex-col mx-24">
                            <div className="mt-16">
                                <img src={data.image} />
                            </div>
                            
                        </div>
                    </div>
                   

                    <div className="flex w-full items-center justify-around p-16">
                                <button className="bg-white rounded-full w-12 cursor-pointer z-10">
                                <a href={data.github} target="_blank"> <img src='github.svg' className="w-full"/> </a>
                                </button>
                                <button className="bg-black text-white w-24 h-12 text-xl rounded-2xl cursor-pointer z-10">
                                    <a href={data.deployment} target="_blank">Demo</a>
                                </button>
                    </div>
                </div>
                <div className="w-[40%] px-20 mt-8">
                    <h1 className="p-2 text-3xl">{data.name}</h1>
                    <h3 className="p-2 text-md">{data.description}</h3>
                    <div className="p-2 text-md">
                        <h3>Key Features : </h3>
                        <ul className="list-disc pl-8">
                            {data.features.split(',').map((feature, index) => (
                                <li key={index}>{feature.trim()}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="px-2 text-md">
                        <h2>Tech Stack:</h2>
                        <ul className="list-disc pl-8">
                            {data.tech_stack.split(',').map((tech, index) => (
                                <li key={index}>{tech.trim()}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectCard







// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import ProjectCard from "./ProjectCard";


// export default function ProjectsShowcase() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const data = [
//     {
//     'name' : 'Reelify',
//     'description' : 'Reelify is a video-on-demand web app enabling seamless video streaming.',
//     'features': 'People can create channels, Watch videos, Subscribe to other channels, Like and Comment on   videos, Watch their history',
//     'tech_stack':'React.js, Node.js, Express.js, MongoDB, Cloudinary, Render, Vercel',
//     'github':'https://github.com/agrawalshreyansh/reelify',
//     'deployment':'https://reeelify.vercel.app/',
//     'image':'ss1.png'
//     },
//     {
//       'name' : 'Pujamart',
//       'description' : 'Full-stack e-commerce website for selling Puja items.',
//       'features': 'E-commerce app with seamless product listing, Checkout, Custom user registration via Email verification, Secure backend',
//       'tech_stack':'Django, HTML, CSS, JavaScript, Pythonanywhere',
//       'github':'',
//       'deployment':'https://shrage.pythonanywhere.com/',
//       'image':'ss.png'
//       },
//       {
//         'name' : 'NxtUp',
//         'description' : 'Built a product with a team of 8 to streamline event management at our university.',
//         'features': 'End-to-end event management including Registrations, Result Declaration, Admin panel for adding and controlling events',
//         'tech_stack':'React.js, Node.js, MongoDB, Tailwind CSS, Render, Vercel',
//         'github':'https://github.com/agrawalshreyansh/client-nxtup',
//         'deployment':'https://nxtup.in/',
//         'image':'ss3.png'
//         },
//         {
//           'name' : 'Capstone Evaluator',
//           'description' : 'We built a portal for students to submit their capstone and a different portal for teachers to then evaluate the projects.',
//           'features': 'Student Portal for submission, Admin Portal for Evaluation and Sending results, Direct Report Card sending via Email',
//           'tech_stack':'React.js, Node.js, Express.js, MongoDB, Render, Vercel',
//           'github':'https://github.com/capston-review-nst-ru/frontend',
//           'deployment':'https://capstone-review-nst.vercel.app/',
//           'image':'ss4.png'
//           },
//   ]

  
//   const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);
//   const opacity2 = useTransform(scrollYProgress, [0.25, 0.5, 0.55], [0, 1, 0]);
//   const opacity3 = useTransform(scrollYProgress, [0.5, 0.75, 0.8], [0, 1, 0]);
//   const opacity4 = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

//   return (
//     <div ref={containerRef} className="h-[400vh] bg-[#a3b18a]">
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//         <motion.div className="w-full h-screen flex flex-col items-center justify-center">
//           <motion.div className="absolute w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{  opacity: opacity1 }} >
//           <div className="relative">
//             <img src="macbook.svg" className="w-[1200px]" />
//             <div className="absolute top-12 left-24">
//               <ProjectCard data={data[0]} />
//             </div>
//           </div>
//           </motion.div>
//           <motion.div className="absolute w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{ opacity: opacity2 }} >
//           <div className="relative">
//             <img src="macbook.svg" className="w-[1200px]" />
//             <div className="absolute top-12 left-24">
//               <ProjectCard data={data[1]} />
//             </div>
//           </div>
//             </motion.div>
//           <motion.div className="absolute w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{  opacity: opacity3 }} >
//           <div className="relative">
//             <img src="macbook.svg" className="w-[1200px]" />
//             <div className="absolute top-12 left-24">
//               <ProjectCard data={data[2]} />
//             </div>
//           </div>
//           </motion.div>
//           <motion.div className="absolute w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{ opacity: opacity4 }} >
//           <div className="relative">
//             <img src="macbook.svg" className="w-[1200px]" />
//             <div className="absolute top-12 left-24">
//               <ProjectCard data={data[3]} />
//             </div>
//           </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
