// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for BuildImageFunction
 */
export interface BuildImageFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/lambdas/build-image.
 */
export class BuildImageFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: BuildImageFunctionProps) {
    super(scope, id, {
      description: 'src/lambdas/build-image.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs14.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/lambdas/build-image.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}