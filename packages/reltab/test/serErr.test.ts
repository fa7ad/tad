import { serializeError, deserializeError } from "../src/remote/errorUtils";

test("basic error serialization", () => {
  const err = new Error("Badness");

  const s2 = JSON.stringify({ err: serializeError(err) });

  const jsonObj = JSON.parse(s2);
  const e2 = deserializeError(jsonObj.err);

  expect(e2).toBeInstanceOf(Error);
  expect(e2.message).toBe(err.message);
  expect(e2.stack).toBe(err.stack);
});