/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowExecutionAccount = {
    description: `A workflow execution account represents the execution from the perspective of the system.

    Example:
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix opmw: <http://www.opmw.org/ontology/> .
    @prefix opmo: <http://openprovenance.org/model/opmo#> .

    <http://www.opmw.org/export/resource/WorkflowExecutionAccount/ACCOUNT1335533097598>
    a       opmo:Account , opmw:WorkflowExecutionAccount> ;
    rdfs:label "Execution account created on 1335533097598" ;
    opmw:executedInWorkflowSystem
    <http://www.opmw.org/export/resource/Agent/SHELL> ;
    opmw:hasEndTime
    "2012-04-25T07:17:48-07:00"^^xsd:dateTime ;
    opmw:hasExecutionDiagram "http://wind.isi.edu/marbles/assets/components/workflow_portal/users/1/Water/runs/run_144.png"^^xsd:anyURI ;
    opmw:hasStartTime               "2012-04-25T07:17:05-07:00"^^xsd:dateTime ;
    opmw:hasStatus "SUCCESS" ;`,
    properties: {
        overallEndTime: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'date-time',
            },
            isNullable: true,
        },
        hasStatus: {
            type: 'array',
            contains: {
                type: 'string',
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
        executedInWorkflowSystem: {
            type: 'array',
            contains: {
                type: 'Agent',
            },
            isNullable: true,
        },
        overallStartTime: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'date-time',
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
        hasExecutionDiagram: {
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
        correspondsToTemplate: {
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
