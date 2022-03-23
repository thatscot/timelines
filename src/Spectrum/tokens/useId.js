/*
 * Custom hook to generate IDs.
 *
 * Often compound components rely heavily on IDs, especially when WAI-ARIA usage
 * patterns require IDs to meet accessibility APIs.
 *
 * This hook can be used to auto generate IDs to facilitate WAI-ARIA.
 */

import * as React from "react";

export function canUseDOM() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

let id = 0;
const genId = () => ++id;

function useId(idFromProps) {
  const initialId = idFromProps || genId();

  const [id, setId] = React.useState(initialId);

  React.useEffect(() => {
    if (id === null) {
      setId(genId());
    }
  }, [id]);

  return id != null ? String(id) : undefined;
}

export { useId };
