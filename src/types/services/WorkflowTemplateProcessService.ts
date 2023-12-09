/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowTemplateProcess } from '../models/WorkflowTemplateProcess';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkflowTemplateProcessService {

    /**
     * List all instances of WorkflowTemplateProcess
     * Gets a list of all instances of WorkflowTemplateProcess (more information in http://www.opmw.org/ontology/WorkflowTemplateProcess)
     * @param label Filter by label
     * @param page Page number
     * @param perPage Items per page
     * @returns WorkflowTemplateProcess Successful response - returns an array with the instances of WorkflowTemplateProcess.
     * @throws ApiError
     */
    public static getWorkflowtemplateprocesss(
        label?: string,
        page: number = 1,
        perPage: number = 100,
    ): CancelablePromise<Array<WorkflowTemplateProcess>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowtemplateprocesss',
            query: {
                'label': label,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Get a single WorkflowTemplateProcess by its id
     * Gets the details of a given WorkflowTemplateProcess (more information in http://www.opmw.org/ontology/WorkflowTemplateProcess)
     * @param id The ID of the WorkflowTemplateProcess to be retrieved
     * @returns WorkflowTemplateProcess Gets the details of a given WorkflowTemplateProcess
     * @throws ApiError
     */
    public static getWorkflowtemplateprocesss1(
        id: string,
    ): CancelablePromise<WorkflowTemplateProcess> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowtemplateprocesss/{id}',
            path: {
                'id': id,
            },
        });
    }

}
