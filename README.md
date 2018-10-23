# HubSpot Web Team Exercise - Instructions

## Setup

1. Clone or download this repository (do not fork it).
2. Install [Node.js](https://nodejs.org/en/download/) and then run `npm install` on your project. We've included recommended packages in `package.json` for you to use, but feel free to add or remove any packages.
3. Set up a build tool (Gulp, WebPack, Grunt, etc.) to compile from the existing `/src` folder to a `/build` directory and run your site locally. If you prefer Gulp, we've included recommended tasks in `gulpfile.js` for you to use, but that file can be modified as much as you see fit.

If everything is set up properly, anyone should be able to fork your project, run `npm install`, and issue a start command (we recommend `npm start`) command from the command line to run your build tool and view your site from `localhost`.

**Spending too much time on step #3?** Skip it and focus on the exercises. When you submit your final assessment, please let us know why you skipped this build tool setup step in the `submission.md` file.

## Mockups

This code assessment is broken up into two exercises. All exercises should display on the same page.

### Mockup with collapsed filter

The mockup with all filters collapsed. See the section below for how the expanded filter dropdowns should appear.

<img src="https://cdn2.hubspot.net/hubfs/53/web_team/web-team-test/web-team-exercise_3.png" alt="Mockup" width="600" />

#### Mockup with expanded filter

Note the filter dropdown outlined in red.

<img src="https://cdn2.hubspot.net/hubfs/53/web_team/web-team-test/web-team-exercise-v2_expanded.png" alt="Mockup_Hover" width="600" />

## Requirements

1. Without adding or removing HTML elements, style each of the following modules to match the above mockup. Fonts have been provided for you and can be found in the accompanying `/src/views/partials/_fonts.ejs` file. Do not add or remove any of the HTML elements in the `/src/views/partials/_testimonial.ejs` or `/src/views/partials/_filterable-content.ejs` files. You may add attributes to the existing HTML elements, but don't add or remove any DOM elements, and don't edit a DOM element's tag name. You may add filters dynamically to the filterable content dropdowns; just don't touch the main HTML markup. Feel free to use CSS pseudoelements. All other files may be edited (e.g. `/src/views/pages/index.ejs`).
2. The page should be responsive. Use your best judgment for how narrow viewports should look.
3. Don't use any CSS frameworks (e.g. Bootstrap). You should use a preprocessor, such as Sass.
4. Focus on writing clean, reusable code.
5. While all the modules should be styled to match the mockup, some require some additional functionality:

   - **Exercise 1 - Filterable Content:**
     1. Use the provided `/src/js/data/data.json` file to generate filterable categories as well as the individual content elements within the `/src/views/partials/_filterable-content.ejs` HTML. The items should be alphabetized by title.
     2. **Dropdowns:** If multiple checkboxes are checked (e.g. _Mystery_ and _Drama_), items from **_both_** categories should display (e.g. all items tagged with either _Mystery_ or _Drama_).
     3. The `Clear Filters` functionality is mandatory.
   - **Exercise 2 - Testimonial:**
     1. When clicking `Tell Me More`, fetch text from an API of your choice and update the text within the quote to the left of `Tell Me More`. We recommend [the Random Quotes API](https://talaikis.com/api/quotes/random/), but there are other fun APIs like the [Chuck Norris jokes API](http://www.icndb.com/api/). We're flexible.

6. Have fun with it! If you get stuck, that's OK. Get as far as you can.
7. Before submitting, answer the questions in `submission.md`.

#### Bonus Points

Want an extra challenge? Add some pizzazz to your page. **Note:** These steps are optional, but encouraged. :star2:

1. Feeling particularly good? Use ES6, React, or Vue components.
2. Replace Gulp and use WebPack as your build tool.
3. Add a search field and functionality to the filter module (example in mockup).
4. Add some of your favorite node modules to the project, or modify your build tool with anything that strikes your fancy.

#### Grading

We recommend focusing on `Exercise 1 — Filterable Content` as it is graded more heavily. It's a good indicator of your attention to user experience and how you approach data puzzles. `Exercise 2 — Testimonial Block` is a more of a CSS challenge, so being visually precise while not touching the markup is key.

## Submission

Be sure to fill out the `submission.md` file before submitting. Once complete, email either a) a zip of your work or b) a link to your GitHub repository to your recruiting specialist so they can send to the team.

## FAQs

**Do I have to setup a build tool (Gulp, WebPack, Grunt, etc.)?**

The build tool setup is part of the exercise, so we strongly encourage you to complete this step. If you absolutely can't set it up in time, skip that step and focus on the exercises in plain HTML/CSS/JS. When you submit your final assessment, please let us know why you skipped this build tool setup step in the `submission.md` file.

**What browsers should I support?**

We'll look for compatibility in the following browsers:

1. Google Chrome (latest version)
2. Mozilla Firefox (latest version)
3. Microsoft Edge (latest version)

**I'm running out of time! May I skip one of the exercises?**

Although we expect you to finish all the exercises, life happens. If you aren't able to finish on time, focus on `Exercise 1 - Filterable Content` and try to finish at least one other exercise. Then let us know why you skipped an exercise in the `submission.md` file.

**Should I make a separate page for each exercise?**

No thanks — we'd like to see all the exercises on one page. This single page should look as similar to the mockup as possible.

**The instructions say to style the modules to match the mockups "without adding or removing HTML elements", but I need to add filters to the dropdown in Exercise 1. What gives?**

You can add the filters dynamically anywhere you see fit in the existing markup. As long as the outer/non-dynamic structure (i.e. the original HTML) doesn’t change, that’s fine — it’s meant to be a tricky styling exercise.

**The instructions mention that I can use ES6 and React or Vue components, but the project itself uses EJS files. Normally, I would just build the page with React components and style them to match the mockup, but the instructions also say not to add or remove any of the HTML in the partials. Can I use the HTML that is in the EJS files, but as React or Vue components?**

It's fine to use the HTML that’s in the EJS files — as long as the structure and HTML tags don’t change for each component we’ll accept that. It’s meant to be a tricky styling exercise so maintaining the structure is essential. Just add a note for us in the `submission.md` file saying you didn’t use the EJS files themselves but, instead, maintained the original EJS markup in the React or Vue components.
