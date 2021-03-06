# Deployment Automation

The application runs on **CI/CD** pipeline script using **CircleCi**.
> The pipeline is running on changes in the master branch.


## Workflow

### Code Commit
The pipeline is triggered once a commit is published successfully to the repository master branch.

### GitHub
Once the repository master branch is uploaded, CircleCi detects the changes and runs the CI/CD script.

### CircleCi
After the app passes the steps of the deployment script, the updates will be deployed to AWS.
> Make sure to add all environment variables required for AWS CLI, EB CLI, and any other environment variables used in your code.

### Diagram
![Pipeline](https://user-images.githubusercontent.com/69659353/159093365-7ada4774-ef2c-4a0b-ae24-f0c79768f6b3.png)
