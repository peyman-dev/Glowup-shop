import React from "react";

const page = async ({
  params,
}: {
  params: Promise<{
    courseID: string;
  }>;
}) => {
  const { courseID } = await params; 

  return <div>دوره:{courseID}</div>;
};

export default page;