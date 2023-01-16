import { useState } from "react";
import { WorkHistory } from "../History/History";
import { Description, DescriptionItem, PlaceTab, PlaceWrapper } from "./styled";

interface WorkInterface {
  place: WorkHistory;
}

const WorkTab = ({ place }: WorkInterface) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <PlaceWrapper
      onClick={() => {
        setIsExpanded((isExpanded) => !isExpanded);
      }}
    >
      <PlaceTab>
        <>{place.company}</>

        <div className="arrowIcon">M</div>
      </PlaceTab>
      {isExpanded && (
        <Description>
          <DescriptionItem>
            <h4>position: </h4> {place.position}
          </DescriptionItem>
          <DescriptionItem>
            <h4>from: </h4> {place.dates.start}
          </DescriptionItem>
          <DescriptionItem>
            <h4>to: </h4> {place.dates.end}
          </DescriptionItem>
        </Description>
      )}
    </PlaceWrapper>
  );
};

export default WorkTab;
