export * from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";

// temporary workaround until URLPattern is defined
declare global {
  // deno-lint-ignore no-explicit-any no-var
  var URLPattern: any;
}
