import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import FramerWrapper from "../FramerWrapper";
import { learnCodeBlock, learnCodeSteps } from "../../constants/landingpage";
import { CheckIcon, CloseIcon, HtmlIcon, ReloadIcon } from "../../assets/icons";
import Divider from "../ui/Divider";
import Code from "../Code";

const LearnLP = () => {
  return (
    <div className="flex flex-col gap-8 py-[4rem]">
      <div className="flex justify-between items-center px-[8rem]">
        <Heading size="heading">
          Learn to code with <br /> fun and engaging methods
        </Heading>
        <div className="gradientBackground flex flex-col justify-center rounded-xl py-4">
          {learnCodeSteps.map((item, index) => {
            return (
              <div className="flex gap-4 items-center py-2 px-12" key={index}>
                <div className="text-blue-400">
                  <CheckIcon />
                </div>
                <Paragraph>{item}</Paragraph>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative mt-10">
        <div className="absolute h-[480px] top-8 z-[0] bg-blue-400 dark:bg-blue-950 dark:bg-opacity-50 bg-opacity-30 blur-[20px] w-full border-[1px] border-gray-200 border-l-0 border-r-0" />
        <div className="flex justify-center items-center gap-12 relative z-20">
          <div className="gradientBackgroundDark2 flex flex-col rounded-xl w-[500px] mt-12 relative">
            <div className="py-2 px-4">
              <div className="flex items-center gap-2">
                <HtmlIcon />
                <Paragraph className="text-[1rem]">learn.html</Paragraph>
                <CloseIcon />
              </div>
            </div>
            <div className="flex w-full">
              <hr className="bg-blue-500 border-0 h-[1px] w-[240px]" />
              <hr className="bg-gray-400 border-0 h-[1px] w-full" />
            </div>
            <div className="px-4 py-6 min-h-[465px]">
              <Paragraph color="dim" className="text-[1rem]">
                &lt;!-- An inline style may be used to apply a unique style for
                a <br />
                single element.
                <br />
                <br />
                To use inline styles. add the style attribute to the relevant
                <br />
                element. The style attribute can contain any CSS property.
                <br />
                --!&gt;
              </Paragraph>
              <br />
              <div className="text-[0.8rem]">
              <Code language="jsx" code={learnCodeBlock} show animated />
              </div>
            </div>
            <div className="absolute bottom-3 right-4 flex gap-4 items-center">
              <ReloadIcon className='text-2xl text-white cursor-pointer'/>
              <button className="bg-purple-500 text-white px-10 py-1 rounded-md">Run</button>
            </div>
          </div>
          <div className="bg-white flex flex-col rounded-xl relative w-[500px] h-[506px] mb-12">
            <div className="flex items-center">
              <div className="flex gap-2 items-center p-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-8 bg-gray-600 bg-opacity-20 text-black ml-14 pl-10 px-4 py-1 rounded-md">
                <Paragraph color="black" size="xs">
                  https://localhost:8000
                </Paragraph>
                <ReloadIcon />
              </div>
            </div>
            <Divider />
            <div className="flex flex-col gap-0 items-center justify-center h-full">
              <h1 className="text-red-500 text-3xl">This is a heading</h1>
              <p className="text-blue-500">This is a paragraph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnLP;
