/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataVariable = {
    description: `A Data variable is a workflow template artifact that represents a variable in the workflow specification.

    Example:
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix opmw: <http://www.opmw.org/ontology/> .

    <http://www.opmw.org/export/resource/DataVariable/AQUAFLOW_NTM_SUM_CORRDO>
    a      opmw:WorkflowTemplateArtifact , opmw:DataVariable ;
    rdfs:label "Data variable Sum_CorrDO" ;
    opmw:hasDimensionality "0"^^xsd:int ;
    opmw:isGeneratedBy              <http://www.opmw.org/export/resource/WorkflowTemplateProcess/AQUAFLOW_NTM_CREATEPLOTS> ;
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
        isVariableOfTemplate: {
            type: 'array',
            contains: {
                type: 'WorkflowTemplate',
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
        type: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isNullable: true,
        },
    },
} as const;
