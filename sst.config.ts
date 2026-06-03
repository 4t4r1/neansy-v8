/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "Neansy-v8",
      removal: input?.stage === "production" ? "retain" : "remove",
      // protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("Neansy-v8-Bucket", {
      access: "public",
    });
    new sst.aws.Astro("Neansy-v8-Astro", {
      link: [bucket],
    });
  },
});
