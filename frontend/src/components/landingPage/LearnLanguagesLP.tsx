import { languagesIcons } from "../../assets/icons";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const LearnLanguagesLP = () => {
  return (
    <section>
      <div className="flex justify-between place-items-center gap-12 xl:flex-row flex-col">
        <div className="gradientBackground p-8 rounded-md flex flex-col gap-8 w-1/2">
          <div className="grid grid-cols-2 gap-8 items-center">
            {languagesIcons.map((Language, index) => {
              return (
                <div
                  className="text-4xl iconColor flex justify-center items-center"
                  key={index}
                >
                  <Language />
                </div>
              );
            })}
          </div>
          <Paragraph className="text-center">and many more ...</Paragraph>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Heading size="heading">Learn</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            ullam voluptatem, cum accusantium sit nostrum omnis culpa sequi
            fugit alias quasi deleniti nesciunt, iure necessitatibus labore.
            Optio, iusto? Aliquam, vitae.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default LearnLanguagesLP;
