import { Editor, rootCtx } from "@milkdown/core";
import { ReactEditor, useEditor } from "@milkdown/react";
import React from "react";

export const MilkdownEditor: React.FC = () => {
  const { editor } = useEditor((root) =>
    Editor.make().config((ctx) => {
      ctx.set(rootCtx, root);
    })
  );

  return <ReactEditor editor={editor} />;
};
