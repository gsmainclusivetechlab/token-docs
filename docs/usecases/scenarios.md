---
title: Scenarios and Flows
sidebar_label: Scenarios and Flows
---

The Tokenisation Project has currently 3 different mobile money Use Cases (UCs): **Cash-in, Cash-out**, and **Payments**.  Each use case embraces several scenarios to approach the different possible paths. These UC were selected after collecting information with Mobile Money Operators and based on the importance of the use of token on these cases. Besides these main use cases, the scenarios to create a token and delete were also create based on the use cases: **Get Token and Delete Token**.

To execute the use cases, the user can be play two different roles in the interface:

**Mobile Money Customer:** The user can play the customer role using the virtual phone interface, in the web simulation version, and using real phone device for the live simulation version. 

**Mobile Money Agent:** The user can also play the role of an agent, using the web interface to approve or reject transactions, or to start transactions in agent-initiated or merchant-initiated scenarios.

Following you can see some examples of the use case scenarios and diagram flows. It is important to mention that there are several other possibilities to test this show case. in the section list of use case scenarios you can check it out the many paths the customer can take.

📬 - If anyone wish to propose a new Use Case or a new User Scenario. Please send as an email trough the token page website.

🎯 - Remember that all use cases and scenarios described here can be easily customise to adapt to any mobile operator needs.


## **Get Token**

---

The user can request a new token by anytime. For showcase purposes,  If the user already has a token, the same will be deleted and a new token will be generated to replace the previous one. 

### **Scenario**

The customer wants to tokenise a phone number, so they will request to the token service to get a token to their number. The token service will send back the customer's token number.

### Diagram

```mermaid
sequenceDiagram
    Customer->>+System: Request a new token
    System->>+Customer: Return the static token to the user
```

## Delete Token

---

The user can delete an existent token by anytime. When a token is deleted the user can only proceed with transactions using the mobile number, until a new token is requested. 

### **Scenarios**

- This scenario occurs when a customer wants to delete the current token. This can happen for many reasons: the customer just wants a new one, the token was disclosed to someone and the user does not feel safe, and many other reasons. So, the customer request the deletion/invalidation of the token through the command delete token.

### Diagram

```mermaid
sequenceDiagram
    Customer->>+System: Request to delete token
    System->>+Customer: Your token has been deleted successfuly
```

## Cash-In

---

This use case approaches scenarios where a mobile money customer wants to deposit money into their mobile money account. 

### **Scenarios**

**Customer Initiated Cash-in**

A customer wants to initiate a cash-in transaction on his device. So, they input the amount, authorise the transaction with the PIN and let the agent know that a cash-in transaction was initiated. The Agent asks for the customer **mobile number** or **token**. With this information the agent approves the transaction. 

**Agent Initiated Cash-in**

A customer wants to make a cash-in transaction and request the agent to proceed with the cash-in. The agent asks for the customer's **mobile number** or **token.** With this information the agent starts the transaction, requiring the approval of customer in their mobile device. 

### Diagrams

**Customer Initiated Cash-in**

```mermaid
sequenceDiagram
    Customer->>+System: Request a cash-in transaction using mobile number or token
    System->>Customer: Please verify your identity
    Customer->>System: Sends PIN number
    alt Wrong PIN
        System--xCustomer: Wrong PIN number 
    else Correct PIN
        System->>+Agent: Receives request for cash-in from customer
    end
    alt Agent Approves Transaction
        Agent->>System: The transaction is approved
    else Agent Rejects Transaction
        Agent->>System: The transaction is rejected
    end
    System->>Customer: Sends notification with tthe results of the transaction
```

**Agent Initiated Cash-in**

```mermaid
sequenceDiagram
    Agent->>+System: Request a cash-in transaction from a mobile number or token
    System->>Customer: Agent requests your approval for a cash-in transaction: <br> Please verify your identity
    Customer->>System: Sends PIN number
    alt Wrong PIN
        System-XCustomer: Wrong PIN number 
    else PIN is Correct
        System->>+Agent: Receives approval to proceed with transaction
    end
    Agent->>System: Approves the transaction
    System->>Customer: Sends notification with tthe results of the transaction
```

