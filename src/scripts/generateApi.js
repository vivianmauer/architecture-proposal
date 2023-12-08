const config = {
  schemaFile: 'https://api.dev.cdaxforex.com/docs-json',
  apiFile: './baseApi.ts',
  apiImport: 'baseApi',
  outputFile: 'index.ts',
  exportName: 'apiSlice',
  hooks: true,
  tag: true,
};

module.exports = config