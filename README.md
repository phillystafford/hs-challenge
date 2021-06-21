# HubSpot Web Team Exercise - Instructions

Welcome to the HubSpot Web Team's coding exercise 👋

Make sure you read these instructions carefully before you start. If you have any questions please reach out to your recruiting specialist.

The goal of this exercise is to create a simple app that;

- builds and compiles your code locally
- can be viewed at `localhost` using a local web server
- meets the requirements for the 2 exercises outlined in the `Exercises` section below.

If you have any comments or feedback please include it in the `submission.md` file. This is your chance to tell us what you thought about the exercise and any ideas or issues you may have had. It's a good way for us to get to know you and your process. We want to hear from you!

*Happy coding and good luck!*

<br />

---

<br />

## Setup

1. Clone or download this repository (please do not fork it).

2. Install [node.js](https://nodejs.org/en/download/), and then run `npm install` in your project directory. We've included some recommended packages in `package.json` for you to use, but feel free to add or remove packages as needed.

3. By default, the project uses [Parcel](https://parceljs.org/) - a bundler that includes live reloading and a local dev server ready for you to use. Run `npm run start` to start the local dev server and you're good to go.

**Note** - you're free to replace `Parcel` with your preferred bundler (e.g. Webpack, Gulp). The only requirement we ask is that running `npm install` from the command line compiles your project and running `npm run start` from the command line starts a local server where we can view your project at `localhost`.

**Bonus Points**: if you add anything that improves the dev experience, e.g. unit tests, linting, etc.

<br />

---

<br />

## Exercises

This assessment consists of 2 exercises, outlined below.

Each exercise has `requirements` and `bonus points` listed. You should focus on the requirements, and only consider the bonus points if you have completed the requirements.

You won't be penalized for skipping the bonus tasks, but please bear in mind that this assessment is your chance to showcase your skills and demonstrate what you can do, so we recommend that you put in as much effort as possible.

Also, the bonus tasks listed are just examples, feel free to add anything you think might improve the app. Try to imagine the app will be used by real people, and put a focus on a good user experience.

<br />

---

### **Exercise 1 - Testimonial Block**

The DOM structure for the following image has been included in `./src/views/index.html`.

Using **CSS only**, style the provided HTML to match the design in the below image as closely as possible.

![exercise 1](https://cdn2.hubspot.net/hubfs/53/web_team/web-team-test/exercise-1.png)

**Requirements:**

- do not modify the DOM structure provided.
- do not use any CSS frameworks (e.g. **Bootstrap**).
- the design must be responsive - use whatever number of breakpoints you think are necessary. You're free to choose whatever breakpoint values you think work best.

**Bonus Points:**

- write neat, modular code.
- use a pre-processor like **SASS** or
**SCSS**.
- use variables/mixins where appropriate.

---

### **Exercise 2 - Filterable Content**

Create the following interface using HTML, CSS & Javascript:

![exercise 2](./exercise-2.gif)

Close up of dropdown:

![exercise 2 - dropdown](https://cdn2.hubspot.net/hubfs/53/web_team/web-team-test/dropdown.png)

**Requirements:**

- all of the metadata and images in the mockup can be retrieved from this [endpoint](https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json) in `JSON` format. You must use this api to retrieve the data.
- the grid items should be sorted alphabetically by `Title` by default.
- the `Movies` / `Books` radio buttons should be cleared by default, but once selected can only be toggled between one another. They should be cleared by the `CLEAR FILTERS` button.
- the `GENRE` / `YEAR` dropdowns should match the mockup. If multiple check-boxes are checked, items from **all** checked categories should appear. E.g. if `action` and `comedy` are both selected, the list should show items with **either** of those tags.
- `CLEAR FILTERS` should clear all filters and return the list to it's original default state.
- The `search` field should filter by `Title`. It should be case insensitive.
- write clean, reusable, DRY code.
- the design must be responsive - use whatever number of breakpoints you think are necessary. You're free to choose whatever breakpoint values you think work best.
- do not use CSS frameworks (e.g. Bootstrap). You can (and we encourage you to) use pre-processors like SASS or SCSS.
- Have fun! If you get stuck don't worry, just do as much as you can.

**Bonus Points:**

- Use modern JavaScript (ES6+), but be wary of browser support (see the **FAQ** section for a list of browsers we'll check support for).
- Use a Javascript framework, e.g. React, Angular, Vue etc.
- Use linting/prettify for neater code.
- Add fuzzy search to the search field.
- Anything that improves the experience for the user.

**Note** - if you have any issue retrieving the data from the endpoint, we've included the JSON data locally in `/src/js/data/data.json`. If you end up using this instead of the API, please explain why in the `submission.md` file.

<br />

---

<br />

## How to Submit

Fill out the `submission.md` file before submitting. If you deviated from the instructions or have any feedback, that's the place to put it!

 Once complete, email either `(a)` **a zip of your work or** `(b)` **a link to your GitHub repository** to your recruiting specialist so they can forward it to the web team.

**Note** - if you're going to host your project online, kudos to you! Please include that link in your submission - but don't forget to provide the zip/repository link so that we can take a look at your code.

<br />

---

<br />

## FAQs

### **When is the assessment due?**

Please submit your exercise within four (4) days of receiving it. If you need extra time please reach out to your recruiting specialist.

### **Which browsers should I support?**

We'll look for compatibility with the following browsers:

- **Google Chrome** (latest version)
- **Apple Safari** (latest version)
- **Mozilla Firefox** (latest version)
- **Microsoft Edge** (latest version)

### **What color values should I use?**

The exact color values don't matter; just try to get as close to the mockup as you can. You could also use a Chrome extension such as <a href="https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en" target="_blank">this color-picker</a>.

### **Should I create a new page for each exercise?**

No, please use a single page for all exercises. Please use the provided blue headers to separate the exercises.

### **I'm running out of time, may I skip one of the exercises?**

Although we expect you to finish all of the exercises, we understand that life happens. If you aren't able to finish on time, focus on `Exercise 2` and try to start on the other exercise. Then give us some insight as to what you would have done in the `submission.md` file.
