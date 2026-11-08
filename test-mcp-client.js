import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
  console.log("Starting MCP client connecting to dist/mcp.js...");
  const transport = new StdioClientTransport({
    command: "node",
    args: ["dist/mcp.js"],
  });

  const client = new Client(
    { name: "bento-gallery-test-client", version: "1.0.0" },
    { capabilities: {} }
  );

  await client.connect(transport);
  console.log("Connected to Bento Gallery MCP server!\n");

  console.log("1. Testing tools/list...");
  const tools = await client.listTools();
  console.log("Available tools count:", tools.tools.length);
  const toolNames = tools.tools.map((t) => t.name);
  console.log("Tool names:", toolNames);
  if (!toolNames.includes("get_bento_code") || !toolNames.includes("list_sources")) {
    throw new Error("Missing expected tools!");
  }

  console.log("\n2. Calling list_categories...");
  const resCat = await client.callTool({ name: "list_categories", arguments: {} });
  const parsedCat = JSON.parse(resCat.content[0].text);
  console.log("Categories found:", parsedCat.map((c) => `${c.id} (${c.count})`).join(", "));

  console.log("\n3. Calling list_sources (Component Libraries)...");
  const resSources = await client.callTool({ name: "list_sources", arguments: {} });
  const parsedSources = JSON.parse(resSources.content[0].text);
  console.log("Component Libraries found:", parsedSources.map((s) => `${s.name} [${s.id}]`).join(", "));

  console.log("\n4. Calling list_grids (category: 'spotlight-shaders')...");
  const resList = await client.callTool({
    name: "list_grids",
    arguments: { category: "spotlight-shaders" },
  });
  const parsedList = JSON.parse(resList.content[0].text);
  console.log(`Spotlight & Shader grids (${parsedList.total}):`, parsedList.grids.map((g) => g.slug).join(", "));

  console.log("\n5. Calling search_grids ('particles')...");
  const resSearch = await client.callTool({
    name: "search_grids",
    arguments: { query: "particles" },
  });
  const parsedSearch = JSON.parse(resSearch.content[0].text);
  console.log("Search results for 'particles':", parsedSearch.map((g) => `${g.slug} (${g.sourceName})`));

  console.log("\n6. Calling get_grid ('spell-spatial-tilt-bento')...");
  const resGrid = await client.callTool({
    name: "get_grid",
    arguments: { slug: "spell-spatial-tilt-bento" },
  });
  const parsedGrid = JSON.parse(resGrid.content[0].text);
  console.log("Spell UI bento title:", parsedGrid.title);
  console.log("Component source:", parsedGrid.sourceName);
  console.log("Tiles count:", parsedGrid.tilesSummary.length);

  console.log("\n7. Calling get_bento_code ('cult-ui-shader-bento')...");
  const resCode = await client.callTool({
    name: "get_bento_code",
    arguments: { slug: "cult-ui-shader-bento" },
  });
  const codeText = resCode.content[0].text;
  console.log("Code length:", codeText.length, "bytes");
  console.log("Code snippet preview:\n", codeText.split("\n").slice(0, 8).join("\n"));

  console.log("\nAll 7 test suites passed successfully! 🍱✨");
  await client.close();
  process.exit(0);
}

main().catch((err) => {
  console.error("Test error:", err);
  process.exit(1);
});
