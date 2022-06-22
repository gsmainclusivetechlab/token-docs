---
title: Virtual Simulation
sidebar_label: Virtual Simulation
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Virtual Simulation allows the users to test various use cases without any extra device, using only the browser on their computer or the browser on a mobile phone. Although less realistic than the live environment, the virtual simulation allows faster testing, covering all the necessary characteristics for understanding the use of mobile tokens through SMS or USSD commands.

The Token Virtual Simulation can be Accessed by [selection page](https://token.gsmainclusivetechlab.io/trytoken)

This solution uses a web-based interface with all the necessary components to test the application. The interface is composed of 4 main components, described and shown below.

## 1. Customer Settings 

The user can use this component to select the mode of testing: SMS or USSD. This will change the type of codes used for the commands. See the session [commands](https://token.gsmainclusivetechlab.io/manual/commands) for more details.

:::note Customer Phone Number
The customer phone number is a non-real random number selected only for demonstration proposes.
:::

<div style={{textAlign: 'center'}}>
   <img alt="mobile" src={useBaseUrl('img/customersettings.png')}/>
</div>

## 2. Mechant/Agent Interface 

Component with options to simulate agent-initiate or merchant-initiated transactions. The user can select among cash-in, cash-out or merchant payment. For each selection the interface will adjust the required parameters to be filled for the transaction.

<div style={{textAlign: 'center'}}>
   <img alt="mobile" src={useBaseUrl('img/agentinterface.png')}/>
</div>

## 3. Mobile Simulation

This component simulates a real feature phone where the user can execut commands using SMS or a USSD commands interface. The reason we selected a feature phone was to demonstrate the tokenaisation can be applied to any type of mobile phone and therefore being an atractive solution to any market. 

:::note Token Number
Once created, the token number will be available for the user on the topo of the simulated mobile phone.
:::

<div style={{textAlign: 'center'}}>
   <img alt="mobile" src={useBaseUrl('img/mobilesimulation.png')}/>
</div>

## 4. Notifications

The notifications screen shows the interface for the Agent or Merchant. This is a general interface and depending on the company, solution and devide the agent (or merchant) is accessing, this interface can be diferent. Here we provided a way for the user to see, how simple the solution can be unde the user, agent and merchant perspective.

<div style={{textAlign: 'center'}}>
   <img alt="mobile" src={useBaseUrl('img/agentnotification.png')}/>
</div>

