import Image from "next/image";
import React from "react";

const Divider = () => {
  return (
    <div className="wrapper flex items-center justify-center my-24">
      <Image src="divider.svg" alt="divider" height={50} width={150} />
    </div>
  );
};

export default Divider;
