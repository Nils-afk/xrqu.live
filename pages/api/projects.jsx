export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/949943173097074688/962005042934730762/xrqulive.png",
      name: "Vito Bot",
      description:
        "Vito bot is a Turkish-language moderation bot.",
      link: "https://vitobot.ml",
      language: "js",
      languageIcon: "./assets/techs/js.svg",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/919174982448320574/919175202015936542/InShot_20211211_131906877.jpg",
      name: "Botcords",
      description:
        "Promote your best bot with Botcords! ",
      link: "https://botcords.me",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
  res.status(200).json(data);
};
