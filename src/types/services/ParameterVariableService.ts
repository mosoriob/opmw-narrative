/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParameterVariable } from '../models/ParameterVariable';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ParameterVariableService {

    /**
     * List all instances of ParameterVariable
     * Gets a list of all instances of ParameterVariable (more information in http://www.opmw.org/ontology/ParameterVariable)
     * @param label Filter by label
     * @param page Page number
     * @param perPage Items per page
     * @returns ParameterVariable Successful response - returns an array with the instances of ParameterVariable.
     * @throws ApiError
     */
    public static getParametervariables(
        label?: string,
        page: number = 1,
        perPage: number = 100,
    ): CancelablePromise<Array<ParameterVariable>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/parametervariables',
            query: {
                'label': label,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Get a single ParameterVariable by its id
     * Gets the details of a given ParameterVariable (more information in http://www.opmw.org/ontology/ParameterVariable)
     * @param id The ID of the ParameterVariable to be retrieved
     * @returns ParameterVariable Gets the details of a given ParameterVariable
     * @throws ApiError
     */
    public static getParametervariables1(
        id: string,
    ): CancelablePromise<ParameterVariable> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/parametervariables/{id}',
            path: {
                'id': id,
            },
        });
    }

}
