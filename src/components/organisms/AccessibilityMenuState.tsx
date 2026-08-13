import { useEffect } from "react";

const OPEN_CLASS = "a11y-menu-open";

const AccessibilityMenuState: React.FC = () => {
  useEffect(() => {
    const syncMenuState = () => {
      const isOpen = !!document.querySelector(".left-bar");
      document.body.classList.toggle(OPEN_CLASS, isOpen);
    };

    const observer = new MutationObserver(() => {
      syncMenuState();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    syncMenuState();

    return () => {
      observer.disconnect();
      document.body.classList.remove(OPEN_CLASS);
    };
  }, []);

  return null;
};

export default AccessibilityMenuState;
