import * as reltab from "../src/reltab";

test("t0 - basic table query rep", () => {
  const q0 = reltab.tableQuery("barttest");
  expect(q0).toEqual({
    _rep: {
      operator: "table",
      tableName: "barttest",
    },
    expType: "QueryExp",
  });
});
