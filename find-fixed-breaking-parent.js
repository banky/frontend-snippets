/**
 * Fixed positioned elements don't behave like fixed
 * if there is a parent in the tree that has a transform.
 * This finds the parent element
 * Context: http://meyerweb.com/eric/thoughts/2011/09/12/un-fixing-fixed-elements-with-css-transforms/
 */

// Replace this with a relevant selector.
// If you use a tool that auto-generates classes,
// you can temporarily add an ID and select it
// with '#id'.
const selector = ".the-fixed-child";
function findCulprits(elem) {
  if (!elem) {
    throw new Error("Could not find element with that selector");
  }
  let parent = elem.parentElement;
  while (parent) {
    const { transform, willChange } = getComputedStyle(parent);
    if (transform !== "none" || willChange === "transform") {
      console.warn("🚨 Found a culprit! 🚨\n", parent, {
        transform,
        willChange,
      });
    }
    parent = parent.parentElement;
  }
}
findCulprits(document.querySelector(selector));
