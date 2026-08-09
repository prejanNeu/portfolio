"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CopyCodeInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    const pres = document.querySelectorAll(".blog-content pre");
    pres.forEach((pre) => {
      // Check if already wrapped
      if (pre.parentElement?.classList.contains("code-block-wrapper")) return;
      
      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper";
      
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      
      const button = document.createElement("button");
      button.className = "copy-code-btn";
      button.textContent = "Copy";
      button.type = "button";
      
      button.addEventListener("click", async () => {
        const codeText = pre.querySelector("code")?.textContent || pre.textContent || "";
        try {
          await navigator.clipboard.writeText(codeText);
          button.textContent = "Copied!";
          setTimeout(() => {
            button.textContent = "Copy";
          }, 2000);
        } catch (err) {
          console.error("Failed to copy text: ", err);
          button.textContent = "Error";
        }
      });
      
      wrapper.appendChild(button);
    });
  }, [pathname]);

  return null;
}
