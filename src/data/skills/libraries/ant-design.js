/** Ant Design agent skill — Universal Skill Standard (7 parts). */
export const SKILL_ANT_DESIGN = {
  metadata: {
    name: "Ant Design",
    version: "1.0",
    author: "ai-context",
    tags: ["antd", "react", "ui"],
  },
  trigger:
    "When using Ant Design components in React. Keywords: Form, Table, Modal, ConfigProvider.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Wrap the entire app in a single ConfigProvider for all theme token customization.",
    "Use Form.Item with the name prop on every field — required for validation binding.",
    "Define Table column configs as an external array outside JSX — not inline.",
    "Control Modal and Drawer with the open prop and state — no imperative .show().",
    "Use Space component for gaps between elements — avoid ad-hoc margin utilities.",
    "Import icons from @ant-design/icons — no inline SVGs for standard icons.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not override antd CSS classes directly — use ConfigProvider design tokens.",
    "Do not use Form without Form.Item name prop — validation will not work.",
    "Do not call Modal.confirm() imperatively when controlled state is feasible.",
    "Do not import antd components without tree-shaking: import Button from 'antd/es/button'.",
  ],
  examples: [
    {
      input: "User wants a login form with email and password validation.",
      output:
        '<Form form={form} onFinish={onSubmit} layout="vertical">\n  <Form.Item name="email" label="Email" rules={[{ required: true }, { type: \'email\' }]}>\n    <Input />\n  </Form.Item>\n  <Form.Item name="password" label="Password" rules={[{ required: true, min: 8 }]}>\n    <Input.Password />\n  </Form.Item>\n  <Button type="primary" htmlType="submit">Login</Button>\n</Form>',
    },
  ],
};
