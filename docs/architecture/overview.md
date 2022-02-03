---
id: overview
title: Tokenisation Architecture
sidebar_label: Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The architecture is divided into eight parts, the most important parts are 
Engine, Token Solution and Token Solution DataBase, the rest cant be disposable. 
This three will allow whoever implements this solution to be able to convert 
a phone number into the token.

The eight parts are:

1. **Vue page:** The web page used for the user to be able to test the use cases,
here it will be possible to sign up the user and test the agent, merchant and customer flows.

2. **Proxy:** - It's an Api that serve as a point of contact between the web page and the rest of the Api's.
Here are stored the agent's/merchant's operations and notifications as well as the messages that the virtual 
mobile will receive.

3. **SMS Gateway:** It's an Api that will simulate a Mobile Operator Api. 
In this case, this Api is the point of contact for twilio and will send the message to the Engine Api received from Proxy Api.

4. **USSD Gateway:** It's an Api that will simulate a Mobile Operator Api. 
In this case, this Api have a USSD menu and will send the message to the Engine Api received from Proxy Api.

5. **Engine:** This Api is the center of the solution, here we receive all the requests from the Vue Page or Twilio.

6. **MMO:** It's an Api that will simulate a Mobile Money Operator.
In here we have all the pending transactions created by the users stored in memory, and we have the logic to manage the users (create/delete account's)

7. **Token Algorithm Solution:** It's an Api where we have all the logic which allows associating a token to a phone number.

8. **Token DB Solution:** Where the user information and token are stored.

### Architectural Parts

**Figure:** All components of the architecture.

<div style={{textAlign: 'center'}}>
<img alt="TryToken architecture" src={useBaseUrl('img/TryTokenArchitecture.png')}/>
</div>

### Technological Considerations

- The architecture used docker containers and docker-compose to run all the containers  
- The main language used for the project is TypeScript
- The API's follow the API Specification 3.0
