import { CssIcon, GoIcon, HtmlIcon, JavascriptIcon, KotlinIcon, PhpIcon } from "../assets/icons";

export const bannerWords = [
    "Web Development",
    "Python",
    "ReactJS",
    "Angular",
    "Spring Boot",
]

export const bannerCode = `def greet(name):
    print(f'Hello, {name}!')

greet('World')

const greeting = (name) => {
  console.log(\`Hello, ${name}!\`);
}

greeting('World');

<div>
  <h1>Welcome to my website</h1>
  <p>This is a paragraph</p>
</div>

div {
  background-color: #f5f5f5;
  border: 1px solid black;
  padding: 10px;
}`;

export const portfolioProjects = [
    {
        title: 'Kotline-SimpleOOPConcept',
        time: '3',
        icons: [KotlinIcon]
    },
    {
        title: 'Go-MVVM Architecture',
        time: '5',
        icons: [GoIcon]
    },
    {
      title: 'PhpHackathon-Term',
      time: '15',
      icons: [PhpIcon]
    },
    {
        title: 'WebHacktoberText-2023',
        time: '6',
        icons: [JavascriptIcon, HtmlIcon, CssIcon]
    }
]

export const learnCodeSteps = [
  "Interactive, hands-on learning",
  "Step-by-step tutorials",
  "Designed for all levels"
]

export const learnCodeBlock = `<!doctype html>

<html>

<body>

<h4 style="color:red; text-align:center;">This is a heading</h4>

<p style="color:blue; text-align:center;">This is a paragraph</p>

</body>

</html>`;