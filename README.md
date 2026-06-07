# Color By Answer

An interactive educational web application where students solve exercises to progressively color SVG illustrations. The project is designed as a reusable activity engine, allowing educators to create new learning activities by simply replacing SVG drawings and JSON configuration files.

## Features

* Interactive SVG illustrations
* Math-based learning activities
* Progressive coloring when answers are correct
* Reusable activity structure
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

1. The application loads an SVG illustration.
2. A corresponding JSON file defines:

   * Exercises
   * Correct answers
   * Fill colors
3. Students click on a shape.
4. An exercise is displayed.
5. If the answer is correct, the shape is colored.
6. The activity is completed when all shapes are colored.

## Example JSON Configuration

```json
{
  "sol": {
    "operacion": "760 / 19",
    "resultado": 40,
    "color": "#FFD700"
  }
}
```

## Creating a New Activity

1. Create a new SVG illustration.
2. Assign unique IDs to the SVG elements.
3. Create a JSON file with the same IDs.
4. Define exercises, answers, and colors.
5. Place both files inside the `actividades` folder.

No changes to the application code are required.

## License

This project is available for educational and personal use.
