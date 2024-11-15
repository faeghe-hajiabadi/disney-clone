import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-[15px] text-white flex items-center gap-3 text-[18] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default HeaderItem;
