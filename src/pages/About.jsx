import Accordion from "../components/Accordion";
import { TitleDefault } from "../styles/styles";

const About = () => {
  const accordion = [
    {
      title: "What is Kittenland?",
      text: `KittenLand is React SPA that simulates a simple kitten e-shop with
        private routes, shopping cart and basic authentication logic.`,
    },
    {
      title: "How it works?",
      text: `You can use the app as a normal user who is browsing e-shop with kittens
        and wants to buy some. If you have credentials to log in admin account
        you have options to create new kittens, edit, delete them but also buy
        them.`,
    },
    {
      title: "Every kitten is unique",
      text: `You will never find the same kittens, unless the have the same name 😀.
        The appearance of the kitten depends on its name. One day I came across
        this <a href="https://robohash.org/" target="_blank">Robohash website</a> and this
        project was just perfect opprotunity to try it.`,
    },
  ];

  return (
    <div>
      <TitleDefault>About</TitleDefault>
      <div>
        {accordion.map((item) => (
          <Accordion key={item.title} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default About;
