/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowTemplateArtifact } from './WorkflowTemplateArtifact';

/**
 * A workflow execution artifact represents a resource used or generated in the execution of a workflow.
 *
 * Example:
 * @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
 * @prefix opmw: <http://www.opmw.org/ontology/> .
 * @prefix opmv: <http://purl.org/net/opmv/ns#> .
 * @prefix opmo: <http://openprovenance.org/model/opmo#> .
 *
 * <http://www.opmw.org/export/resource/WorkflowExecutionArtifact/25F1016C12EBE301EE7AADBC0B085C45>
 * a       opmw:WorkflowExecutionArtifact , opmv:Artifact;
 * rdfs:label "Execution artifact with id: 25f1016c12ebe301ee7aadbc0b085c45" ;
 * opmo:account              <http://www.opmw.org/export/resource/WorkflowExecutionAccount/ACCOUNT1335533097598> ;
 * opmv:wasGeneratedBy     <http://www.opmw.org/export/resource/WorkflowExecutionProcess/p1> ;
 * opmw:hasLocation     "http://wings.isi.edu/opmexport/resource/1/144/Formatted_SMN_2010_03_10Z"^^xsd:anyURI ;
 * opmw:hasSize "8618"^^xsd:int ;
 * opmw:hasWorkflowTemplateArtifact              <http://www.opmw.org/export/resource/DataVariable/AQUAFLOW_EDM_FORMATTEDDATA>.
 */
export type WorkflowExecutionArtifact = {
    /**
     * Property used to annotate a workflow execution artifact with the size in bytes of its file.
     *
     * Example
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     * @prefix opmv: <http://purl.org/net/opmv/ns#> .
     *
     * <http://www.opmw.org/export/resource/WorkflowExecutionArtifact/DCF49186981194248009E24BAD6A6412>
     * a opmv:Artifact, opmw:WorkflowExecutionArtifact.
     * opmw:hasLocation "68"^^xsd:int.
     */
    hasSize?: Array<number> | null;
    /**
     * small description
     */
    description?: Array<string> | null;
    /**
     * Property used to state the value of the artifact (in case of being a parameter).
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     * @prefix opmv: <http://purl.org/net/opmv/ns#> .
     *
     * <http://www.opmw.org/export/resource/WorkflowExecutionArtifact/DEPTH0.61959237>
     * a opmv:Artifact, opmw:WorkflowExecutionArtifact;
     * opmw:hasValue "0.61959237"^^xsd:string.
     */
    hasValue?: Array<string> | null;
    /**
     * Property used to link an execution artifact to the physical location of its file in the server.
     *
     * Example
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     * @prefix opmv: <http://purl.org/net/opmv/ns#> .
     *
     * <http://www.opmw.org/export/resource/WorkflowExecutionArtifact/DCF49186981194248009E24BAD6A6412>
     * a opmv:Artifact, opmw:WorkflowExecutionArtifact.
     * opmw:hasLocation "http://www.opmw.org/datasets/resource/1/148/NTMParams_SMN_2010_03_14Z"^^xsd:anyURI.
     */
    hasLocation?: Array<string> | null;
    /**
     * Property used to link an execution artifact to its file name (independently of its URI).
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     * @prefix opmv: <http://purl.org/net/opmv/ns#> .
     *
     * <http://www.opmw.org/export/resource/WorkflowExecutionArtifact/DCF49186981194248009E24BAD6A6412>
     * a opmv:Artifact, opmw:WorkflowExecutionArtifact.
     * opmw:hasFileName "NTMParams_SMN_2010_03_14Z"^^xsd:string.
     */
    hasFileName?: Array<string> | null;
    /**
     * identifier
     */
    id?: string;
    /**
     * short description of the resource
     */
    label?: Array<string> | null;
    /**
     * type of the resource
     */
    type?: Array<string> | null;
    /**
     * Property that binds a workflow execution artifact to its correspondant workflow template artifact.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     * @prefix opmv: <http://purl.org/net/opmv/ns#> .
     *
     * <http://www.opmw.org/export/resource/WorkflowExecutionArtifact/DEPTH1.2150836>
     * a opmv:Artifact, opmw:WorkflowExecutionArtifact;
     * opmw:correspondsToTemplateArtifact <http://www.opmw.org/export/resource/ParameterVariable/AQUAFLOW_EDM_DEPTH>.
     */
    correspondsToTemplateArtifact?: Array<WorkflowTemplateArtifact> | null;
};

