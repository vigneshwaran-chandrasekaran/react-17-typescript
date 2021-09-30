import { useEffect, useRef } from "react";

export default function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  /**
   * in the code if we don't want to set optional chaining ? means we want set
   * const inputRef = useRef<HTMLInputElement>(null!);
   * ! after null default value,
   * so inside useEffect
   * inputRef.current.focus();
   * without optional chaining
   */

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}
