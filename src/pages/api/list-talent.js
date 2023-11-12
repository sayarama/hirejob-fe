// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Tambah Deskripsi!!!

const listData = [
  {
    id: 1,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Silvia Valleria",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 2,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Indira Naylarissa",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 3,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Imelia Mieru",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 4,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Dina Mustika",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 5,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Yuura Andara",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 6,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Elaine Clestia",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 7,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Cecil Liberia",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 8,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Vestia Zeta",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 9,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Patricia Valita",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 10,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Lisa Akmila",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 11,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Alia Adelia",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 12,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Emi Adata",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 13,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Enka Abina",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
  },
  {
    id: 14,
    photo: `https://i.pravatar.cc/150?u=${new Date().getTime()}`,
    fullname: "Larissa Mega",
    job: "Web Developer",
    location: "Jakarta",
    skills: ["PHP", "Javascript", "Html","Go", "Kotlin", "Java","Flutter", "C++", "Ruby"]
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
