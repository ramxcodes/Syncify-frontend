import { motion } from "framer-motion";
import { Github, Home, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const DeveloperCreditPage = () => {
  const navigate = useNavigate();

  return (
    <ScrollArea className="h-screen w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-900 min-h-screen flex flex-col items-center py-8 px-4"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <motion.img
              src="https://avatars.githubusercontent.com/u/128958601?v=4"
              alt="Developer Avatar"
              className="w-40 h-40 rounded-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            />

            <div className="text-center sm:text-left">
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-neutral-400 text-sm uppercase bg-emerald-900/50 p-1 px-4 rounded-full"
              >
                Developer
              </motion.span>
              <h1 className="text-3xl font-bold text-neutral-200 mt-2">
                Ramkrishna Swarnkar
              </h1>
              <p className="text-neutral-400 mt-2">Connect Me on</p>
              <div className="flex justify-center sm:justify-start space-x-4 mt-2">
                {[
                  {
                    href: "https://www.linkedin.com/in/ramcodes",
                    Icon: Linkedin,
                  },
                  { href: "https://github.com/ramxcodes", Icon: Github },
                  { href: "https://twitter.com/ramxcodes", Icon: Twitter },
                  { href: "https://instagram.com/__ramfr", Icon: Instagram },
                ].map(({ href, Icon }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-8 h-8 hover:bg-emerald-800/50 p-2 rounded-sm hover:text-zinc-400" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
          className="w-full max-w-5xl border-t border-neutral-700 my-8"
        ></motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl px-4 sm:px-8"
        >
          <h2 className="text-2xl font-bold text-emerald-500">About</h2>
          <p className="text-neutral-400 mt-4">
            Hi there! I'm Ram, a 3rd-year Medi-caps University BTech CS student
            who combines creativity and code to create powerful digital
            experiences. Possessing a talent for both front-end and back-end
            development, I'm extending my knowledge with Three.js and 3D web
            development while exploring MERN and Next.js.
          </p>
          <p className="text-neutral-400 mt-4">
            I'm now honing my development abilities as an intern at{" "}
            <a
              href="https://expelee.com"
              target="_blank"
              className="text-emerald-500"
            >
              @Expelee
            </a>{" "}
            and assisting others in their coding journey as a Tech Mentor at{" "}
            <a
              href="https://muacm.vercel.app"
              target="_blank"
              className="text-emerald-500"
            >
              @MU-ACM
            </a>
            . Not only I code, but I'm also a passionate graphic designer, video
            editor, and UI/UX designer, so I can offer a complete creative
            package to any project.
          </p>
          <p className="text-neutral-400 mt-4">
            When I’m not coding or designing, I’m often found sharing my
            insights as a public speaker, empowering others with tech knowledge
            and hands-on experience.
          </p>
          <div className="mt-4">
            <h3 className="text-neutral-200 font-bold">🎯 Key Skills:</h3>
            <ul className="text-neutral-400 list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="text-emerald-500">Full Stack Development</span>{" "}
                (MERN & Next.js)
              </li>
              <li>UI/UX Design</li>
              <li>Front-End Development</li>
              <li>Video Editing & Graphic Design</li>
              <li>Public Speaking & Mentorship</li>
            </ul>
          </div>
          <p className="text-neutral-400 mt-4">
            I’m always eager to learn and collaborate on innovative projects, so
            feel free to reach out if you’d like to connect or work together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 px-4 sm:px-0 pb-32"
        >
          <Button
            onClick={() => navigate("/")}
            className="bg-emerald-500 hover:bg-emerald-600 text-white w-full sm:w-auto animate-bounce"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </motion.div>
      </motion.div>
    </ScrollArea>
  );
};

export default DeveloperCreditPage;
