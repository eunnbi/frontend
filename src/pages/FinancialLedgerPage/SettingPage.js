import React from 'react';
import styled from 'styled-components';
import SetCategory from '../../components/FinancialLedger/SetCategory';
import SetExpenseRatio from '../../components/FinancialLedger/SetExpenseRatio';
import { SettingList } from '../../components/FinancialLedger/StyledComponentInSetting';
import SettingListTitle from '../../components/FinancialLedger/SettingListTitle';
import BudgetContainer from '../../containers/BudgetContainer';
import CategoryContainer from '../../containers/CategoryContainer';

const Section = styled.section`
  height: 1000px;
`;

function SettingPage() {
  return (
    <Section>
      <SettingList>
        <SettingListTitle title="예산 설정"></SettingListTitle>
        <hr width="50%"></hr>
        <BudgetContainer />
      </SettingList>
      <SettingList>
        <SettingListTitle title="카테고리 설정"></SettingListTitle>
        <hr width="50%"></hr>
        <CategoryContainer content="FIXED" />
        <CategoryContainer content="VARIABLE" />
        <CategoryContainer content="REVENUE" />
        <CategoryContainer content="PAYMENT" />
      </SettingList>
      <SettingList>
        <SettingListTitle title="지출 비율 설정"></SettingListTitle>
        <hr width="50%"></hr>
        <SetExpenseRatio content="고정비"></SetExpenseRatio>
        <SetExpenseRatio content="변동비"></SetExpenseRatio>
      </SettingList>
    </Section>
  );
}

export default SettingPage;