## Cash-Out

---

This use case approaches scenarios where a mobile money customer wants to obtain money from their mobile money account. 

### **Scenarios**

**Customer Initiated Cash-out**

A customer wants to initiate a cash-out transaction on his device. So, they input the amount, authorise the transaction with the PIN and let the agent know that a cash-in transaction was initiated. The Agent asks for the customer **mobile number** or **token**. With this information the agent approves the transaction. 

**Agent Initiated Cash-out**

A customer wants to make a cash-out transaction and request the agent to proceed with the cash-out. The agent asks for the customer's **mobile number** or **token.** With this information the agent starts the transaction, requiring the approval of customer in their mobile device. 

### Diagrams

**Customer Initiated Cash-out**

```mermaid
sequenceDiagram
    Customer->>+System: Request a cash-out transaction using mobile number or token
    System->>Customer: Please verify your identity
    Customer->>System: Sends PIN number
    alt Wrong PIN
        System--xCustomer: Wrong PIN number 
    else Correct PIN
        System->>+Agent: Receives request for cash-out from customer
    end
    alt Agent Approves Transaction
        Agent->>System: The transaction is approved
    else Agent Rejects Transaction
        Agent->>System: The transaction is rejected 
    end
    System->>Customer: Sends notification with tthe results of the transaction
```

**Agent Initiated Cash-Out**

```mermaid
sequenceDiagram
    Agent->>+System: Request a cash-out transaction from a mobile number or token
    System->>Customer: Agent requests your approval for a cash-out transaction: <br> Please verify your identity
    Customer->>System: Sends PIN number
    alt Wrong PIN
        System-XCustomer: Wrong PIN number 
    else PIN is Correct
        System->>+Agent: Receives approval to proceed with transaction
    end
    Agent->>System: Approves the transaction
    System->>Customer: Sends notification with tthe results of the transaction
```

## Payments

---

The payment use case approaches any scenarios where a customer wants to make a payment using their mobile money account. The payment can be seen as a merchant payment, a P2P transaction, bills payments, and so forth. 

### **Scenarios**

**Customer Initiated Payment**

A customer wants to initiate a payment transaction on his device. So, they input the amount, authorise the transaction with the PIN and let the merchant to know about the payment. The Agent asks for the customer **mobile number** or **token**. With this information the agent approves the transaction. 

**Agent Initiated Payment**

A customer wants to make a payment transaction and request the agent to proceed with the payment. The agent asks for the customer's **mobile number** or **token.** With this information the agent starts the transaction, requiring the approval of customer in their mobile device, including a PIN number for authorisation. 

### Diagrams

**Customer Initiated Payment**

```mermaid
%%{init: {'theme': 'default' } }%%

sequenceDiagram
    Customer->>+System: Request a payment transaction using mobile number or token
    System->>Customer: Please verify your identity
    Customer->>System: Sends PIN number
    alt Wrong PIN
        System--xCustomer: Wrong PIN number 
    else Correct PIN
        System->>+Merchant: Receives request for payment transaction from customer
        Note left of Merchant: The type and amount of the transaction are informed
    end
    alt Merchant Approves Transaction
        Merchant->>System: The transaction is approved
    else Merchant Rejects Transaction
        Merchant-XSystem: The transaction is rejected
    end
    System->>Customer: Sends notification with tthe results of the transaction
```

**Merchant Initiated Payment**

```mermaid
%%{init: {'theme': 'default' } }%%
sequenceDiagram
    Merchant->>+System: Request a payment transaction from a mobile number or token
    System->>Customer: Merchant requests your approval for a payment transaction: <br> Please verify your identity
    Note left of Customer: The type and amount of the transaction are informed
    Customer->>System: Sends PIN number
    alt Wrong PIN
        System-XCustomer: Wrong PIN number 
    else PIN is Correct
        System->>+Merchant: Receives approval to proceed with transaction
    end
    Merchant->>System: Merchant approves the payment transaction
    System->>Customer: Sends notification with tthe results of the transaction
```
