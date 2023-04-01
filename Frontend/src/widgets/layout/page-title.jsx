import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ heading, children }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h2" color="blue-gray" className="mb-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500">
        {children}
      </Typography>
    </div>
  );
}
{/* <ul className={click ? 'overflow-x-hidden md:grid md:grid-cols-4  md:gap-2.5 md:list-none md:text-center md:w-auto md:justify-end md:mr-8 flex flex-col w-full h-screen md:flex-row md:bg-transparent py-12 md:py-0 md:h-auto md:left-auto md:right-0  bg-blue-gray-500 justify-center gap-24 absolute top-0 opacity-100 transition-all duration-500 ease-linear bg-slate-800 left-0 ' : 'overflow-x-hidden flex flex-col md:mr-8 w-full md:w-auto h-screen md:flex-row md:bg-transparent py-12 md:py-0 md:h-auto md:left-auto md:right-0  bg-blue-gray-500 justify-center gap-24 absolute top-0 left-[61rem] opacity-100 transition-all duration-500 ease-linear'}> */}
PageTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
