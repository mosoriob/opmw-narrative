/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecutionAccount } from '../models/WorkflowExecutionAccount';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkflowExecutionAccountService {

    /**
     * List all instances of WorkflowExecutionAccount
     * Gets a list of all instances of WorkflowExecutionAccount (more information in http://www.opmw.org/ontology/WorkflowExecutionAccount)
     * @param label Filter by label
     * @param page Page number
     * @param perPage Items per page
     * @returns WorkflowExecutionAccount Successful response - returns an array with the instances of WorkflowExecutionAccount.
     * @throws ApiError
     */
    public static getWorkflowexecutionaccounts(
        label?: string,
        page: number = 1,
        perPage: number = 100,
    ): CancelablePromise<Array<WorkflowExecutionAccount>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowexecutionaccounts',
            query: {
                'label': label,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Get a single WorkflowExecutionAccount by its id
     * Gets the details of a given WorkflowExecutionAccount (more information in http://www.opmw.org/ontology/WorkflowExecutionAccount)
     * @param id The ID of the WorkflowExecutionAccount to be retrieved
     * @returns WorkflowExecutionAccount Gets the details of a given WorkflowExecutionAccount
     * @throws ApiError
     */
    public static getWorkflowexecutionaccounts1(
        id: string,
    ): CancelablePromise<WorkflowExecutionAccount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowexecutionaccounts/{id}',
            path: {
                'id': id,
            },
        });
    }

}
