import React from 'react';
import styled from 'styled-components';
import IssueSelectFilter from './IssueSelectFilter';

const IssueListHeader = () => {
  return (
    <Wrapper>
      <TD>
        <Checkbox />
      </TD>
      <TD>
        <Filters>
          <IssueSelectFilter filterName='Author' />
          <IssueSelectFilter filterName='Label' />
          <IssueSelectFilter filterName='Milestones' />
          <IssueSelectFilter filterName='Assignee' />
        </Filters>
      </TD>
    </Wrapper>
  );
};

const Wrapper = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TD = styled.td`
  padding: 15px 20px;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})``;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
`;

export default IssueListHeader;
