/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { parse } from 'path';
import { CfnDatabase } from '@aws-cdk/aws-timestream';
import { CfnResource } from '@aws-cdk/core';

/**
 * Timestream databases use Customer Managed KMS Keys
 * @param node the CfnResource to check
 */
export default Object.defineProperty(
  (node: CfnResource): boolean => {
    if (node instanceof CfnDatabase) {
      if (node.kmsKeyId === undefined) {
        return false;
      }
    }
    return true;
  },
  'name',
  { value: parse(__filename).name }
);