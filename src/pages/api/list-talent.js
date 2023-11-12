// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Tambah Deskripsi!!!

const listData = [
  {
    id: 1,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Silvia Valleria",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Silvia Valleria, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 2,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Indira Naylarissa",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Indira Naylarissa, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 3,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Imelia Mieru",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Imelia Mieru, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 4,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Dina Mustika",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Dina Mustika, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 5,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Yuura Andara",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Yuura Andara, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 6,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Elaine Clestia",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Elaine Celestia, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 7,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Cecil Liberia",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Cecil Liberia, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 8,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Vestia Zeta",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Vestia Zeta, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 9,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Patricia Valita",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Patricia Valita, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 10,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Lisa Akmila",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Lisa Akmila, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 11,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Alia Adelia",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Alia Adelia, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 12,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Emi Adata",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Emi Adata, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 13,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Enka Abina",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Enka Abina, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },
  {
    id: 14,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Larissa Mega",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"],
    desc: "I am Larissa Mega, a Web Developer with a passion for presenting creative and functional solutions in the digital world. With an educational background in Information Engineering and solid experience in the industry, I combine technical expertise with creativity to create extraordinary web experiences."
  },

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
