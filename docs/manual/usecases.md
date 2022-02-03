---
title: Use Cases
sidebar_label: Use Cases
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Using Virtual Mobile Simulation

To choose between SMS Mode or USSD Mode, the user need to choose the option on Customer Settings

<div style={{width: '50%'}}>
<img alt="customer_settings" src={useBaseUrl('img/customer_settings.png')}/>
</div>

### Get Token
#### SMS Mode
1. Write `GET_TOKEN` on the input field.
#### USSD Mode
1. Write short code `*165#`
2. Write `1` on the input field

### Delete Token
#### SMS Mode
1. Write `DELETE_TOKEN` on the input field.
#### USSD Mode
1. Write short code `*165#`
2. Write `2` on the input field

### Customer Initiated Cash-In/Cash-Out
#### SMS Mode
1. Write `CASH_IN -space- {AMOUNT}` or `CASH_OUT -space- {AMOUNT}` on input field.
2. Then the agent will receive an operation to accept or reject.
#### USSD Mode
1. Write short code `*165#`
2. Write `3` or `4` on the input field
3. Insert Amount
2. Then the agent will receive an operation to accept or reject.

### Customer Initiated Merchant Payment
#### SMS Mode
1. Write `PAYMENT -space- {MERCHANT_CODE} -space- {AMOUNT}` on input field.
2. Then the user will receive a message asking for a PIN.
#### USSD Mode
1. Write short code `*165#`
2. Write `5` on the input field
3. Insert Merchant Code
4. Insert Amount
2. Then the user will receive a message asking for a PIN.

### Agent Initiated Cash-in / Cash-out

1. Choose the Operation Cash-In or Cash-Out on Agent Operation Seetings

### Merchant Initiated Cash-in / Cash-out

1. Choose the Operation Merchant-Payment on Agent Operation Seetings

## Using Live Token Showcase

### Get Token
#### SMS Mode
1. Send the following SMS to +447401232937 - `GET_TOKEN`
#### USSD Mode
1. Send the following SMS to +447401232937 - `*165#*1`

### Delete Token
#### SMS Mode
1. Send the following SMS to +447401232937 - `DELETE_TOKEN`
#### USSD Mode
1. Send the following SMS to +447401232937 - `*165#*2`

### Customer Initiated Cash-In/Cash-Out
#### SMS Mode
1. Send the following SMS to +447401232937 - `CASH_IN -space- {AMOUNT}` or `CASH_OUT -space- {AMOUNT}`
2. Then the agent will receive an operation to accept or reject.
#### USSD Mode
1. Send the following SMS to +447401232937 - `*165#*3*{AMOUNT}` or `*165#*4*{AMOUNT}`
2. Then the agent will receive an operation to accept or reject.

### Customer Initiated Merchant Payment
#### SMS Mode
1. Send the following SMS to +447401232937 - `PAYMENT -space- {MERCHANT_CODE} -space- {AMOUNT}`
2. Then the user will receive a message asking for a PIN.
#### USSD Mode
1. Send the following SMS to +447401232937 - `*165#*5*{MERCHANT_CODE}*{AMOUNT}`
2. Then the user will receive a message asking for a PIN.

### Agent Initiated Cash-in / Cash-out

1. Choose the Operation Cash-In or Cash-Out on Agent Operation Seetings

### Merchant Initiated Cash-in / Cash-out

1. Choose the Operation Merchant-Payment on Agent Operation Seetings
