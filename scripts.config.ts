import { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run main.ts",
      desc: "run my main.ts file",
    },
  },
};

export default config;