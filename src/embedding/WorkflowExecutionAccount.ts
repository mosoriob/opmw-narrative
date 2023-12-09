import { performQuery } from "../query";
import { Agent, WorkflowTemplate } from "../types";
import { WorkflowExecutionAccount } from "../types/models/WorkflowExecutionAccount";
import { $WorkflowExecutionAccount } from "../types/schemas/$WorkflowExecutionAccount";

const create = async (uri: string) => {
  const bindings = await query(uri);
  if (bindings.length > 0) {
    const binding = bindings[0];
    console.log(bindings.toString());

    const workflowTemplate: WorkflowTemplate = {
      id: binding.get("correspondsToTemplate")?.value,
    };

    const workflowExecutionAccount = {
      comment: binding.get("comment")?.value,
      contributor: binding.get("contributor")?.value,
      correspondsToTemplate: workflowTemplate,
      creator: binding.get("creator")?.value,
      hasOriginalLogFile: binding.get("hasOriginalExecutionFile")?.value,
      hasRunID: binding.get("hasRunID")?.value,
      hasStatus: binding.get("executionStatus")?.value,
      id: binding.get("id")?.value,
      label: binding.get("label")?.value,
      overallStartTime: binding.get("overallStartTime")?.value,
      overallEndTime: binding.get("overallEndTime")?.value,
      type: binding.get("type")?.value,
    };
    return template(workflowExecutionAccount);
  }
};
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

const template = (workflowExecutionAccount: WorkflowExecutionAccount) => {
  const {
    id,
    label,
    description,
    hasStatus,
    hasOriginalLogFile,
    executedInWorkflowSystem,
    overallStartTime,
    hasExecutionDiagram,
    correspondsToTemplate,
  } = workflowExecutionAccount;
  console.log(workflowExecutionAccount);
  return `This WorkflowExecutionAccount (${$WorkflowExecutionAccount.description}) is named ${label} and described as ${description} and has an id of ${id}. The state of this WorkflowExecutionAccount is ${hasStatus} and the log file is available ${hasOriginalLogFile}. The WorkflowExecutionAccount was executed in ${executedInWorkflowSystem} and started at ${overallStartTime}. The WorkflowExecutionAccount has a diagram available at ${hasExecutionDiagram}.  It was instantiated from the WorkflowTemplate ${correspondsToTemplate?.id} .`;
};

export { query, template, create };
