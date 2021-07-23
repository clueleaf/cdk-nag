/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { CfnCluster } from '@aws-cdk/aws-redshift';
import { CfnResource, Stack } from '@aws-cdk/core';

/**
 * Redshift clusters have encryption at rest enabled
 * @param node the CfnResource to check
 */
export default function (node: CfnResource): boolean {
  if (node instanceof CfnCluster) {
    if (node.encrypted == undefined) {
      return false;
    }
    const encrypted = Stack.of(node).resolve(node.encrypted);
    if (!encrypted) {
      return false;
    }
  }
  return true;
}