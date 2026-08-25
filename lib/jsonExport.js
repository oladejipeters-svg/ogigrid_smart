// Builds the portable export envelope defined in Section 8.1 of the design
// documentation: schemaVersion + exportedAt at the top level, one entity
// name, and the records exactly as stored (stable UUIDs, ISO timestamps,
// explicit status enum) so a future Supabase/Postgres import can interpret
// them without guessing field meaning.
const SCHEMA_VERSION = "1.0";

export function buildExportEnvelope(entity, records) {
  return {
    schemaVersion: SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    entity,
    recordCount: records.length,
    records,
  };
}
