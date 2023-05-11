import React from 'react';
import { useParams } from 'react-router';
import DynamoWin from '../components/DynamoTab/DynamicTab';
import TabContainer from '../components/TabContainer/TabsContainer';
import OperationsContainer from '../components/operationsContainer/operationsContainer';

const WorkTable = () => {
  const { workWin } = useParams();
  return (
    <>
      <TabContainer />
      <OperationsContainer />
      <DynamoWin idTable={workWin} isModal={false} />
    </>
  );
};

export default WorkTable;
