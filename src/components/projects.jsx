

// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { useRef } from "react";

// // export default function ProjectsShowcase() {
// //   const containerRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end end"],
// //   });

// //   const colors = ["red", "blue", "green"];
  
// //   const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
// //   const opacity2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
// //   const opacity3 = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  
// //   const translateY1 = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
// //   const translateY2 = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
// //   const translateY3 = useTransform(scrollYProgress, [0.6, 1], [100, 0]);
  
// //   return (
// //     <div ref={containerRef} className="h-[400vh] bg-gray-900">
// //       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
// //         <motion.div className="w-full h-screen flex flex-col items-center justify-center">
// //           <motion.div className="w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{ backgroundColor: colors[0], opacity: opacity1, translateY: translateY1 }} />
// //           <motion.div className="w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{ backgroundColor: colors[1], opacity: opacity2, translateY: translateY2 }} />
// //           <motion.div className="w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{ backgroundColor: colors[2], opacity: opacity3, translateY: translateY3 }} />
// //         </motion.div>
        
// //       </div>
// //     </div>
// //   );
// // }
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function ProjectsShowcase() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const colors = ["red", "blue", "green", "purple"];
  
//   const opacity1 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
//   const opacity2 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
//   const opacity3 = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
//   const opacity4 = useTransform(scrollYProgress, [0.75, 1], [0, 1]);
  
//   const translateY1 = useTransform(scrollYProgress, [0, 0.25], [100, 0]);
//   const translateY2 = useTransform(scrollYProgress, [0.25, 0.5], [100, 0]);
//   const translateY3 = useTransform(scrollYProgress, [0.5, 0.75], [100, 0]);
//   const translateY4 = useTransform(scrollYProgress, [0.75, 1], [100, 0]);
  
//   return (
//     <div ref={containerRef} className="h-[400vh] bg-gray-900">
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//         <motion.div className="w-full h-screen flex flex-col items-center justify-center">
//           <motion.div className="w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{ backgroundColor: colors[0], opacity: opacity1, translateY: translateY1 }} />
//           <motion.div className="w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{ backgroundColor: colors[1], opacity: opacity2, translateY: translateY2 }} />
//           <motion.div className="w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{ backgroundColor: colors[2], opacity: opacity3, translateY: translateY3 }} />
//           <motion.div className="w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{ backgroundColor: colors[3], opacity: opacity4, translateY: translateY4 }} />
//         </motion.div>
//       </div>
//     </div>
//   );
// }


import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";


export default function ProjectsShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const data = [
    {
    'name' : 'Reelify',
    'description' : 'Reelify is a video-on-demand web app enabling seamless video streaming.',
    'features': 'People can create channels, Watch videos, Subscribe to other channels, Like and Comment on   videos, Watch their history',
    'tech_stack':'React.js, Node.js, Express.js, MongoDB, Cloudinary, Render, Vercel',
    'github':'https://github.com/agrawalshreyansh/reelify',
    'deployment':'https://reeelify.vercel.app/',
    'image':'ss1.png'
    },
    {
      'name' : 'Pujamart',
      'description' : 'Full-stack e-commerce website for selling Puja items.',
      'features': 'E-commerce app with seamless product listing, Checkout, Custom user registration via Email verification, Secure backend',
      'tech_stack':'Django, HTML, CSS, JavaScript, Pythonanywhere',
      'github':'',
      'deployment':'https://shrage.pythonanywhere.com/',
      'image':'ss.png'
      },
      {
        'name' : 'NxtUp',
        'description' : 'Built a product with a team of 8 to streamline event management at our university.',
        'features': 'End-to-end event management including Registrations, Result Declaration, Admin panel for adding and controlling events',
        'tech_stack':'React.js, Node.js, MongoDB, Tailwind CSS, Render, Vercel',
        'github':'https://github.com/agrawalshreyansh/client-nxtup',
        'deployment':'https://nxtup.in/',
        'image':'ss3.png'
        },
        {
          'name' : 'Capstone Evaluator',
          'description' : 'We built a portal for students to submit their capstone and a different portal for teachers to then evaluate the projects.',
          'features': 'Student Portal for submission, Admin Portal for Evaluation and Sending results, Direct Report Card sending via Email',
          'tech_stack':'React.js, Node.js, Express.js, MongoDB, Render, Vercel',
          'github':'https://github.com/capston-review-nst-ru/frontend',
          'deployment':'https://capstone-review-nst.vercel.app/',
          'image':'ss4.png'
          },
  ]

  
  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.5, 0.55], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.75, 0.8], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <div ref={containerRef} className="h-[400vh] bg-[#a3b18a]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="w-full h-screen flex flex-col items-center justify-center">
          <motion.div className="absolute w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{  opacity: opacity1 }} >
            
              <ProjectCard data={data[0]}/>
          </motion.div>
          <motion.div className="absolute w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{ opacity: opacity2 }} >
          <ProjectCard data={data[1]}/>
            </motion.div>
          <motion.div className="absolute w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{  opacity: opacity3 }} >
            <ProjectCard data={data[2]}/>
          </motion.div>
          <motion.div className="absolute w-full h-screen flex items-center justify-center rounded-xl shadow-lg" style={{ opacity: opacity4 }} >
          <ProjectCard data={data[3]}/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
