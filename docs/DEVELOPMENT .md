# Dependances & Development

## Front End
Basic Web App using **Angular** with **TypeScript**

### Manual Deployment
> Require AWS CLI and NodeJS to be installed
1. Navigate to the project directory `cd udagram/udagram-frontend`
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build the project.
4. Run the following command to deploy to AWS S3
```
aws s3 cp --recursive --acl public-read ./www s3://udagram-7617-bucket/
```

### Production Environment
* NodeJS v14.18.1
* Ionicframework
* AngularJS
* AWS S3
> The S3 bucket require public availability and static website enabling


## Back End
**Expressjs** API App with **TypeScript**

### Manual Deployment
> Require AWS Elastic  Beanstalk CLI and NodeJS to be installed
1. Navigate to the project directory `cd udagram/udagram-api`
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build the project and generate a compressed `zip` Archive folder.
4. Run `eb deploy` to deploy to AWS Elastic Beanstalk.

### Production Environment
* NodeJS v14.18.1
* Expressjs
* AWS Elastic Beanstalk
> Elastic Beanstalk needs to be configured as a web server