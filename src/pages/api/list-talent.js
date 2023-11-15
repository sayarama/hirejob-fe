// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Tambah Deskripsi!!!

const listData = [
  {
    id: 1,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Silvia Valleria",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html", "Tailwind"],
    socmed: {
      email: "silvia@gmail.com",
      instagram: "@silvia12",
      github: "@silviaaa",
      gitlab: "@silviaaa",
    },
    desc: "I am Silvia Valleria, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 2,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Indira Naylarissa",
    job: "Mobile Developer",
    location: "Jakarta",
    skills: ["Java", "Flutter", "Kotlin"],
    socmed: {
      email: "indira@gmail.com",
      instagram: "@indira31",
      github: "@indiraaa",
      gitlab: "@indiraaa",
    },
    desc: "I'm Indira Naylarissa, a passionate Mobile Developer with a knack for turning ideas into innovative and user-friendly mobile applications.  As a tech enthusiast, I thrive on challenges and constantly seek to push the boundaries of what's possible in the ever-evolving world of mobile development. My journey began with a fascination for the seamless blend of creativity and functionality that mobile apps offer."
  },
  {
    id: 3,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Amelia Mieru",
    job: "Freelancer",
    location: "Bandung",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin"],
    socmed: {
      email: "amelia@gmail.com",
      instagram: "@amemieru22",
      github: "@amemieru",
      gitlab: "@amemieru",
    },
    desc: "Hello, I'm Amelia Mieru, a versatile and dedicated Freelancer ready to bring your projects to life!. With a passion for creative problem-solving and an extensive skill set, I specialize in providing top-notch freelance services tailored to your unique needs. From graphic design and content creation to digital marketing and beyond, I'm committed to delivering results that exceed expectations."
  },
  {
    id: 4,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Dina Mustika",
    job: "Freelancer",
    location: "Bandung",
    skills: ["Kotlin", "Java","Flutter"],
    socmed: {
      email: "dina@gmail.com",
      instagram: "@dinaa21",
      github: "@dinaaa",
      gitlab: "@dinaaa",
    },
    desc: "Greetings! I'm Dina Mustika, a passionate and results-driven Freelancer ready to bring your visions to life.With a blend of creativity and technical prowess, I specialize in providing freelance services that span the digital landscape. From web development and design to content creation and project management, I thrive on the diversity of challenges that each project brings."
  },
  {
    id: 5,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Fatih Indra",
    job: "Ios Developer",
    location: "Jakarta",
    skills: ["Swift", "C", "SwiftUI"],
    socmed: {
      email: "fatih@gmail.com",
      instagram: "@indra13 ",
      github: "@indra21",
      gitlab: "@indra21",
    },
    desc: "Hello! I'm Fatih Indra, an enthusiastic iOS Developer passionate about crafting seamless and delightful experiences for users through innovative mobile applications.With a deep appreciation for elegant code and a commitment to staying at the forefront of iOS development, I specialize in turning ideas into high-quality, user-friendly iOS apps. From concept to execution, I bring a meticulous approach to every project, ensuring not only functionality but a polished user interface."
  },
  {
    id: 6,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Rendi Rio",
    job: "Dev Ops",
    location: "Bogor",
    skills: ["Bash", "Python", "Ruby", "Go", "Java", "Perl"],
    socmed: {
      email: "rendi@gmail.com",
      instagram: "@rendi15",
      github: "@rendirio",
      gitlab: "@rendirio",
    },
    desc: "Greetings! I'm Rendi Rio, a dedicated DevOps enthusiast on a mission to bridge the gap between development and operations for seamless, efficient, and scalable software delivery.With a background in both development and operations, I thrive in the dynamic intersection where code meets infrastructure. My journey began with a fascination for streamlining processes, automating workflows, and optimizing deployment pipelines to enhance the overall development lifecycle."
  }

]

export default function handler(req, res) {
  if(req.query.id) {
    res
      .status(200)
      .json({ status: true, message: "Get data success", data: listData?.find((item) => item?.id === parseInt(req.query.id))})
  } else {

    res
      .status(200)
      .json({ status: true, message: "Get data success", data: listData})
  }
}
