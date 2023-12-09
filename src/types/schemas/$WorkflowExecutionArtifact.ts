/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowExecutionArtifact = {
    description: `A workflow execution artifact represents a resource used or generated in the execution of a workflow.

    Example:
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix opmw: <http://www.opmw.org/ontology/> .
    @prefix opmv: <http://purl.org/net/opmv/ns#> .
    @prefix opmo: <http://openprovenance.org/model/opmo#> .

    <http://www.opmw.org/export/resource/WorkflowExecutionArtifact/25F1016C12EBE301EE7AADBC0B085C45>
    a       opmw:WorkflowExecutionArtifact , opmv:Artifact;
    rdfs:label "Execution artifact with id: 25f1016c12ebe301ee7aadbc0b085c45" ;
    opmo:account              <http://www.opmw.org/export/resource/WorkflowExecutionAccount/ACCOUNT1335533097598> ;
    opmv:wasGeneratedBy     <http://www.opmw.org/export/resource/WorkflowExecutionProcess/p1> ;
    opmw:hasLocation     "http://wings.isi.edu/opmexport/resource/1/144/Formatted_SMN_2010_03_10Z"^^xsd:anyURI ;
    opmw:hasSize "8618"^^xsd:int ;
    opmw:hasWorkflowTemplateArtifact              <http://www.opmw.org/export/resource/DataVariable/AQUAFLOW_EDM_FORMATTEDDATA>.`,
    properties: {
        hasSize: {
            type: 'array',
            contains: {
                type: 'number',
                format: 'int32',
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
        hasValue: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isNullable: true,
        },
        hasLocation: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isNullable: true,
        },
        hasFileName: {
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
        correspondsToTemplateArtifact: {
            type: 'array',
            contains: {
                type: 'WorkflowTemplateArtifact',
            },
            isNullable: true,
        },
    },
} as const;
