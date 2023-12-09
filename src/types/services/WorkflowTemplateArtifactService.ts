/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkflowTemplateArtifact } from '../models/WorkflowTemplateArtifact';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkflowTemplateArtifactService {

    /**
     * List all instances of WorkflowTemplateArtifact
     * Gets a list of all instances of WorkflowTemplateArtifact (more information in http://www.opmw.org/ontology/WorkflowTemplateArtifact)
     * @param label Filter by label
     * @param page Page number
     * @param perPage Items per page
     * @returns WorkflowTemplateArtifact Successful response - returns an array with the instances of WorkflowTemplateArtifact.
     * @throws ApiError
     */
    public static getWorkflowtemplateartifacts(
        label?: string,
        page: number = 1,
        perPage: number = 100,
    ): CancelablePromise<Array<WorkflowTemplateArtifact>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowtemplateartifacts',
            query: {
                'label': label,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Get a single WorkflowTemplateArtifact by its id
     * Gets the details of a given WorkflowTemplateArtifact (more information in http://www.opmw.org/ontology/WorkflowTemplateArtifact)
     * @param id The ID of the WorkflowTemplateArtifact to be retrieved
     * @returns WorkflowTemplateArtifact Gets the details of a given WorkflowTemplateArtifact
     * @throws ApiError
     */
    public static getWorkflowtemplateartifacts1(
        id: string,
    ): CancelablePromise<WorkflowTemplateArtifact> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workflowtemplateartifacts/{id}',
            path: {
                'id': id,
            },
        });
    }

}
