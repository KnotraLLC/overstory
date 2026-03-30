/**
 * lib.ts — Programmatic library entry point for @drova/overstory.
 *
 * Re-exports the internal modules that Drova Studio's orchestrator-js
 * sidecar needs as a library. The main CLI entry (src/index.ts) is only
 * callable via the `overstory` / `ov` bin and is not suitable for
 * programmatic use.
 *
 * Consumers import from "@drova/overstory" which resolves to this file
 * via the `exports["."]` field in package.json.
 */

// ─── Runtime registry ────────────────────────────────────────────────────────
export { getAllRuntimes, getRuntime } from "./runtimes/registry.ts";
export type { AgentRuntime, SpawnOpts, ReadyState, AgentEvent, PrintCommandOpts } from "./runtimes/types.ts";

// ─── Worktree manager ────────────────────────────────────────────────────────
export {
  createWorktree,
  rollbackWorktree,
  listWorktrees,
  isBranchMerged,
  removeWorktree,
  preserveSeedsChanges,
} from "./worktree/manager.ts";

// ─── Merge resolver ──────────────────────────────────────────────────────────
export { createMergeResolver } from "./merge/resolver.ts";
export type { MergeResolver } from "./merge/resolver.ts";

// ─── Merge queue ─────────────────────────────────────────────────────────────
export { createMergeQueue } from "./merge/queue.ts";
export type { MergeQueue } from "./merge/queue.ts";

// ─── Mail system ─────────────────────────────────────────────────────────────
export { createMailStore } from "./mail/store.ts";
export type { MailStore } from "./mail/store.ts";
export { createMailClient, parsePayload } from "./mail/client.ts";
export type { MailClient } from "./mail/client.ts";
export { isGroupAddress, resolveGroupAddress } from "./mail/broadcast.ts";

// ─── Inspect data aggregation ───────────────────────────────────────────────
export { gatherInspectData } from "./commands/inspect.ts";
export type { InspectData } from "./commands/inspect.ts";

// ─── Core types ──────────────────────────────────────────────────────────────
export type {
  OverstoryConfig,
  Capability,
  AgentState,
  AgentSession,
  AgentIdentity,
  MailProtocolType,
  MailMessage,
  ModelAlias,
  ModelRef,
} from "./types.ts";
