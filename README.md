# todonist v1

## Complete items on a list of done items.

This scriipt takes the 'Done' project in my todoist and completes the task.

This is currently hosted on AWS lambda and deployed manually

Under configuration in Lambda, I set up the node path (key: NODE_PATH, value: /opt/nodejs/node_modules/) to point at the Lambda layer for the module dependency.

The Lambda is set to run once every 24 hours via AWS Eventbridge

Here are a couple of links that helped me along thw way:
- https://stackoverflow.com/questions/55722748/aws-lambda-function-is-unable-to-access-node-modules-in-layer
- https://github.com/aws/aws-sdk-js-v3/issues/3386

HTH Future self!
