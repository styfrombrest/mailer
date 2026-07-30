"use strict";

module.exports = {
  analyzeCommits: async (_pluginConfig, { commits, logger }) => {
    if (commits.length === 0) {
      return null;
    }

    logger.log(
      "Ensuring %d new commit(s) produce at least a patch release",
      commits.length,
    );

    return "patch";
  },
};
