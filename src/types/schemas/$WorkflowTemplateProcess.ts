/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowTemplateProcess = {
    description: `A workflow process template is an abstraction of the workflow execution process step that aims to describe the method followed by the scientist instead of its specific instantiation.

    Example:
    @prefix opmw: <http://www.opmw.org/ontology/> .
    @prefix water: <http://www.isi.edu/ac/Water/library.owl#> .

    <http://www.opmw.org/export/resource/WorkflowTemplateProcess/AQUAFLOW_NTM_CALCULATEHOURLYAVERAGES>
    a opmw:ProcessTemplate, water:CalculateHourlyAverages;
    opmw:template <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_NTM>;
    opmw:uses <http://www.opmw.org/export/resource/DataVariable/AQUAFLOW_NTM_FILTEREDDATA>.
    `,
    properties: {
        isStepOfTemplate: {
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
        uses: {
            type: 'array',
            contains: {
                type: 'WorkflowTemplateArtifact',
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
