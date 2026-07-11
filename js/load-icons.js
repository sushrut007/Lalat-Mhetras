document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-icon]").forEach(async (el) => {
        const iconName = el.getAttribute("data-icon");
        try {
            const res = await fetch(`images/icons/${iconName}.svg`);
            if (res.ok) {
                const svgText = await res.text();
                el.innerHTML = svgText;
                
                // Keep the icon class for sizing and styling if any
                const svgElement = el.querySelector("svg");
                if (svgElement) {
                    svgElement.classList.add("icon-svg");
                }
            }
        } catch (err) {
            console.error(`Error loading icon: ${iconName}`, err);
        }
    });
});
