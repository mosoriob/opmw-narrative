/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowTemplate } from '../models/WorkflowTemplate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkflowTemplateService {

    /**
     * List all instances of WorkflowTemplate
     * Gets a list of all instances of WorkflowTemplate (more information in http://www.opmw.org/ontology/WorkflowTemplate)
     * @param label Filter by label
     * @param page Page number
     * @param perPage Items per page
     * @returns WorkflowTemplate Successful response - returns an array with the instances of WorkflowTemplate.
     * @throws ApiError
     */
    public static getWorkflowtemplates(
        label?: string,
        page: number = 1,
        perPage: number = 100,
    ): CancelablePromise<Array<WorkflowTemplate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowtemplates',
            query: {
                'label': label,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Get a single WorkflowTemplate by its id
     * Gets the details of a given WorkflowTemplate (more information in http://www.opmw.org/ontology/WorkflowTemplate)
     * @param id The ID of the WorkflowTemplate to be retrieved
     * @returns WorkflowTemplate Gets the details of a given WorkflowTemplate
     * @throws ApiError
     */
    public static getWorkflowtemplates1(
        id: string,
    ): CancelablePromise<WorkflowTemplate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowtemplates/{id}',
            path: {
                'id': id,
            },
        });
    }

}
