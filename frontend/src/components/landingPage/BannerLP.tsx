import { bannerIcons } from "../../assets/icons";
import { bannerCode, bannerWords } from "../../constants/landingpage";
import Code from "../Code";
import Button from "../ui/Button";
import Divider from "../ui/Divider";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import { useState, useEffect } from "react";

const AnimatedHeaderText = () => {
  const [bannerText, setBannerText] = useState("");

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    let j = 0;
    const timer = setInterval(() => {
      if (j === bannerWords[i].length) {
        clearInterval(timer);
        setTimeout(() => {
          i = 0;
          j = 0;
          setWordIndex((wordIndex + 1) % bannerWords.length);
          setBannerText("");
        }, 600);
      } else {
        setBannerText(bannerWords[wordIndex].substring(0, j + 1));
        j++;
      }
    }, 150);
    return () => clearInterval(timer);
  }, [wordIndex]);

  const size = "heading";

  return (
    <>
      <Heading size={size}>Start Learning</Heading>
      <Heading size={size}>
        &lt; <i className="gradientText">{bannerText}</i> /&gt;
      </Heading>
      <Heading size={size}>Right Now</Heading>
    </>
  );
};

const BannerLP = () => {
  return (
    <section>
      <div className="flex justify-between place-items-center gap-12 xl:flex-row flex-col">
        <div className="flex flex-col gap-6">
          <AnimatedHeaderText />
          <Paragraph>
            Join our coding community and learn new
            <br /> skills with over 50 frameworks across dozens
            <br /> of fields
          </Paragraph>
          <Button variant="default" className="w-2/5">
            Get Started
          </Button>
          <div className="min-w-[450px] gradientBackground mt-8 rounded-xl">
            <Paragraph className="p-8">
              // Since 2023, more than 25,000 challenges <br /> solved by the
              members of the community //
            </Paragraph>
            <Divider />
            <div className="flex justify-between place-items-center p-8">
              {bannerIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    className="text-4xl iconColor"
                    key={`icon_${item.name}_${index}`}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[500px] relative gradientBackground rounded-xl">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center p-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <Divider />
            <div className="px-4 py-6 min-h-[552px]">
              <Code language="typescript" code={bannerCode} show animated />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerLP;
