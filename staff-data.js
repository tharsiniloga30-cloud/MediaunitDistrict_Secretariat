/*
  EDIT THIS FILE to add your real staff members.
  Duplicate one whole staff object below for every new staff member.
  Use only approved/public information and official staff photos.

  "theme" picks a colour pairing for that staff member's card and
  profile page. Choose one of: royalNavy, deepTeal, indigoPlum,
  forestBronze, slateCrimson  (see css/styles.css to add more).
*/

const staffData = [
  {
    id: "staff01",
    photo: "images/staff01.jpg",
    theme: "indigoPlum",

    name: {
      en: "Mr.Jesuthasan Niroshananth",
      ta: "திரு.யேசுதாசன் நிரோசானந்த்",
      si: "තිරු. යේසුදාසන් නිරෝසානන්ත්"
    },

    designation: {
      en: "Development Officer(I)",
      ta: "அபிவிருத்தி உத்தியோகத்தர்(I)",
      si: "සංවර්ධන නිලධාරී(I)"
    },

    section: "Media Unit",

    currentPosition: "Development Officer — Media Unit, District Secretariat, Jaffna (since 2022)",

    qualifications: [
      "B.Sc. in Information Technology, SLIIT",
      "Certificate in Web Development"
    ],

    workDetails: [
      "Maintains the Secretariat's website and internal systems",
      "Technical support for public events and live coverage",
      "Management of digital archives and backups",
      "Coordination with the ICT division on system updates"
    ],

    responsibilities: [
      "Website and online notice maintenance",
      "Technical support for Media Unit operations",
      "Digital archive and backup management",
      "Live broadcast and event technical support"
    ],

    expertise: [
      "Web Maintenance",
      "Systems Support",
      "Data Management",
      "Live Broadcast Support"
    ],

    languages: [
      { lang: "Tamil", level: "Native" },
      { lang: "Sinhala", level: "Working proficiency" },
      { lang: "English", level: "Fluent" }
    ],

    experience: [
      { period: "2022 – Present", role: "Development Officer", place: "District Secretariat, Jaffna" },
      { period: "2020 – 2022", role: "IT Support Officer", place: "Private sector, Colombo" }
    ],

    contact: {
      office: "021-2222222",
      email: "it.media@example.gov.lk",
      extension: "238"
    }
  },

  {
    id: "staff02",
    photo: "images/staff02.jpg",
    theme: "deepTeal",

    name: {
      en: "Mr.Sriskantharasa Thuvarakan",
      ta: "திரு.சிறீஸ்கந்தராசா துவாரகன்",
      si: "තිරු. ශ්‍රීස්කන්දරාසා දුවාරකන්"
    },

    designation: {
      en: "Development Officer(III)",
      ta: "அபிவிருத்தி உத்தியோகத்தர்(III)",
      si: "සංවර්ධන නිලධාරී(III)"
    },

    section: "Media Unit",

    currentPosition: "Development Officer — Media Unit, District Secretariat, Jaffna (since 2021)",

    qualifications: [
      "B.A. in Journalism, University of Colombo",
      "Diploma in Digital Media Production"
    ],

    workDetails: [
      "Manages the Secretariat's digital and social media presence",
      "Photography and video documentation at official events",
      "Drafting bulletins and public notices in three languages",
      "Archiving of visual media records"
    ],

    responsibilities: [
      "Content creation for official social media channels",
      "Photography and videography at official functions",
      "Coordination of press coverage for district programmes",
      "Support for the Media Unit's public information archive"
    ],

    expertise: [
      "Digital Media",
      "Photography",
      "Content Writing",
      "Social Media Management"
    ],

    languages: [
      { lang: "Tamil", level: "Native" },
      { lang: "Sinhala", level: "Fluent" },
      { lang: "English", level: "Fluent" }
    ],

    experience: [
      { period: "2021 – Present", role: "Development Officer", place: "District Secretariat, Jaffna" },
      { period: "2018 – 2021", role: "Media Trainee", place: "Provincial Information Department, Northern Province" }
    ],

    contact: {
      office: "021-2222222",
      email: "media.assist@example.gov.lk",
      extension: "236"
    }
  },

  {
    id: "staff03",
    photo: "images/staff03.png",
    theme: "royalNavy",

    name: {
      en: "Mrs.Achuthan Sasikala",
      ta: "திருமதி.அச்சுதன் சசிகலா",
      si: "තිරුමති. අර්චුතන් සසිකලා"
    },

    designation: {
      en: "Development Officer(III)",
      ta: "அபிவிருத்தி உத்தியோகத்தர்(III)",
      si: "සංවර්ධන නිලධාරී(III)"
    },

    section: "Media Unit",

    currentPosition: "Development Officer — Media Unit, District Secretariat, Jaffna (since 2019)",

    qualifications: [
      "Bachelor of Arts",
      "Diploma in Public Administration",
      "Certificate in Computer Applications"
    ],

    workDetails: [
      "Maintenance of official records and documents",
      "Public information coordination",
      "Coordination with government institutions",
      "Data collection and reporting",
      "Support for government programmes",
      "Community and field coordination"
    ],

    responsibilities: [
      "Support official information and communication",
      "Coordinate approved media activities",
      "Assist with event documentation",
      "Support digital content and public information"
    ],

    expertise: [
      "Public Administration",
      "Records Management",
      "Community Liaison",
      "Government Reporting"
    ],

    languages: [
      { lang: "Tamil", level: "Native" },
      { lang: "Sinhala", level: "Working proficiency" },
      { lang: "English", level: "Fluent" }
    ],

    experience: [
      { period: "2019 – Present", role: "Development Officer", place: "Media Unit, District Secretariat, Jaffna" },
      { period: "2015 – 2019", role: "Divisional Secretariat Assistant", place: "Divisional Secretariat, Nallur" }
    ],

    contact: {
      office: "021-2222222",
      email: "official@example.gov.lk",
      extension: "234"
    }
  }

  /*
  ADD MORE STAFF HERE — copy a whole block above, paste it before
  this comment, and update every field, including a unique "id".
  */
];