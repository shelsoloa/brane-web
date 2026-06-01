import { visit } from "unist-util-visit";
import { createLowlight, all } from "lowlight";
import type { Root, Element, Text } from "hast";

const lowlight = createLowlight(all);

export function rehypeInlineHighlight() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, _index, parent) => {
      if (
        node.tagName !== "code" ||
        !parent ||
        (parent as Element).tagName === "pre"
      )
        return;

      const textNode = node.children[0];
      if (!textNode || textNode.type !== "text") return;

      const text = (textNode as Text).value;
      if (!text.trim()) return;

      const result = lowlight.highlightAuto(text);
      node.children = result.children as Element["children"];
      node.properties = { ...node.properties, className: ["hljs"] };
    });
  };
}
