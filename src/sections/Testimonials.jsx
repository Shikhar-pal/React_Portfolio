import {motion} from "framer-motion"
import m1 from "../assets/m1.PNG"
import m2 from "../assets/m2.PNG"
import w1 from "../assets/w1.PNG"
import w2 from "../assets/w2.PNG"

const testimonials = [
  {
    name: "Aman Verma",
    role: "Classmate & DSA Practice Partner",
    review:
      "Shikhar is very dedicated and consistent when it comes to coding. He explains logic clearly and always focuses on writing clean and efficient solutions.",
    image: m1,
  },
  {
    name: "Priya Singh",
    role: "Hackathon Teammate",
    review:
      "Working with Shikhar during our hackathon was a great experience. He stayed calm under pressure, contributed strong ideas, and handled implementation with confidence.",
    image: w1,
  },
  {
    name: "Rahul Yadav",
    role: "College Project Collaborator",
    review:
      "Shikhar has a strong problem-solving mindset and learns new technologies quickly. His contribution to project development and debugging was really valuable.",
    image: m2,
  },
  {
    name: "Sneha Sharma",
    role: "Senior & Web Development Mentor",
    review:
      "Shikhar is a focused learner with solid fundamentals in web development and programming. He is sincere, curious, and always ready to improve his skills.",
    image: w2,
  },
];

export default function Testimonials(){
  return(
    <section id="testimonials" className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20">
      <motion.h2 className="text-4xl font-bold mb-16"
      
      initial={{opacity : 0 ,y : -50}}
      animate={{opacity : 1 , y:0}}
      tranisition={{duration : 0.6}}
      >
        What People Say
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((t,i) =>(
          <motion.div
            key={t.name +1}
            initial={{opacity : 0 , y:50}}
            whileInView={{opacity:1 , y:0}}
            transition={{duration: 0.5 , dealy : i*0.2}}
            viewport={{once:true}}
            className="bg-white/10 backdrop:blur-lg border border-white/20 rounded-2xl p-6 flex flex-col
            items-center text-center transform transition duration-500 hover:scale-105 hover:rotate-1">
              <img src={t.image} alt={t.name}  className="w-20 h-20 rounded-full
              border-2 border-white/40 mb-4 object-cover"
              loading="lazy"/>
              <p className="text-gray-200 italic mb-4">
                {t.review}
              </p>
              <h3 className="text-lg font-semibold">
                {t.name}
              </h3>
              <p  className="text-sm text-gray-400">
                {t.role}
              </p>
          </motion.div>
        ))}

      </div>
    </section>
  )
}