import { useState, useMemo } from "react";
import { Options } from "../components/Options";
import { Heading } from "../components/Heading";

const FLEX_DIRECTIONS = ["row", "column"];
const JUSTIFICATIONS = [
  "start",
  "center",
  "end",
  "space-between",
  "space-around",
  "space-evenly",
];

export const FlexSection = () => {
  const [flexDirection, setFlexDirection] = useState(FLEX_DIRECTIONS[0]);
  const [justifyContent, setJustifyContent] = useState(
    JUSTIFICATIONS[0]
  );
  const [alignContent, setAlignContent] = useState(JUSTIFICATIONS[0]);

  const blocksContainerStyle = useMemo(
    () => ({
      display: "flex",
      backgroundColor: "#36d2df",
      width: "calc(50% - 20px)",
      height: "300px",
      flexDirection: flexDirection,
      justifyContent: justifyContent,
      alignContent: alignContent,
      //  align-content property is not possible when flex-wrap is no wrap
      flexWrap: "wrap",
      borderRadius: "10px",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      marginLeft: "20px"
    }),
    [flexDirection, justifyContent, alignContent]
  );

  return (
    <div className="flex-alignments-section-container">
      <Heading title="Flex Box" />

      <div className="flex-alignments-section">
        <div className="all-options-container">
          <Options
            title="flex-direction"
            options={FLEX_DIRECTIONS}
            setOption={setFlexDirection}
            currentOption={flexDirection}
          />
          <Options
            title="justify-content"
            options={JUSTIFICATIONS}
            setOption={setJustifyContent}
            currentOption={justifyContent}
          />
          <Options
            title="align-content"
            options={JUSTIFICATIONS}
            setOption={setAlignContent}
            currentOption={alignContent}
          />
        </div>

        <div style={blocksContainerStyle}>
          <div className="block" key="block1">
            {" "}
          </div>
          <div className="block" key="block2">
            {" "}
          </div>
          <div className="block" key="block3">
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};
