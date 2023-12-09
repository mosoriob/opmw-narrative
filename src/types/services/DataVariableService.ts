/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataVariable } from '../models/DataVariable';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DataVariableService {

    /**
     * List all instances of DataVariable
     * Gets a list of all instances of DataVariable (more information in http://www.opmw.org/ontology/DataVariable)
     * @param label Filter by label
     * @param page Page number
     * @param perPage Items per page
     * @returns DataVariable Successful response - returns an array with the instances of DataVariable.
     * @throws ApiError
     */
    public static getDatavariables(
        label?: string,
        page: number = 1,
        perPage: number = 100,
    ): CancelablePromise<Array<DataVariable>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/datavariables',
            query: {
                'label': label,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Get a single DataVariable by its id
     * Gets the details of a given DataVariable (more information in http://www.opmw.org/ontology/DataVariable)
     * @param id The ID of the DataVariable to be retrieved
     * @returns DataVariable Gets the details of a given DataVariable
     * @throws ApiError
     */
    public static getDatavariables1(
        id: string,
    ): CancelablePromise<DataVariable> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/datavariables/{id}',
            path: {
                'id': id,
            },
        });
    }

}
