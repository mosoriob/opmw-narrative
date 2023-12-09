import { get } from "http";
import rdfDereferencer from "rdf-dereference";
import { storeStream } from "rdf-store-stream";
import { DataFactory } from "rdf-data-factory";
import { create as workflowExecutionAccountCreate } from "./embedding/WorkflowExecutionAccount";
(async () => {
  const workflowExecutionAccountUrl =
    "https://opmw.org/exportTest/resource/WorkflowExecutionAccount/SpectralAnalysis-2edd5b01-efae-483b-8fc3-c8a8794f18bd";
  const text = await workflowExecutionAccountCreate(
    workflowExecutionAccountUrl
  );
  console.log(text);
})();
