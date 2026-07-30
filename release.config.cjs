"use strict";

module.exports = {
  branches: ["master"],
  tagFormat: "v${version}",
  plugins: [
    "@semantic-release/commit-analyzer",
    "./scripts/semantic-release-always-patch.cjs",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
