import Email from "@iconscout/react-unicons/icons/uil-envelope";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const ContactInfo = [
  {
    icon: [
      <Email color="#F84437" size={"2rem"} />,
      <Whatsapp color="#4DCB5B" size={"2rem"} />,
      <Linkedin color="#0077B7" size={"2rem"} />,
    ],
    title: ["Gmail", "WhatsApp", "Linkedin"],
    subtitle: ["harshal.ingole21@", "+91 7507721344", "harshal-ingole"],
    link: [
      "mailto:harshal.ingole21@gmail.com",
      "https://api.whatsapp.com/send?phone=7507721344",
      "https://www.linkedin.com/in/harshal-ingole-759a38226/",
    ],
  },
];

export default ContactInfo;
