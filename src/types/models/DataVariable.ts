/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowTemplate } from './WorkflowTemplate';
import type { WorkflowTemplateProcess } from './WorkflowTemplateProcess';

/**
 * A Data variable is a workflow template artifact that represents a variable in the workflow specification.
 *
 * Example:
 * @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
 * @prefix opmw: <http://www.opmw.org/ontology/> .
 *
 * <http://www.opmw.org/export/resource/DataVariable/AQUAFLOW_NTM_SUM_CORRDO>
 * a      opmw:WorkflowTemplateArtifact , opmw:DataVariable ;
 * rdfs:label "Data variable Sum_CorrDO" ;
 * opmw:hasDimensionality "0"^^xsd:int ;
 * opmw:isGeneratedBy              <http://www.opmw.org/export/resource/WorkflowTemplateProcess/AQUAFLOW_NTM_CREATEPLOTS> ;
 * opmw:template              <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_NTM> .
 */
export type DataVariable = {
    /**
     * Property that represents the dimensionality of the artifact: 0 is a single file, 1 for a collection, etc.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     *
     * <http://www.opmw.org/export/resource/DataVariable/AQUAFLOW_NTM_DAILYDATA>
     * a opmw:DataVariable, opmw:WorkflowTemplateArtifact;
     * opmw:hasDimensionality "1"^^xsd:int.
     *
     */
    hasDimensionality?: Array<number> | null;
    /**
     * Property that binds a workflow template artifact to the workflow template process that generates it.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     *
     * <http://www.opmw.org/export/resource/DataVariable/AQUAFLOW_EDM_REAERATIONPARAMS>
     * a opmw:DataVariable, opmw:WorkflowTemplateArtifact;
     * opmw:isGeneratedBy <http://www.opmw.org/export/resource/WorkflowTemplateProcess/AQUAFLOW_EDM_REAERATIONEDM>.
     *
     *
     */
    isGeneratedBy?: Array<WorkflowTemplateProcess> | null;
    /**
     * Property used to dessignate which workflow Data Variables belong to a workflow template.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     *
     * <http://www.opmw.org/export/page/resource/DataVariable/AQUAFLOW_EDM_HOURLYDATA>
     * a opmw:DataVariable;
     * opmw:isVariableOfTemplate <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_EDM>.
     */
    isVariableOfTemplate?: Array<WorkflowTemplate> | null;
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
};

