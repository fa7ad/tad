import * as sqlite3 from "sqlite3";
import * as reltab from "reltab";
import * as reltabSqlite from "../src/reltab-sqlite";
import log from "loglevel";
import _ from "lodash";

const importCsv = async (db: sqlite3.Database, path: string) => {
  const md = await reltabSqlite.fastImport(db, path);
};

async function main() {
  log.setLevel("info"); // use "debug" for even more verbosity
  const ctx = await reltab.getConnection({
    providerName: "sqlite",
    resourceId: ":memory:",
  });

  let testCtx = ctx as unknown as reltabSqlite.SqliteDriver;

  const db = testCtx.db;

  console.log("beforeAll -- starting imports");
  await importCsv(db, "test/support/sample.csv");
  console.log("beforeAll -- imported sample, now importing barttest");
  await importCsv(db, "test/support/barttest.csv");

  console.log("beforeAll: done with imports");
}

main();
