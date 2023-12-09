/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowExecutionProcess } from '../models/WorkflowExecutionProcess';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkflowExecutionProcessService {

    /**
     * List all instances of WorkflowExecutionProcess
     * Gets a list of all instances of WorkflowExecutionProcess (more information in http://www.opmw.org/ontology/WorkflowExecutionProcess)
     * @param label Filter by label
     * @param page Page number
     * @param perPage Items per page
     * @returns WorkflowExecutionProcess Successful response - returns an array with the instances of WorkflowExecutionProcess.
     * @throws ApiError
     */
    public static getWorkflowexecutionprocesss(
        label?: string,
        page: number = 1,
        perPage: number = 100,
    ): CancelablePromise<Array<WorkflowExecutionProcess>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowexecutionprocesss',
            query: {
                'label': label,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Get a single WorkflowExecutionProcess by its id
     * Gets the details of a given WorkflowExecutionProcess (more information in http://www.opmw.org/ontology/WorkflowExecutionProcess)
     * @param id The ID of the WorkflowExecutionProcess to be retrieved
     * @returns WorkflowExecutionProcess Gets the details of a given WorkflowExecutionProcess
     * @throws ApiError
     */
    public static getWorkflowexecutionprocesss1(
        id: string,
    ): CancelablePromise<WorkflowExecutionProcess> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowexecutionprocesss/{id}',
            path: {
                'id': id,
            },
        });
    }

}
