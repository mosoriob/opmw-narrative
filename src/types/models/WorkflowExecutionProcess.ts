/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowTemplateProcess } from './WorkflowTemplateProcess';

/**
 * A workflow execution process represents the execution of a step in workflow template. The execution process also describes the specific method used to acomplish the task described in the proces template.
 *
 * Example:
 * @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
 * @prefix opmw: <http://www.opmw.org/ontology/> .
 * @prefix opmv: <http://purl.org/net/opmv/ns#> .
 * @prefix opmo: <http://openprovenance.org/model/opmo#> .
 *
 * <http://www.opmw.org/export/resource/WorkflowExecutionProcess/CONVERTTOSTANDARDFORMAT133553>
 * a      opmw:/WorkflowExecutionProcess , opmv:Process ;
 * rdfs:label "Execution process ConvertToStandardFormat" ;
 * opmo:account              <http://www.opmw.org/export/resource/WorkflowExecutionAccount/ACCOUNT1335533097598> ;
 * opmv:used              <http://www.opmw.org/export/resource/WorkflowExecutionArtifact/6C7CF277338D9590EE18534D4D78924F> ;
 * opmv:wasControlledBy               <http://www.opmw.org/export/resource/Agent/ADMIN> ;
 * opmw:hasWorkflowTemplateProcess              <http://www.opmw.org/export/resource/WorkflowTemplateProcess/AQUAFLOW_EDM_CONVERTTOSTANDARDFORMAT> .
 */
export type WorkflowExecutionProcess = {
    /**
     * Property that binds a workflow execution process to the specific component (code, scripts, etc.) used in the execution.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     * @prefix opmv: <http://purl.org/net/opmv/ns#> .
     *
     * <http://www.opmw.org/export/resource/WorkflowExecutionProcess/REAERATIONEDM133549210450086>
     * a opmv:Process, opmw:WorkflowExecutionProcess;
     * opmw:hasExecutableComponent <http://www.opmw.org/export/resource/ReaerationEDM/COMPONENTREAERATIONEDM>.
     */
    hasExecutableComponent?: Array<Record<string, any>> | null;
    /**
     * Property used to link an execution account or a workflow execution process to the correspondent log file produced by the enacting workflow engine.
     *
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     * @prefix opmo: <http://openprovenance.org/model/opmo#> .
     *
     * <http://www.opmw.org/export/resource/WorkflowExecutionAccount/ACCOUNT1335506667949>
     * a opmw:WorkflowExecutionAccount,opmo:Account;
     * opmw:hasOriginalLogFile "http://wind.isi.edu/marbles/assets/components/workflow_portal/users/1/Water/runs/run_148.ttl"^^sxd:anyURI.
     */
    hasOriginalLogFile?: Array<string> | null;
    /**
     * small description
     */
    description?: Array<string> | null;
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
     * Property that binds a workflow execution process  to its correspondant process template.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     * @prefix opmv: <http://purl.org/net/opmv/ns#> .
     *
     * <http://www.opmw.org/export/resource/WorkflowExecutionProcess/REAERATIONEDM133549210450086>
     * a opmv:Process, opmw:WorkflowExecutionProcess;
     * opmw:correspondsToTemplateProcess <http://www.opmw.org/export/resource/WorkflowTemplateProcess/AQUAFLOW_EDM_REAERATIONEDM>.
     */
    correspondsToTemplateProcess?: Array<WorkflowTemplateProcess> | null;
};

