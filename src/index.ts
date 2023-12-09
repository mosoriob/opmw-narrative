import { get } from "http";
import rdfDereferencer from "rdf-dereference";
import { storeStream } from "rdf-store-stream";

(async () => {
  const { data: stream } = await rdfDereferencer.dereference(
    "https://opmw.org/exportTest/resource/WorkflowExecutionAccount/SpectralAnalysis-2edd5b01-efae-483b-8fc3-c8a8794f18bd"
  );
  const store = await storeStream(stream);
  console.log(store);
})();
