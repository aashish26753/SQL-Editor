import React from "react";

const Footer = React.memo(({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "col-start-2" : "col-start-1"
      } col-end-3 row-start-4 row-end-4 bg-primary-dark text-white text-center py-5`}
    >
      Copyright 2022 &copy; Ashish Kumar
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 inline text-red-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <title id="heart">Copyright 2022 Ashish Kumar</title>
      </svg>{" "}
    </div>
  );
});

export default Footer;
