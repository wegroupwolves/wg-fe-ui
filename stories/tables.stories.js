import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import {
  DisplayTable,
  OverviewTable,
  OrderTable,
  StripedTable,
  CheckBox_v2,
  IconFurnitureFilled,
  IconTheftFilled,
  IconGardenFilled,
} from '../src';

storiesOf('Mid level blocks/Tables', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('DisplayTable', () => (
    <StyledDisplayTable>
      <DisplayTable.Row>
        <DisplayTable.Key>Merk</DisplayTable.Key>
        <DisplayTable.Value>BMW</DisplayTable.Value>
      </DisplayTable.Row>
      <DisplayTable.Row>
        <DisplayTable.Key>Brandstof</DisplayTable.Key>
        <DisplayTable.Value>Diesel</DisplayTable.Value>
      </DisplayTable.Row>
      <DisplayTable.Row>
        <DisplayTable.Key>Catalogus waarde</DisplayTable.Key>
        <DisplayTable.Value highlight={text('highlight', 'Excl btw')}>
          28 797,54 €
        </DisplayTable.Value>
      </DisplayTable.Row>
    </StyledDisplayTable>
  ))
  .add('OverviewTable', () => (
    <StyledOverviewTable>
      <OverviewTable.Head>
        <OverviewTable.HeaderCell title width="20%">
          Name
        </OverviewTable.HeaderCell>
        <OverviewTable.HeaderCell width="15%">Date</OverviewTable.HeaderCell>
        <OverviewTable.HeaderCell width="20%">Insurer</OverviewTable.HeaderCell>
        <OverviewTable.HeaderCell width="20%">Claim</OverviewTable.HeaderCell>
        <OverviewTable.HeaderCell>Status</OverviewTable.HeaderCell>
      </OverviewTable.Head>
      <OverviewTable.Body>
        <OverviewTable.Row>
          <OverviewTable.BodyCell>Laura Cox</OverviewTable.BodyCell>
          <OverviewTable.BodyCell>18 June </OverviewTable.BodyCell>
          <OverviewTable.BodyCell>AG Insurance</OverviewTable.BodyCell>
          <OverviewTable.BodyCell>Bagage claim</OverviewTable.BodyCell>
          <OverviewTable.BodyCell>Claim Opened</OverviewTable.BodyCell>
        </OverviewTable.Row>
        <OverviewTable.Row>
          <OverviewTable.BodyCell>Laura Cox</OverviewTable.BodyCell>
          <OverviewTable.BodyCell>18 June </OverviewTable.BodyCell>
          <OverviewTable.BodyCell>AG Insurance</OverviewTable.BodyCell>
          <OverviewTable.BodyCell>Bagage claim</OverviewTable.BodyCell>
          <OverviewTable.BodyCell>Claim Opened</OverviewTable.BodyCell>
        </OverviewTable.Row>
      </OverviewTable.Body>
    </StyledOverviewTable>
  ))
  .add('OrderTable', () => (
    <StyledOrderTable>
      <OrderTable.Head>
        <OrderTable.HeaderCell width="20%">Name</OrderTable.HeaderCell>
        <OrderTable.HeaderCell width="15%">Date</OrderTable.HeaderCell>
        <OrderTable.HeaderCell width="20%">Insurer</OrderTable.HeaderCell>
        <OrderTable.HeaderCell width="20%">Claim</OrderTable.HeaderCell>
        <OrderTable.HeaderCell width="25%">Status</OrderTable.HeaderCell>
      </OrderTable.Head>
      <OrderTable.Body>
        <OrderTable.Row>
          <OrderTable.BodyCell>Laura Cox</OrderTable.BodyCell>
          <OrderTable.BodyCell>18 June </OrderTable.BodyCell>
          <OrderTable.BodyCell>AG Insurance</OrderTable.BodyCell>
          <OrderTable.BodyCell>Bagage claim</OrderTable.BodyCell>
          <OrderTable.BodyCell>Claim Opened</OrderTable.BodyCell>
        </OrderTable.Row>
        <OrderTable.Row>
          <OrderTable.BodyCell>Laura Cox</OrderTable.BodyCell>
          <OrderTable.BodyCell>18 June </OrderTable.BodyCell>
          <OrderTable.BodyCell>AG Insurance</OrderTable.BodyCell>
          <OrderTable.BodyCell>Bagage claim</OrderTable.BodyCell>
          <OrderTable.BodyCell>Claim Opened</OrderTable.BodyCell>
        </OrderTable.Row>
      </OrderTable.Body>
    </StyledOrderTable>
  ))
  .add('StripedTable', () => (
    <StyledOverviewTable>
      <StripedTable.Head>
        <StripedTable.HeaderCell width="5%"></StripedTable.HeaderCell>
        <StripedTable.HeaderCell width="5%"></StripedTable.HeaderCell>
        <StripedTable.HeaderCell>Guarantee</StripedTable.HeaderCell>
        <StripedTable.HeaderCell>Net premium</StripedTable.HeaderCell>
        <StripedTable.HeaderCell>Taxes</StripedTable.HeaderCell>
        <StripedTable.HeaderCell>Total premium</StripedTable.HeaderCell>
        <StripedTable.HeaderCell>Commission</StripedTable.HeaderCell>
        <StripedTable.HeaderCell>VK</StripedTable.HeaderCell>
      </StripedTable.Head>

      <StripedTable.Body>
        <StripedTable.Row>
          <StripedTable.BodyCell>
            <CheckBox_v2 checked disabled />
          </StripedTable.BodyCell>

          <StripedTable.BodyCell>
            <IconFurnitureFilled size={25} color="#8990A3" />
          </StripedTable.BodyCell>

          <StripedTable.BodyCell>Content</StripedTable.BodyCell>

          <StripedTable.BodyCell>€ 92,36</StripedTable.BodyCell>

          <StripedTable.BodyCell>€ 14,55</StripedTable.BodyCell>

          <StripedTable.BodyCell>€ 106,91</StripedTable.BodyCell>

          <StripedTable.BodyCell>27%</StripedTable.BodyCell>

          <StripedTable.BodyCell>0%</StripedTable.BodyCell>
        </StripedTable.Row>

        <StripedTable.Row>
          <StripedTable.BodyCell>
            <CheckBox_v2 checked disabled />
          </StripedTable.BodyCell>

          <StripedTable.BodyCell>
            <IconTheftFilled size={25} color="#8990A3" />
          </StripedTable.BodyCell>

          <StripedTable.BodyCell>Theft</StripedTable.BodyCell>

          <StripedTable.BodyCell>€ 74,52</StripedTable.BodyCell>

          <StripedTable.BodyCell>€ 11,74</StripedTable.BodyCell>

          <StripedTable.BodyCell>€ 86,26</StripedTable.BodyCell>

          <StripedTable.BodyCell>20%</StripedTable.BodyCell>

          <StripedTable.BodyCell>0%</StripedTable.BodyCell>
        </StripedTable.Row>

        <StripedTable.Row>
          <StripedTable.BodyCell>
            <CheckBox_v2 checked disabled />
          </StripedTable.BodyCell>

          <StripedTable.BodyCell>
            <IconGardenFilled size={25} color="#8990A3" />
          </StripedTable.BodyCell>

          <StripedTable.BodyCell>Garden</StripedTable.BodyCell>

          <StripedTable.BodyCell>€ 30,00</StripedTable.BodyCell>

          <StripedTable.BodyCell>€ 4,73</StripedTable.BodyCell>

          <StripedTable.BodyCell>€ 34,73</StripedTable.BodyCell>

          <StripedTable.BodyCell>20%</StripedTable.BodyCell>

          <StripedTable.BodyCell>0%</StripedTable.BodyCell>
        </StripedTable.Row>
      </StripedTable.Body>

      <StripedTable.Footer>
        <StripedTable.FooterCell></StripedTable.FooterCell>
        <StripedTable.FooterCell></StripedTable.FooterCell>
        <StripedTable.FooterCell>Total</StripedTable.FooterCell>
        <StripedTable.FooterCell>€ 196,88</StripedTable.FooterCell>
        <StripedTable.FooterCell>€ 31,02</StripedTable.FooterCell>
        <StripedTable.FooterCell>€ 227,90</StripedTable.FooterCell>
        <StripedTable.FooterCell></StripedTable.FooterCell>
        <StripedTable.FooterCell></StripedTable.FooterCell>
      </StripedTable.Footer>
    </StyledOverviewTable>
  ));

const StyledDisplayTable = styled(DisplayTable)`
  width: 46rem;
`;

const StyledOverviewTable = styled(OverviewTable)`
  width: 80%;
`;

const StyledOrderTable = styled(OrderTable)`
  width: 80%;
`;

StyledDisplayTable.displayName = 'DisplayTable';
StyledOverviewTable.displayName = 'OverviewTable';
StyledOrderTable.displayName = 'OrderTable';
