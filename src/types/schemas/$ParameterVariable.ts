/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ParameterVariable = {
    description: `An parameter variable represents a description of an input parameter of a process. Parameter variables can only be used by process.

    Example:
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix opmw: <http://www.opmw.org/ontology/> .

    <http://www.opmw.org/export/resource/ParameterVariable/AQUAFLOW_NTM_LATITUDE>
    a      opmw:/WorkflowTemplateArtifact , opmw:ParameterVariable ;
    rdfs:label "Parameter variable Latitude" ;
    opmw:template              <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_NTM> .`,
    properties: {
        hasDimensionality: {
            type: 'array',
            contains: {
                type: 'number',
                format: 'int32',
            },
            isNullable: true,
        },
        isGeneratedBy: {
            type: 'array',
            contains: {
                type: 'WorkflowTemplateProcess',
            },
            isNullable: true,
        },
        description: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isNullable: true,
        },
        id: {
            type: 'string',
            description: `identifier`,
        },
        label: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isNullable: true,
        },
        isParameterOfTemplate: {
            type: 'array',
            contains: {
                type: 'WorkflowTemplate',
            },
            isNullable: true,
        },
        type: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isNullable: true,
        },
    },
} as const;
