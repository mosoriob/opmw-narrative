/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecutionArtifact } from '../models/WorkflowExecutionArtifact';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkflowExecutionArtifactService {

    /**
     * List all instances of WorkflowExecutionArtifact
     * Gets a list of all instances of WorkflowExecutionArtifact (more information in http://www.opmw.org/ontology/WorkflowExecutionArtifact)
     * @param label Filter by label
     * @param page Page number
     * @param perPage Items per page
     * @returns WorkflowExecutionArtifact Successful response - returns an array with the instances of WorkflowExecutionArtifact.
     * @throws ApiError
     */
    public static getWorkflowexecutionartifacts(
        label?: string,
        page: number = 1,
        perPage: number = 100,
    ): CancelablePromise<Array<WorkflowExecutionArtifact>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowexecutionartifacts',
            query: {
                'label': label,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Get a single WorkflowExecutionArtifact by its id
     * Gets the details of a given WorkflowExecutionArtifact (more information in http://www.opmw.org/ontology/WorkflowExecutionArtifact)
     * @param id The ID of the WorkflowExecutionArtifact to be retrieved
     * @returns WorkflowExecutionArtifact Gets the details of a given WorkflowExecutionArtifact
     * @throws ApiError
     */
    public static getWorkflowexecutionartifacts1(
        id: string,
    ): CancelablePromise<WorkflowExecutionArtifact> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowexecutionartifacts/{id}',
            path: {
                'id': id,
            },
        });
    }

}
