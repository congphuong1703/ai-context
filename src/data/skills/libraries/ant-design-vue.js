/** Ant Design Vue agent skill — Universal Skill Standard (7 parts). */
export const SKILL_ANT_DESIGN_VUE = {
  metadata: {
    name: "Ant Design Vue",
    version: "1.0",
    author: "ai-context",
    tags: ["antd-vue", "vue", "ui"],
  },
  trigger:
    "When using Ant Design Vue components. Keywords: a-form, a-table, a-modal, ConfigProvider.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use a-config-provider at the app root for all theme token overrides.",
    "Wrap every form input in a-form-item with the name prop for validation binding.",
    "Define a-table columns as a computed ref or reactive array — not inline in template.",
    "Use a-space for all element spacing — avoid margin/padding utilities between components.",
    "Bind modal visibility with v-model:open — not manual show/hide methods.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not override antd CSS classes in component scoped styles.",
    "Do not use a-form-item without the name prop when validation is needed.",
    "Do not define table columns as inline template literals — extract to setup().",
  ],
  examples: [
    {
      input: "User wants a search form with a results table.",
      output:
        '<a-form :model="form" @finish="onSearch" layout="inline">\n  <a-form-item name="keyword" label="Search">\n    <a-input v-model:value="form.keyword" />\n  </a-form-item>\n  <a-button html-type="submit" type="primary">Search</a-button>\n</a-form>\n<a-table :columns="columns" :data-source="results" :loading="loading" row-key="id" />',
    },
  ],
};
