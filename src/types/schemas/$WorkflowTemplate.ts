/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowTemplate = {
  description: `A workflow template represents the design of the workflow. In such design, the different steps and inputs don't have to be bound to a specific tool or dataset. It is a generic view of the workflow, which is instantiated in each execution.
    .`,
  properties: {
    hasTemplateDiagram: {
      type: "array",
      contains: {
        type: "string",
      },
      isNullable: true,
    },
    hasDocumentation: {
      type: "array",
      contains: {
        type: "any-of",
        contains: [
          {
            type: "string",
            format: "uri",
          },
          {
            type: "string",
          },
        ],
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
    hasNativeSystemTemplate: {
      type: "array",
      contains: {
        type: "string",
      },
      isNullable: true,
    },
    createdInWorkflowSystem: {
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
    type: {
      type: "array",
      contains: {
        type: "string",
      },
      isNullable: true,
    },
  },
} as const;
