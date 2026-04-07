# Design System Document: The Clinical Atelier

## 1. Overview & Creative North Star
**The Creative North Star: "Precision Ethereal"**

In the medical space, "trust" is often mistranslated as "sterile and rigid." This design system rejects the clinical coldness of traditional healthcare interfaces in favor of a "Clinical Atelier" aesthetic. We combine the authoritative, editorial weight of **Newsreader** with the hyper-modern clarity of **Inter**, set against a backdrop of atmospheric depth. 

The goal is to move away from the "template" look. We achieve this through **Layered Transparency** and **Atmospheric Depth**. By utilizing glassmorphism and backdrop blurs, we create a UI that feels like light passing through high-grade medical glass—sophisticated, clean, and technologically advanced. The layout should embrace intentional asymmetry, allowing content to breathe and feel curated rather than forced into a strict, boxed-in grid.

---

## 2. Colors & Surface Philosophy

The palette is anchored in deep slates and navies (`primary_container`, `on_primary_fixed_variant`) contrasted against a surgical, bright foundation (`surface`).

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning content. Boundaries must be defined through:
1.  **Background Shifts:** Transitioning from `surface` to `surface_container_low`.
2.  **Tonal Transitions:** Using subtle color blocks to anchor information.
3.  **Negative Space:** Using the spacing scale to create "invisible" containers.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of glass sheets. Use the `surface_container` tiers to create depth:
*   **Base Layer:** `surface` (The foundation).
*   **Secondary Sections:** `surface_container_low` (Subtle inset areas).
*   **Interactive Cards:** `surface_container_lowest` (White-on-grey for maximum lift).
*   **System Overlays:** Use `surface_bright` with 80% opacity and a 20px backdrop blur for a premium glass effect.

### The "Glass & Gradient" Rule
To inject "soul" into the interface, avoid flat colors for primary actions. Use subtle linear gradients for CTAs, transitioning from `secondary` (#00668a) to `secondary_container` (#40c2fd) at a 135-degree angle. Floating panels should always utilize a backdrop blur (minimum 16px) to maintain a sense of environmental continuity.

---

## 3. Typography: The Editorial Authority

The juxtaposition of a transitional serif and a geometric sans-serif creates an immediate sense of "The Digital Journal."

*   **Display & Headlines (Newsreader):** Used for large-scale storytelling and patient names. It conveys wisdom and heritage.
    *   *Constraint:* Never use `display-lg` in all-caps. Keep tracking at -1% for headlines to ensure a tight, premium feel.
*   **Titles & Body (Inter):** Used for clinical data, labels, and instructional text. Inter provides the "utility" and legibility required for high-stakes medical environments.
    *   *Constraint:* Use `title-md` for high-importance data points. Ensure a line-height of 1.5 for `body-lg` to prevent visual fatigue.

---

## 4. Elevation & Depth

### The Layering Principle
Do not use shadows to create hierarchy. Use **Tonal Layering**. Place a `surface_container_lowest` (Pure White) card on a `surface_container` (Light Grey) background. The contrast in luminance creates a natural, soft lift that feels integrated into the environment.

### Ambient Shadows
If a floating element (like a modal) requires a shadow, it must be an **Ambient Shadow**:
*   **Blur:** 48px to 64px.
*   **Opacity:** 4% – 6%.
*   **Color:** Derived from `on_surface` (#191c1e). It should feel like a soft glow of occlusion rather than a "drop shadow."

### The "Ghost Border"
When structural containment is mandatory, use the **Ghost Border**:
*   Stroke: 1px.
*   Token: `outline_variant`.
*   Opacity: 15% - 20%.
*   *Purpose:* To provide a "whisper" of a boundary without interrupting the visual flow.

---

## 5. Components

### Buttons
*   **Primary:** A gradient fill (`secondary` to `secondary_container`) with `on_secondary` text. Roundedness: `xl` (1.5rem).
*   **Secondary:** `surface_container_highest` background with `on_surface` text. No border.
*   **Tertiary:** Transparent background, `secondary` text, with a subtle underline on hover.

### Glass Cards (Medical Records/Stats)
*   **Base:** `surface_container_lowest` at 70% opacity.
*   **Effect:** 24px Backdrop Blur.
*   **Border:** Ghost Border (15% `outline_variant`).
*   **Corner:** `xl` (1.5rem) as per the `ROUND_SIXTEEN` directive.

### Input Fields
*   **Idle:** `surface_container_low` fill, no border.
*   **Active:** `surface_container_lowest` fill, 1px `secondary` border.
*   **Error:** `error_container` fill with `error` text labels.

### Patient Timeline (Additional Component)
Instead of a vertical line, use a series of staggered `surface_container_high` blocks with `Newsreader` dates. This avoids "standard" UI patterns and feels more like an editorial layout.

---

## 6. Do's and Don'ts

### Do
*   **Do** use `Newsreader` for any text over 24px to establish authority.
*   **Do** lean into `xl` (1.5rem) rounded corners for all large containers; it softens the medical experience.
*   **Do** use "vibrant accents" like `tertiary` (#7671ff) for health trends and positive indicators.

### Don't
*   **Don't** use 100% opaque black for text. Use `on_surface` (#191c1e) to keep the contrast "sophisticated" rather than "harsh."
*   **Don't** use dividers between list items. Use 16px - 24px of vertical white space to separate content.
*   **Don't** use hard-edged rectangles. Everything in this system follows the `xl` (1.5rem) or `full` roundedness scale to ensure a "human-centric" feel.