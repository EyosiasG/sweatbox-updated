import { motion } from "framer-motion";

const About = () => {
  const coreValues = [
    {
      icon: "🏆",
      title: "Excellence",
      description:
        "We commit to the highest level of quality in what we do. Our trainers are all certified, our equipment is of top quality and conforms with international standards.",
    },
    {
      icon: "💫",
      title: "Impact",
      description:
        "We deliver results and are driven by the results we help our clients achieve. If something is working for you, we will support you down that path to reach your goals.",
    },
    {
      icon: "🔍",
      title: "Transparency",
      description:
        "We stay true to ourselves and are honest about our methods, approaches and how we work. We don't provide shortcuts, quick fixes and we will be honest about the progress we are seeing.",
    },
    {
      icon: "💡",
      title: "Creativity & Innovation",
      description:
        "We want to keep evolving and growing as a team and in our work, so we commit to learning and changing our ways of working continuously and for the better.",
    },
  ];

  return (
    <div className=" px-4 py-16 text-white min-h-screen bg-secondary-900/20 backdrop-blur-xl">
      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-3xl -z-10" />
        <h2 className="text-5xl font-black text-center mb-8 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent bg-clip-text text-transparent">
          SWEATBOX <span className="text-white">MISSION</span>
        </h2>
        <p className="text-gray-300 text-center max-w-4xl mx-auto text-xl leading-relaxed font-light">
          At SWEATBOX our goal is to improve the quality of our client's lives
          and to set a new standard of professionalism and client accountability
          in the fitness industry. We want people to integrate sports and
          healthy habits into their everyday life for the rest of their lives.
        </p>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 relative container mx-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-orange-500/20 to-purple-500/20 blur-3xl -z-10" />
        <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          SWEATBOX <span className="text-white">CORE VALUES</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateZ: 0.5 }}
              key={index}
              className="bg-gradient-to-br from-secondary-800/50 to-secondary-900/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/5 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center filter drop-shadow-lg">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                {value.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed font-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Who We Are Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-purple-500/20 blur-3xl -z-10" />
        <h2 className="text-5xl font-black text-center mb-12">
          WHO{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            WE ARE
          </span>
        </h2>
        <div className="max-w-7xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mb-12 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10"
          >
            <img
              src="https://sweatboxapg.com/wp-content/uploads/2021/12/2-3.jpg.webp"
              alt="Sweatbox Gym Team"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <div className="space-y-8 bg-gradient-to-br from-secondary-800/80 to-secondary-900/80 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/5">
            <div className="flex items-center justify-center gap-4 mb-2">
              <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Who we ARE
              </h2>
              <span className="text-4xl text-orange-500">💪</span>
            </div>
            
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-secondary-800/50 border border-white/10 hover:border-orange-500/30 transition-all duration-300">
              <span className="text-4xl">🏋️‍♂️</span>
              <p className="text-gray-300 text-xl leading-relaxed font-light">
                SWEATBOX APG is Addis Ababa's one and only performance gym, located in Mekanisa, close to Abo Mazoria Church and Zoma Museum. We are passionately committed to improving the health and fitness levels of our clients, offering a safe, inviting and motivating environment. To us, people matter most and this is why we take pride in building a supportive, friendly and caring community of fitness enthusiasts that push one another and hold each other accountable to achieve their goals. Everyone is welcome at Sweatbox and we treat each other like family.
              </p>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-secondary-800/50 border border-white/10 hover:border-orange-500/30 transition-all duration-300">
              <span className="text-4xl">⚡</span>
              <p className="text-gray-300 text-xl leading-relaxed font-light">
                Our gym features top quality equipment from international companies including Eleiko, Rogue, and XXXX and features a range of free weights as well as weight and cardio machines for diversified workouts at various levels of intensity. Unlike most other gyms in Addis, we believe less is more when it comes to equipment and designed our facilities and space to be multi-functional. We are the only gym fit for crossfit type trainings and where you can actually drop your weights! 😉
              </p>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-secondary-800/50 border border-white/10 hover:border-orange-500/30 transition-all duration-300">
              <span className="text-4xl">🎯</span>
              <p className="text-gray-300 text-xl leading-relaxed font-light">
                At SWEATBOX APG we specialize in personal training and group classes for all levels of experience and our main goal is to help our clients visualize and achieve their personal fitness goals – whether those are to lose weight or achieve peak performance in a specific discipline. We also specifically specialize in strength and conditioning training which sets us apart from other gyms in Addis as it allows us to work with high elite athletes to excel in their performance. Our team of trainers are all internationally and nationally certified, friendly and eager to help you understand and practice different training methods in line with your goals and objectives. Whether you are a first-time trainee or seasoned athlete, we have you covered!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
