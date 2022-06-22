---
title: Live Simulation
sidebar_label: Live Simulation
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Live Simulation** allows the users to experience a realistic approach, testing various use cases using a real mobile device. This environment allows an interaction closer to the real life and lets the user to exchange direct messages with the system. The interface for Agent and Merchant are still simulated online.

The Token Live Simulation can be Accessed by [selection page](https://token.gsmainclusivetechlab.io/trytoken)

The interface for this solution is composed of 4 main components. One of them is the real mobile phone the user will utilise to exchange messages (SMS and USSD) with the system. The interface components are described and shown below.

## 1. Customer Settings 

The user can use this component to select the mode of testing: SMS or USSD. This will change the type of codes used for the commands. See the session [commands](https://token.gsmainclusivetechlab.io/manual/commands) for more details.

:::note Agent / Merchant Phone Number
The phone number presented on the customer settings is the number used by the system to receive the SMS and USSD comands. This is a real number adopted by the system for the live simulation. **+447401232937**
:::

<div style={{textAlign: 'center'}}>
   <img alt="mobile" src={useBaseUrl('img/customersettings-live.png')}/>
</div>

## 2. Mechant/Agent Interface 

Component with options to simulate agent-initiate or merchant-initiated transactions. The user can select among cash-in, cash-out or merchant payment. For each selection the interface will adjust the required parameters to be filled for the transaction.

<div style={{textAlign: 'center'}}>
   <img alt="mobile" src={useBaseUrl('img/agentinterface.png')}/>
</div>

## 3. Mobile Simulation

This component simulates a real feature phone where the user can execut commands using SMS or a USSD commands interface. The reason we selected a feature phone was to demonstrate the tokenaisation can be applied to any type of mobile phone and therefore being an atractive solution to any market. 

:::note Token Number
Once created, the token number will be sent to the user by SMS.
:::

<div style={{textAlign: 'center'}}>
   <img alt="mobile" src={useBaseUrl('img/livesimulation.png')}/>
</div>

## 4. Notifications

The notifications screen shows the interface for the Agent or Merchant. This is a general interface and depending on the company, solution and devide the agent (or merchant) is accessing, this interface can be diferent. Here we provided a way for the user to see, how simple the solution can be unde the user, agent and merchant perspective.

<div style={{textAlign: 'center'}}>
   <img alt="mobile" src={useBaseUrl('img/agentnotification.png')}/>
</div>


