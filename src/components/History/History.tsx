import React from "react";
import WorkTab from "../WorkTab";
import { DescriptionText, HistoryWrapper } from "./styled";

export interface WorkHistory {
  company: string;
  position: string;
  dates: {
    start: string;
    end: string;
  };
}

const History = () => {
  const workHistory: WorkHistory[] = [
    {
      company: "docmatic",
      position: "Front-end developer",
      dates: {
        start: "6 December 2021",
        end: "30 September 2022",
      },
    },
    {
      company: "hotel Daisy",
      position: "Recepcionist",
      dates: {
        start: "July 2015",
        end: "August 2021",
      },
    },
  ];

  return (
    <HistoryWrapper>
      <span>
        <h2 className="headline">WORK HISTORY</h2>

        <DescriptionText>
          Everyone has a story. Mine is still short, but I'm working on it.
        </DescriptionText>
      </span>

      {workHistory.map((workPlace) => {
        return <WorkTab place={workPlace} key={workPlace.company} />;
      })}
    </HistoryWrapper>
  );
};

export default History;
