---
id: on-premises-demo
title: On Premises Demo
sidebar_label: On Premises Demo
---

:::info Prerequisite - This solution require

- Docker Compose Version: +1.29
- Docker Version: +17.06

:::

### Running docker images locally

In this case, the developer need to access the token-backend repository (https://github.com/gsmainclusivetechlab/token-backend) and go to release branch to copy the docker-compose.yml and .env file, then follow the next steps:

1. Run this command

```
docker-compose up -d 
```

2. Open browser on http://localhost:8080

3. To teardown everything, run the next command
     
```
docker-compose down
```

:::info .env File

If you want to use Live mode with Twilio, you will need to fill the properties on the .env file (TWILIO_SID, TWILIO_TOKEN and TWILIO_MESSAGE_SID) with your Twilio credentials and config the receive webhook (A MESSAGE COMES IN option on Messaging section) for the path '{url}:4100/hooks/twilio'

:::