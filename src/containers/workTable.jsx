import React from "react";
import DynamoWin from "../components/DynamoTab/DynamicTab";
import TabContainer from "../components/TabContainer/TabsContainer";
import OperationsContainer from "../components/operationsContainer/operationsContainer";
import { useParams } from "react-router";

const WorkTable = () => {
  const { tableId } = useParams();
  return (
    <>
      <TabContainer />
      <OperationsContainer />
      <DynamoWin idTable={tableId} />
    </>
  );
};

export default WorkTable;
