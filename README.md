# Color By Answer

An interactive educational web application where students solve exercises to progressively complete SVG-based activities. The engine supports multiple activity types, including coloring illustrations and revealing hidden objects.

## Features

* Interactive SVG illustrations
* Math-based learning activities
* Multiple activity modes (`fill` and `reveal`)
* Progressive coloring when answers are correct
* Reusable JSON-driven activity engine
* Lightweight and easy to customize

## Technologies

* HTML5
* CSS3
* JavaScript 
* JSON
* SVG

## Project Structure

```text
color-by-answer/
│
├── index.html
├── style.css
├── script.js
│
└── actividades/
    ├── casa.svg
    ├── casa.json
    ├── sword.svg
    ├── sword.json
    └── ...
```

## How It Works

## How It Works

1. The application loads an SVG illustration.
2. A corresponding JSON file defines:
   * Activity type
   * Exercises
   * Correct answers
   * Colors or reveal targets
3. Students select an object.
4. An exercise is displayed.
5. If the answer is correct:
   * In `fill` mode, the SVG element is colored.
   * In `reveal` mode, a hidden colored object is revealed.
6. The activity is completed when all objects have been solved.

## Example JSON Configuration

```json
Fill Activity
{
  "tipo": "fill",
  "figuras": {
    "sun": {
      "operacion": "760 / 19",
      "resultado": 40,
      "color": "#FFD700"
    }
  }
}
Reveal Activity
{
  "tipo": "reveal",
  "figuras": {
    "wood": {
      "operacion": "935 / 55",
      "resultado": 17
    }
  }
}
```

## Creating a New Activity

1. Create a new SVG illustration.
2. Assign unique IDs to the SVG elements.
3. Create a JSON file with the same IDs.
4. Define exercises, answers, and colors.
5. Place both files inside the `actividades` folder.

## Reveal Activities

Reveal activities use two SVG elements for each object:
```html
Grayscale version
<image id="wood" />
Colored version
<image id="color_wood" display="none" />
```
## License

This project is available for educational and personal use.
