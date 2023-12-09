/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowTemplate } from './WorkflowTemplate';
import type { WorkflowTemplateProcess } from './WorkflowTemplateProcess';

/**
 * An parameter variable represents a description of an input parameter of a process. Parameter variables can only be used by process.
 *
 * Example:
 * @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
 * @prefix opmw: <http://www.opmw.org/ontology/> .
 *
 * <http://www.opmw.org/export/resource/ParameterVariable/AQUAFLOW_NTM_LATITUDE>
 * a      opmw:/WorkflowTemplateArtifact , opmw:ParameterVariable ;
 * rdfs:label "Parameter variable Latitude" ;
 * opmw:template              <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_NTM> .
 */
export type ParameterVariable = {
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
     * Property used to dessignate which workflow Parameter Variables belong to a workflow template.
     *
     * Example:
     * @prefix opmw: <http://www.opmw.org/ontology/> .
     *
     * <http://www.opmw.org/export/resource/ParameterVariable/AQUAFLOW_EDM_DATE>
     * a opmw:ParameterVariable;
     * opmw:isParameterOfTemplate <http://www.opmw.org/export/resource/WorkflowTemplate/AQUAFLOW_EDM>.
     */
    isParameterOfTemplate?: Array<WorkflowTemplate> | null;
    /**
     * type of the resource
     */
    type?: Array<string> | null;
};

