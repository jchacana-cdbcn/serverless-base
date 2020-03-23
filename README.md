# Serverless Base Image

This base image will help us ease and speed up the **AWS Lambda** sessions. This one provides the baseline for anyone to pickup and start developing *Lambdas* without the need of setting up the whole environment.

---

## Requirements

- Docker CE installed.
- Command line tool that can execute **docker** commands.

---

## How to use this

You can either run it directly with *docker* or with *docker-compose*.

### Docker example

- `docker build -t codurance/serverless . ` First you need to build the image.
- `docker run --rm -it --name codurance-serverless -v .:/home/svrless -p 8000:8000 codurance/serverless /bin/bash` This will start an interactive session.

### Docker Compose example

- `docker-compose run serverless-framework /bin/bash ` This will build the image and start an interactive session.


After this, you'll be inside the container, able to run all serverless commands.

---

## Getting started

In order to create your first lambda, you can leverage on the **Serverless Framework**, by executing `serverless create -t aws-nodejs`. This will create a sample Lambda function which you can change and configure later.

In order to interact with **AWS**, first you need to configure your credentials. You can do so by executing `serverless config credentials --provider aws --key KEY --secret SECRET`, where KEY and SECRET can be obtained from AWS *My security credentials* menu.

After that, you can deploy your Lambda Function by running `serverless deploy`
Alternatively, you can deploy to a specific environment by doing `serverless deploy --stage <YOUR_ENVIRONMENT_NAME> `, for example: `serverless deploy --stage production`