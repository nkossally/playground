import { FlexChild } from "../components/FlexChild";
import { Heading } from "../components/Heading";

export const FlexGrowAndShrinkSection = () => {
  return (
    <div className="">
      <Heading title="Flex Grow and Flex Shrink" />

      <div className="flex-parent">
        <FlexChild />
        <FlexChild />
        <FlexChild />
      </div>
    </div>
  );
};
