import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

test("contains essential identity, navigation, and contact content", () => {
  assert.match(html, /Shaimaa Almously/);
  assert.match(html, /AI Engineer/);
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /mailto:shaimaaalmously054@gmail\.com/);
  assert.match(html, /href="\.\/cv\.pdf"/);
});

test("uses only verified project links from the supplied CV", () => {
  const expectedLinks = [
    "account-intelligence-radar",
    "Kindergarten-Behavior-Analysis-DIFEM",
    "Arabic-Dialect-Identification",
    "Daily-Bicycle-Trips-Analysis",
    "youtube.com/watch?v=B343RCh0kuw",
    "youtube.com/watch?v=v1hfIq8ahK4",
  ];

  for (const link of expectedLinks) {
    assert.match(html, new RegExp(link.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("production build includes the bundled CV", async () => {
  await access(new URL("../dist/cv.pdf", import.meta.url));
});
