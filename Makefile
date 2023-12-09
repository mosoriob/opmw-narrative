generate-schema:
	mkdir -p src/types
	npx openapi-typescript-codegen -i openapi.yaml -o src/types --exportSchemas true