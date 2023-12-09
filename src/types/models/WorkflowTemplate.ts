/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A workflow template represents the design of the workflow. In such design, the different steps and inputs don't have to be bound to a specific tool or dataset. It is a generic view of the workflow, which is instantiated in each execution.
 *
 * Example:
 * @prefix dc:  <http://purl.org/dc/terms/> .
 * @prefix opmw: <http://www.opmw.org/ontology/> .
 * <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_NTM>
 * a opmw:WorkflowTemplate;
 * rdfs:label "AquaFlow_NTM" ;
 * dc.contributor
 * <http://www.opmw.org/export/resource/Agent/WATER> ;
 * dc:modified
 * "2011-06-08T09:57:12-07:00"^^xsd:dateTime ;
 * opmw:hasVersion "2"^^xsd:int .
 */
export type WorkflowTemplate = {
    /**
     * Property used to link a workflow template to its graphical representation.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     *
     * <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_NTM>
     * a opmw:WorkflowTemplate;
     * opmw:hasTemplateDiagram "http://wind.isi.edu/marbles/assets/components/workflow_portal/users/1/Water/runs/run_148.png"xsd:anyURI.
     */
    hasTemplateDiagram?: Array<string> | null;
    /**
     * Property that binds a workflow template to its documentation.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     * <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_NTM>
     * a opmw:WorkflowTemplate;
     * opmw:hasDocumentation "A copy of the documentation related to this template "^^xsd:string.
     */
    hasDocumentation?: Array<string> | null;
    /**
     * small description
     */
    description?: Array<string> | null;
    /**
     * Property used to link a workflow template to its native template (encoded in the syntax of the workflow system where it was designed: scufl, owl, etc.).
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     *
     * <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_NTM>
     * a opmw:WorkflowTemplate;
     * opmw:hasNativeSystemTemplate "http://wind.isi.edu/marbles/assets/components/workflow_portal/users/1/Water/ontology/Water/AquaFlow_NTM.owl"xsd:anyURI.
     */
    hasNativeSystemTemplate?: Array<string> | null;
    /**
     * This data property binds a workflow template to the tool used for its design and creation. The tool is represented by its URL.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     *
     * <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_EDM>
     * a opmw:WorkflowTemplate;
     * opmw:createdInWorkflowSystem "http://wings.isi.edu"^^xsd:anyURI.
     */
    createdInWorkflowSystem?: Array<string> | null;
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
};

