/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowExecutionAccount = {
  description: `A workflow execution account represents the execution from the perspective of the system.`,
  properties: {
    overallEndTime: {
      type: "array",
      contains: {
        type: "string",
        format: "date-time",
      },
      isNullable: true,
    },
    hasStatus: {
      type: "array",
      contains: {
        type: "string",
      },
      isNullable: true,
    },
    hasOriginalLogFile: {
      type: "array",
      contains: {
        type: "string",
      },
      isNullable: true,
    },
    executedInWorkflowSystem: {
      type: "array",
      contains: {
        type: "Agent",
      },
      isNullable: true,
    },
    overallStartTime: {
      type: "array",
      contains: {
        type: "string",
        format: "date-time",
      },
      isNullable: true,
    },
    description: {
      type: "array",
      contains: {
        type: "string",
      },
      isNullable: true,
    },
    hasExecutionDiagram: {
      type: "array",
      contains: {
        type: "string",
      },
      isNullable: true,
    },
    id: {
      type: "string",
      description: `identifier`,
    },
    label: {
      type: "array",
      contains: {
        type: "string",
      },
      isNullable: true,
    },
    correspondsToTemplate: {
      type: "array",
      contains: {
        type: "WorkflowTemplate",
      },
      isNullable: true,
    },
    type: {
      type: "array",
      contains: {
        type: "string",
      },
      isNullable: true,
    },
  },
} as const;
