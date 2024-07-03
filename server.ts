import Server from "lume/core/server.ts";
import redirects from "lume/middlewares/redirects.ts";
import REDIRECTS from "./_site/_redirects.json" with { type: "json" };

const server = new Server({
  port: 8000,
  root: "_site",
});

server.use(redirects({
  redirects: {
    ...REDIRECTS,
    "/api/": "/api/deno/",
  },
}));

server.start();

console.log("Listening on http://localhost:8000");
