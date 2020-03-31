# Serverless Base Image

  

This base image will help us ease and speed up the **AWS Lambda** sessions. This one provides the baseline for anyone to pickup and start developing *Lambdas* without the need of setting up the whole environment.

This images includes:

- Serverless Framework Core: 1.67.0
- Serverless Plugin: 3.6.1
- Serverless SDK: 2.3.0
- Serverless Components: 2.22.3
- Node: 12.16.1
- Npm: 6.13.4
- Yarn: 1.22.4
- AWS CLI
  

---

  

## Requirements

  

- Docker CE installed.

- Command line tool that can execute **docker** commands.

  

---

  

## How to use this

  

You can either run it directly with *docker* or with *docker-compose*.

  

### Docker example

  

-  `docker build -t codurance/serverless . ` First you need to build the image.

-  `docker run --rm -it --name codurance-serverless -v $(pwd):/home/svrless -p 8000:8000 -p 3000:3000 codurance/serverless /bin/bash` 
This will start an interactive session and mount volume `/home/svrless` in current host folder. 
You can bind multiple folders

  

### Docker Compose example

 
 
-  `docker-compose build ` Builds the image (or updates it if you've made changes to the image) 
-  `docker-compose up -d ` Starts the container in dettached mode
-  `docker exec -it serverless-image_serverless-framework_1 /bin/bash ` starts and interactive session

  
  

After this, you'll be inside the container, able to run all serverless commands.

NOTE: You can modify the `docker-compose.yml` file and mount multiple volumes at will:
Example

``` 
  ...
  volumes:
    - ./serverless:/home/svrless
    - ../serverless-front:/home/serverless-front

  ...
```

Above example will mount `/home/svrless` into host's `./serverless` as well as mount `/home/serverless-front` into host's `../serverless-front`

For further reference about [volumes](https://docs.docker.com/compose/compose-file/compose-file-v2/)
  

---

  

## Getting started

  

In order to create your first lambda, you can leverage on the **Serverless Framework**, by executing

`serverless create --template aws-nodejs --name my-service --path my-service`. 

This will create a sample Lambda function called `my-service` inside a `my-service` folder, based on **NodeJS** which you can change and configure later. You can specify other types like, as mentioned in the [docs](https://serverless.com/framework/docs/providers/aws/cli-reference/create/)

  

In order to interact with **AWS**, first you need to configure your credentials. You can do so by executing 

`serverless config credentials --provider aws --key KEY --secret SECRET`, 

where KEY and SECRET can be obtained from AWS *My security credentials* menu.

  

After that, you can deploy your Lambda Function by running 
`serverless deploy`

Alternatively, you can deploy to a specific environment by doing
 
 `serverless deploy --stage <YOUR_ENVIRONMENT_NAME> `, 
 
 for example: 
 
 `serverless deploy --stage production`

  
## AWS CLI
All `aws` commands are available


For further reference, please have look at [Serverless with AWS](https://serverless.com/framework/docs/providers/aws/)
