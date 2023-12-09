/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Agent } from "./Agent";
import type { WorkflowTemplate } from "./WorkflowTemplate";

/**
 * A workflow execution account represents the execution from the perspective of the system.
 *
 * Example:
 * @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
 * @prefix opmw: <http://www.opmw.org/ontology/> .
 * @prefix opmo: <http://openprovenance.org/model/opmo#> .
 *
 * <http://www.opmw.org/export/resource/WorkflowExecutionAccount/ACCOUNT1335533097598>
 * a       opmo:Account , opmw:WorkflowExecutionAccount> ;
 * rdfs:label "Execution account created on 1335533097598" ;
 * opmw:executedInWorkflowSystem
 * <http://www.opmw.org/export/resource/Agent/SHELL> ;
 * opmw:hasEndTime
 * "2012-04-25T07:17:48-07:00"^^xsd:dateTime ;
 * opmw:hasExecutionDiagram "http://wind.isi.edu/marbles/assets/components/workflow_portal/users/1/Water/runs/run_144.png"^^xsd:anyURI ;
 * opmw:hasStartTime               "2012-04-25T07:17:05-07:00"^^xsd:dateTime ;
 * opmw:hasStatus "SUCCESS" ;
 */
export type WorkflowExecutionAccount = {
  /**
   * Property which states that none of the activities contained in the account finished executing after the End Time.
   *
   * Example:
   * @prefix opmw: <http://www.opmw.org/ontology/> .
   * @prefix opmo: <http://openprovenance.org/model/opmo#> .
   *
   * <http://www.opmw.org/export/resource/WorkflowExecutionAccount/ACCOUNT1335506667949>
   * a opmw:WorkflowExecutionAccount,opmo:Account;
   * opmw:overallEndTime "2012-04-25T10:28:55-07:00"^^xsd:dateTime.
   */
  overallEndTime?: string | null;
  /**
   * Property used to state whether an ececution account was successful or not.
   *
   * Example:
   * @prefix opmw: <http://www.opmw.org/ontology/> .
   * @prefix opmo: <http://openprovenance.org/model/opmo#> .
   *
   * <http://www.opmw.org/export/resource/WorkflowExecutionAccount/ACCOUNT1335506667949>
   * a opmo:Account, opmw:ExecutionAccount;
   * opmw:hasStatus "SUCCESS"^^xsd.string.
   */
  hasStatus?: string | null;
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
  hasOriginalLogFile?: string | null;
  /**
   * Property to bind an execution account to the system where it was executed (which could be different from the one used for designing its workflow template).
   *
   * Example:
   * @prefix opmw: <http://www.opmw.org/ontology/> .
   * @prefix opmo: <http://openprovenance.org/model/opmo#> .
   *
   * <http://www.opmw.org/export/resource/WorkflowExecutionAccount/acc1>
   * a opmo:Account, opmw:executionAccount;
   * opmw:executedInWorkflowSystem <http://www.opmw.org/export/resource/Agent/SHELL>.
   *
   * <http://www.opmw.org/export/resource/Agent/SHELL>
   * a opmw:Agent.
   */
  executedInWorkflowSystem?: Agent | null;
  /**
   * Property which states that none of the activities in the current account started executing before the start time.
   *
   * Example:
   * @prefix opmw: <http://www.opmw.org/ontology/> .
   * @prefix opmo: <http://openprovenance.org/model/opmo#> .
   *
   * <http://www.opmw.org/export/resource/WorkflowExecutionAccount/ACCOUNT1335506667949>
   * a opmw:WorkflowExecutionAccount,opmo:Account;
   * opmw:overallStartTime "2012-04-25T10:28:07-07:00"^^xsd:dateTime.
   */
  overallStartTime?: string | null;
  /**
   * small description
   */
  description?: string | null;
  /**
   * Property that links an execution account to its diagram. The diagram shows how the template has been instantiated with different components.
   *
   * Example:
   * @prefix opmw: <http://www.opmw.org/ontology/> .
   * @prefix opmo: <http://openprovenance.org/model/opmo#> .
   *
   * <http://www.opmw.org/export/resource/WorkflowExecutionAccount/ACCOUNT1335506667949>
   * a opmw:WorkflowExecutionAccount,opmo:Account;
   * opmw:hasExecutionDiagram "http://wind.isi.edu/marbles/assets/components/workflow_portal/users/1/Water/runs/run_148.png"^^sxd:anyURI.
   */
  hasExecutionDiagram?: string | null;
  /**
   * identifier
   */
  id?: string;
  /**
   * short description of the resource
   */
  label?: string | null;
  /**
   * Property that binds an execution account to the template of the whole workflow. The template contains the plan for the workflow.
   *
   * Example:
   * @prefix opmw: <http://www.opmw.org/ontology/> .
   * @prefix opmo: <http://openprovenance.org/model/opmo#> .
   *
   * <http://www.opmw.org/export/resource/WorkflowExecutionProcess/acc1>
   * a opmo:Account, opmw:workflowExecutionAccount;
   * opmw:correspondsToTemplate <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_EDM>.
   */
  correspondsToTemplate?: WorkflowTemplate | null;
  /**
   * type of the resource
   */
  type?: string | null;
};
