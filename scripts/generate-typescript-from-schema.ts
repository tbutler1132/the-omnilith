import fs from "fs";
import path from "path";

const SCHEMA_DIR = path.resolve("src/schemas/semantic");
const OUTPUT_DIR = path.resolve("src/types");

type FieldType =
  | "string"
  | "number"
  | "boolean"
  | "datetime"
  | "reference"
  | "reference[]"
  | "string[]";

interface FieldDefinition {
  name: string;
  type: FieldType;
  target?: string;
  optional?: boolean;
  description?: string;
  prompt?: string;
  allowedValues?: string[];
}

interface SemanticSchema {
  entity: string;
  description?: string;
  fields: FieldDefinition[];
}

function resolveTsType(field: FieldDefinition): string {
  const typeMap: Record<FieldType, string> = {
    string: "string",
    number: "number",
    boolean: "boolean",
    datetime: "string",
    "string[]": "string[]",
    reference: "string",
    "reference[]": "string[]",
  };

  return typeMap[field.type] || "any";
}

function generateInterface(schema: SemanticSchema): string {
  const lines = [`export interface ${schema.entity} {`];

  for (const field of schema.fields) {
    const name = field.name;
    const type = resolveTsType(field);
    const optional = field.optional ? "?" : "";
    lines.push(`  ${name}${optional}: ${type};`);
  }

  lines.push("}");
  return lines.join("\n");
}

function main() {
  const files = fs.readdirSync(SCHEMA_DIR);

  files.forEach((file) => {
    const fullPath = path.join(SCHEMA_DIR, file);
    const schema = JSON.parse(fs.readFileSync(fullPath, "utf-8"));
    const tsInterface = generateInterface(schema);
    const outputFile = path.join(
      OUTPUT_DIR,
      `${schema.entity.toLowerCase()}.ts`
    );
    fs.writeFileSync(outputFile, tsInterface);
    console.log(`✅ Generated ${outputFile}`);
  });
}

main();
