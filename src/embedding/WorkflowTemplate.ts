import { performQuery } from "../query";
import { WorkflowTemplate } from "../types/WorkflowTemplate";
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

const template = (WorkflowTemplate: WorkflowTemplate) => {
  const {
    label,
    pico,
    license,
    comment,
    id,
    hasRunID,
    executionStatus,
    overallStartTime,
    hasOriginalExecutionFile,
    type,
    contributor,
    overallEndTime,
    creator,
    correspondsToTemplate,
  } = WorkflowTemplate;
  return `
  This WorkflowTemplate (${$WorkflowTemplate.description}) is named ${label} and has a comment of ${comment}. It has an id of ${id} and has a run id of ${hasRunID}. It has an execution status of ${executionStatus}. It has an overall start time of ${overallStartTime}. It has an original execution file of ${hasOriginalExecutionFile}. It has a type of ${type}. It has a contributor of ${contributor}. It has an overall end time of ${overallEndTime}. It has a creator of ${creator}. It corresponds to a template of ${correspondsToTemplate}.
    `;
};
