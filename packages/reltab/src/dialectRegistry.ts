import { SQLDialect } from "./dialect";
import { SQLiteDialect } from "./dialects/SQLiteDialect";
import { DuckDBDialect } from "./dialects/DuckDBDialect";
import { BigQueryDialect } from "./dialects/BigQueryDialect";
import { PrestoDialect } from "./dialects/PrestoDialect";
import { SnowflakeDialect } from "./dialects/SnowflakeDialect";

export const dialects: { [key: string]: SQLDialect } = {
  duckdb: DuckDBDialect,
  sqlite: SQLiteDialect
};

export { BigQueryDialect, PrestoDialect, SQLiteDialect, SnowflakeDialect, DuckDBDialect };
