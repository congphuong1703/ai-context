/** shadcn/ui agent skill — Universal Skill Standard (7 parts). */
export const SKILL_SHADCN = {
  metadata: {
    name: "shadcn/ui",
    version: "1.0",
    author: "ai-context",
    tags: ["shadcn", "react", "ui"],
  },
  trigger: "When using shadcn/ui components. Keywords: shadcn, Button, Dialog, Form, Sheet, Radix.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Install components individually with npx shadcn-ui add [component] — never manually copy.",
    "Extend components via the className prop and cn() utility — no direct source modification.",
    "Use cva() to define component variants when building on top of shadcn primitives.",
    "Compose complex components from shadcn primitives rather than nesting them deeply.",
    "Use FormField, FormItem, FormLabel, FormMessage from the Form component for all react-hook-form integration.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not modify files in the components/ui/ directory directly — copy and extend.",
    "Do not use raw Radix UI primitives when a shadcn wrapper already exists.",
    "Do not override component styles with CSS — use cn() with Tailwind utilities.",
    "Do not mix shadcn Form with bare HTML form elements — use the complete form composition.",
  ],
  examples: [
    {
      input: "User wants a dialog with a form inside.",
      output:
        '<Dialog open={open} onOpenChange={setOpen}>\n  <DialogContent>\n    <DialogHeader><DialogTitle>Edit Profile</DialogTitle></DialogHeader>\n    <Form {...form}>\n      <FormField control={form.control} name="username" render={({ field }) => (\n        <FormItem>\n          <FormLabel>Username</FormLabel>\n          <FormControl><Input {...field} /></FormControl>\n          <FormMessage />\n        </FormItem>\n      )} />\n    </Form>\n  </DialogContent>\n</Dialog>',
    },
  ],
};
