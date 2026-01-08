// Utility functions for the portfolio

export function formatDate(date) {
  return new Date(date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
  });
}

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

