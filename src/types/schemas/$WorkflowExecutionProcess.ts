/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowExecutionProcess = {
    description: `A workflow execution process represents the execution of a step in workflow template. The execution process also describes the specific method used to acomplish the task described in the proces template.

    Example:
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix opmw: <http://www.opmw.org/ontology/> .
    @prefix opmv: <http://purl.org/net/opmv/ns#> .
    @prefix opmo: <http://openprovenance.org/model/opmo#> .

    <http://www.opmw.org/export/resource/WorkflowExecutionProcess/CONVERTTOSTANDARDFORMAT133553>
    a      opmw:/WorkflowExecutionProcess , opmv:Process ;
    rdfs:label "Execution process ConvertToStandardFormat" ;
    opmo:account              <http://www.opmw.org/export/resource/WorkflowExecutionAccount/ACCOUNT1335533097598> ;
    opmv:used              <http://www.opmw.org/export/resource/WorkflowExecutionArtifact/6C7CF277338D9590EE18534D4D78924F> ;
    opmv:wasControlledBy               <http://www.opmw.org/export/resource/Agent/ADMIN> ;
    opmw:hasWorkflowTemplateProcess              <http://www.opmw.org/export/resource/WorkflowTemplateProcess/AQUAFLOW_EDM_CONVERTTOSTANDARDFORMAT> .`,
    properties: {
        hasExecutableComponent: {
            type: 'array',
            contains: {
                type: 'dictionary',
                contains: {
                    properties: {
                    },
                },
            },
            isNullable: true,
        },
        hasOriginalLogFile: {
            type: 'array',
            contains: {
                type: 'string',
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
        correspondsToTemplateProcess: {
            type: 'array',
            contains: {
                type: 'WorkflowTemplateProcess',
            },
            isNullable: true,
        },
    },
} as const;
