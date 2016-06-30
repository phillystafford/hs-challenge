# HubSpot Web Team Exercise - Instructions

## Setup
Fork this project to your GitHub account and commit any changes there. To run this project locally, you will need to install [Node.js](https://nodejs.org/en/download/). Then run `npm install` and issue the `gulp` command from your command line.

## Mockup
<img src="//cdn2.hubspot.net/hubfs/53/web_team/web-team-test/web-team-exercise_1.png" alt="Mockup" width="600" />

#### Mockup (Filter Dropdowns)
<img src="//cdn2.hubspot.net/hubfs/53/web_team/web-team-test/web-team-exercise_2.png" alt="Mockup_Hover" width="600" />

## Requirements
1. Without adding or removing HTML elements, style each of the following modules to match the above mockup. Fonts have been provided for you and can be found in the accompanying `/src/views/partials/_fonts.ejs` file.
2. Do not add or remove any of the HTML elements in the provided markup files (`/src/views/partials/_testimonial.ejs`, `/src/views/partials/_cta.ejs`, and `/src/views/partials/_filterable-content.ejs`). You may add attributes to the existing HTML elements, but don't add or remove any DOM elements, and don't edit a DOM element's tag name.
3. The page should be responsive. Use your best judgment for how narrow viewports should look.
4. Don't use any CSS frameworks (e.g. Bootstrap).
5. Don't worry about making the page pixel-perfect. Focus on writing clean, readable code.
6. Use your best judgment to add interactions, animations, and other features.
7. While all the modules should be styled to match the mockup, some require some additional functionality:
    - **CTA:**
        1. When clicking the button in the CTA, the left-hand text should fetch from an API of your choice and update accordingly. (We recommend [the Chuck Norris jokes API](http://www.icndb.com/api/), but realize that might not be for everyone.)
    - **Filter:**
        1. Use the provided `/src/js/data/data.json` file to generate filterable categories as well as the individual content elements within the `/src/views/partials/_filterable-content.ejs` HTML. The items should be alphabetized by title.
        2. **Dropdowns:** If multiple checkboxes are checked (e.g. _Mystery_ and _Drama_), items from **_both_** categories should display (e.g. all items tagged with either _Mystery_ or _Drama_).
8. Have fun with it! If you get stuck, that's OK. Get as far as you can.

#### Bonus Points
Want an extra challenge? Add some pizzazz to your page. **Note:** These steps are optional, but encouraged. :star2:

1. Add a search field and functionality to the filter module (example in mockup).
2. Add a way to clear the currently selected filters (example in mockup).
3. Add some of your favorite node modules to the project, or modify your gulp file with anything that strikes your fancy.
4. Feeling particularly good? Use ES6 or React components.

## Submission
Once complete, push to GitHub and email the forked repository's link to your recruiting specialist so they can send to the team.