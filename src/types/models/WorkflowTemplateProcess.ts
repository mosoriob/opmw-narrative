/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowTemplate } from './WorkflowTemplate';
import type { WorkflowTemplateArtifact } from './WorkflowTemplateArtifact';

/**
 * A workflow process template is an abstraction of the workflow execution process step that aims to describe the method followed by the scientist instead of its specific instantiation.
 *
 * Example:
 * @prefix opmw: <http://www.opmw.org/ontology/> .
 * @prefix water: <http://www.isi.edu/ac/Water/library.owl#> .
 *
 * <http://www.opmw.org/export/resource/WorkflowTemplateProcess/AQUAFLOW_NTM_CALCULATEHOURLYAVERAGES>
 * a opmw:ProcessTemplate, water:CalculateHourlyAverages;
 * opmw:template <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_NTM>;
 * opmw:uses <http://www.opmw.org/export/resource/DataVariable/AQUAFLOW_NTM_FILTEREDDATA>.
 *
 */
export type WorkflowTemplateProcess = {
    /**
     * Property used to dessignate which workflow Steps (or Workflow Template Processes) belong to a workflow template.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     *
     * <http://www.opmw.org/export/resource/WorkflowTemplateProcess/AQUAFLOW_EDM_CALCULATEHOURLYAVERAGES>
     * a opmw:WorkflowTemplateProcess;
     * opmw:isStepOfTemplate <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_EDM>.
     */
    isStepOfTemplate?: Array<WorkflowTemplate> | null;
    /**
     * small description
     */
    description?: Array<string> | null;
    /**
     * Property that binds a workflow template process to the workflow template artifact that generates it.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     *
     * <http://www.opmw.org/export/resource/WorkflowTemplateProcess/AQUAFLOW_EDM_REAERATIONEDM>
     * a opmw:WorkflowTemplateProcess;
     * opmw:uses <http://www.opmw.org/export/resource/DataVariable/PARAMETERSFILE>.
     */
    uses?: Array<WorkflowTemplateArtifact> | null;
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

