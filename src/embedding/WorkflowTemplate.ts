import { performQuery } from "../query";
import { WorkflowTemplate } from "../types";
import { $WorkflowTemplate } from "../types";

const query = async (id: string) => {
  const sparqlQuery = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX opmw: <https://www.opmw.org/ontology/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT ?id ?hasRunID ?executionStatus ?overallStartTime ?hasOriginalExecutionFile ?type ?contributor ?overallEndTime ?creator ?correspondsToTemplate ?label ?comment
WHERE {
  GRAPH ?g {
    ?id rdf:type opmw:WorkflowExecutionAccount ;
      OPTIONAL { ?id <https://www.opmw.org/ontology/hasRunID> ?hasRunID }
      OPTIONAL { ?id <https://www.opmw.org/ontology/executionStatus> ?executionStatus }
      OPTIONAL { ?id <https://www.opmw.org/ontology/overallStartTime> ?overallStartTime }
      OPTIONAL { ?id <https://www.opmw.org/ontology/hasOriginalExecutionFile> ?hasOriginalExecutionFile }
      OPTIONAL { ?id <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> ?type }
      OPTIONAL {
        ?id <http://purl.org/dc/terms/contributor> ?contributorResource .
        ?contributorResource rdfs:label ?contributor
      }
      OPTIONAL { ?id <https://www.opmw.org/ontology/overallEndTime> ?overallEndTime }
      OPTIONAL { ?id <http://purl.org/dc/terms/creator> ?creator }
      OPTIONAL { ?id <https://www.opmw.org/ontology/correspondsToTemplate> ?correspondsToTemplate }
      OPTIONAL { ?id <http://www.w3.org/2000/01/rdf-schema#label> ?label }
      OPTIONAL { ?id <http://www.w3.org/2000/01/rdf-schema#comment> ?comment }

    FILTER (?id = <${id}>)
  }
}
    `;

  const bindings = await performQuery(
    sparqlQuery,
    "https://endpoint.mint.isi.edu/provenance"
  );
  return bindings;
};

const template = (workflowTemplate: WorkflowTemplate) => {
  const {
    hasTemplateDiagram,
    hasDocumentation,
    description,
    hasNativeSystemTemplate,
    createdInWorkflowSystem,
    id,
    label,
    type,
  } = workflowTemplate;
  return `
  This WorkflowTemplate (${$WorkflowTemplate.description}) is named ${label} and has id ${id}. The description is ${description}. It was created in ${createdInWorkflowSystem} and has native system template ${hasNativeSystemTemplate}. It has documentation ${hasDocumentation} and template diagram ${hasTemplateDiagram}.
    `;
};
