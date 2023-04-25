import { slideIn } from "../../helpers/utils";
import FramerWrapper from "../FramerWrapper";
import EarthCanvas from "../canvas/Earth";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import { motion } from "framer-motion";

const ConnectLP = () => {
  return (
    <div className="flex justify-between place-items-center gap-12 xl:flex-row flex-col">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <div className="flex flex-col gap-4 w-full">
        <Heading size="heading">Connect</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque,
          iure ut nihil harum animi minima minus dolorum pariatur sint soluta
          praesentium consequatur. Alias vitae, accusamus perspiciatis earum eos
          similique?
        </Paragraph>
      </div>
    </div>
  );
};

export default FramerWrapper(ConnectLP, "connectlp");
