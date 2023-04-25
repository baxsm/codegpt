import { portfolioProjects } from "../../constants/landingpage";
import Divider from "../ui/Divider";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const PortfolioLP = () => {
  return (
    <section>
      <div className="flex justify-between place-items-center gap-12 xl:flex-row flex-col">
        <div className="flex flex-col gap-4 w-full">
          <Heading size="heading">Build your portfolio</Heading>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni eius dolores obcaecati voluptatum necessitatibus ab, provident distinctio? Cumque harum optio facere quasi ad, nostrum illum consequuntur reprehenderit iusto quam impedit?
          </Paragraph>
        </div>
        <div className="gradientBackground w-[70%] rounded-xl">
          <div className="flex justify-between gap-8 px-8 py-4">
            <Heading size="xs">My Projects</Heading>
            <Heading size="xs">Packages</Heading>
            <Heading size="xs">Certifications</Heading>
          </div>
          <div className="flex w-full">
            <hr className="bg-blue-500 border-0 h-[1px] w-[240px]" />
            <hr className="bg-gray-400 border-0 h-[1px] w-full" />
          </div>
          <div className="flex flex-col relative">
            {portfolioProjects.map((item, index) => {
              return (
                <div
                  className={`flex justify-between items-center p-6 ${
                    index === 1
                      ? "absolute top-16 gradientBackground w-full -left-8 blur-0 gradientBackgroundDark z-20 rounded-xl shadow-xl shadow-blue-500"
                      : "blur-[0.5px]"
                  }`}
                  key={index}
                >
                  <div className="flex flex-col gap-2">
                    <Paragraph size="xs">{item.title}</Paragraph>
                    <Paragraph size="xs" className="text-[0.8rem]">
                      updated {item.time}h ago
                    </Paragraph>
                  </div>
                  <div className="flex gap-4 text-3xl iconColor">
                    {item.icons.map((Icon, i) => {
                      return (
                        <div className="" key={i}>
                          <Icon />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioLP;
