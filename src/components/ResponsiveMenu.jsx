import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../constants";
import PropTypes from "prop-types";
export const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          className=" absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className=" bg-primary rounded-xl py-7 m-5 text-white md:hidden ">
            <ul className=" flex flex-col gap-5 items-center text-2xl font-semibold">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link}> {item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
ResponsiveMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};
