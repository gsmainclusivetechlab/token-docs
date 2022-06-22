---
title: Commands
sidebar_label: Commands
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Below, we present all the commands necessary to test the many user stories of our token solution. 

:::note PIN Number
During the simulation, a PIN will be requested to the user to confirm operations. The PIN provided below is the only accepted value.
**Default PIN: 1234**
:::

:::note Merchant Number
A Merchant code identifier is also required for the Merchant payment use cases, and the only accepted value is the one below.
**Merchant Code Available: 4321**
:::

## Using Virtual Mobile Simulation
-----
### Get Token
#### SMS Mode
1. Write `GET TOKEN` on the input field.
#### USSD Mode
1. Write short code `*165#`.
2. Write `1` on the input field.

### Delete Token
#### SMS Mode
1. Write `DELETE TOKEN` on the input field.
#### USSD Mode
1. Write short code `*165#`.
2. Write `2` on the input field.

### Customer Initiated Cash-In/Cash-Out
#### SMS Mode
1. Write `CASH IN {AMOUNT}` or `CASH OUT {AMOUNT}` on input field.
2. Next, write `PIN {VALUE}` on input field.
3. Finally, accept the operation with the Agent.
#### USSD Mode
1. Write short code `*165#`.
2. Write `3` or `4` on the input field.
3. Insert Amount.
4. Insert Pin.
5. Finally, accept the operation with the Agent.

### Customer Initiated Merchant Payment
#### SMS Mode
1. Write `PAYMENT {MERCHANT_CODE} {AMOUNT}` on input field.
2. Next, write `PIN {VALUE}` on input field.
3. Finally, accept the operation with the Merchant.
#### USSD Mode
1. Write short code `*165#`.
2. Write `5` on the input field.
3. Insert Merchant Code.
4. Insert Amount.
5. Insert Pin.
6. Finally, accept the operation with the Merchant.

### Agent Initiated Cash-in / Cash-out

1. Create an operation in Agent Operation Settings by choosing the Cash-In or Cash-Out option in the Operation field, then accept this operation with the Agent.
2. If you have the following option selected:
    - SMS Mode - Write `PIN {VALUE}` on input field.
    - USSD Mode - Write the short code `*165*6*1234#` on input field.

### Merchant Initiated Merchant Payment

1. Create an operation in Agent Operation Settings by choosing the Merchant-Payment option in the Operation field, then accept this operation with the Merchant.
2. If you have the following option selected:
    - SMS Mode - Write `PIN {VALUE}` on input field.
    - USSD Mode - Write the short code `*165*6*1234#` on input field.

## Using Live Token Showcase
----
### Get Token
#### SMS Mode
1. Send the following SMS to +447401232937 - `GET TOKEN`.
#### USSD Mode
1. Send the following SMS to +447401232937 - `*165*1#`.

### Delete Token
#### SMS Mode
1. Send the following SMS to +447401232937 - `DELETE TOKEN`.
#### USSD Mode
1. Send the following SMS to +447401232937 - `*165*2#`.

### Customer Initiated Cash-In/Cash-Out
#### SMS Mode
1. Send the following SMS to +447401232937 - `CASH IN {AMOUNT}` or `CASH OUT {AMOUNT}`.
2. Next, send the following SMS to +447401232937 - `PIN {VALUE}`.
3. Finally, accept the operation with the Agent.
#### USSD Mode
1. Send the following SMS to +447401232937 - `*165*3*{AMOUNT}*{PIN}#` or `*165*4*{AMOUNT}*{PIN}#`.
2. Then, accept the operation with the Agent.

### Customer Initiated Merchant Payment
#### SMS Mode
1. Send the following SMS to +447401232937 - `PAYMENT {MERCHANT_CODE} {AMOUNT}`.
2. Next, send the following SMS to +447401232937 - `PIN {VALUE}`.
3. Finally, accept the operation with the Merchant.
#### USSD Mode
1. Send the following SMS to +447401232937 - `*165*5*{MERCHANT_CODE}*{AMOUNT}*{PIN}#`.
2. Then, accept the operation with the Merchant.

### Agent Initiated Cash-in / Cash-out

1. Create an operation in Agent Operation Settings by choosing the Cash-In or Cash-Out option in the Operation field, then accept this operation with the Agent.
2. If you have the following option selected:
    - SMS Mode - Send the following SMS to +447401232937 - `PIN {VALUE}`.
    - USSD Mode - Send the following SMS to +447401232937 - `*165*6*1234#`.

### Merchant Initiated Cash-in / Cash-out

1. Create an operation in Agent Operation Settings by choosing the Merchant-Payment option in the Operation field, then accept this operation with the Merchant.
2. If you have the following option selected:
    - SMS Mode - Send the following SMS to +447401232937 - `PIN {VALUE}`.
    - USSD Mode - Send the following SMS to +447401232937 - `*165*6*1234#`.