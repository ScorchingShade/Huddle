import React from "react";
import styled from "styled-components";
import huddlebg from "../resources/HuddleDash.png";
import { DataGrid } from '@material-ui/data-grid';




const MainContainer = styled.div`
   margin-top: 2%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Dashboard() {

  return (
    <MainContainer>
      <InnerContainer>
        <h1>Welcome to your Huddle Dashboard</h1>
        <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[{ field: 'name' }]}
        rows={[
          { id: 1, name: 'PhotoChamps' },
          { id: 2, name: 'Micah Alumnus' },
          { id: 2, name: 'Power Rangers' },
        ]}
      />
    </div>

      </InnerContainer>
    </MainContainer>
  );
}

export default Dashboard;
