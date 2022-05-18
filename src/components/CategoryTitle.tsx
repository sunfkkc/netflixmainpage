import React from "react";
interface Props {
  categoryTitle: string;
}
function CategoryTitle({ categoryTitle }: Props) {
  return <h2 style={{ color: "black" }}>{categoryTitle}</h2>;
}

export default CategoryTitle;
