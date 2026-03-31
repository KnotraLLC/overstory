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

// ─── Session store ──────────────────────────────────────────────────────────
export { createSessionStore } from "./sessions/store.ts";
export type { SessionStore } from "./sessions/store.ts";
export { createRunStore } from "./sessions/store.ts";

// ─── Event store ────────────────────────────────────────────────────────────
export { createEventStore } from "./events/store.ts";

// ─── Metrics store ──────────────────────────────────────────────────────────
export { createMetricsStore } from "./metrics/store.ts";
export type { MetricsStore } from "./metrics/store.ts";

// ─── Process management ─────────────────────────────────────────────────────
export { spawnHeadlessAgent } from "./worktree/process.ts";
export type { HeadlessProcess } from "./worktree/process.ts";
export { killProcessTree, killSession } from "./worktree/tmux.ts";

// ─── Inspect data aggregation ───────────────────────────────────────────────
export { gatherInspectData } from "./commands/inspect.ts";
export type { InspectData } from "./commands/inspect.ts";

// ─── Mulch client ─────────────────────────────────────────────────────────────
export { createMulchClient } from "./mulch/client.ts";
export type { MulchClient } from "./mulch/client.ts";

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
  Run,
  RunStore,
  EventStore,
  StoredEvent,
  SessionMetrics,
  TokenSnapshot,
} from "./types.ts";
