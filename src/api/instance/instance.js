// @flow
import {type CredrankInput, type CredrankOutput} from "../credrank";
import {CredGraph} from "../../core/credrank/credGraph";

/**
  Simple read/write interface for inputs and outputs of the main SourceCred API.
 */
export interface ReadOnlyInstance {
  /** Reads inputs required to run CredRank. */
  readCredrankInput(): Promise<CredrankInput>;

  /** Reads a cred graph generated by a previous run of CredRank. */
  readCredGraph(): Promise<CredGraph>;
}

export interface Instance extends ReadOnlyInstance {
  /** Writes output after running CredRank. */
  writeCredrankOutput(credrankOutput: CredrankOutput): Promise<void>;
}
