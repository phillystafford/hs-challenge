# Submission Notes

These notes will be read by HubSpot developers. Drop us a line!

## Given more time, what would you have done differently?

I would have liked to set up Storybook so I could build and test each component independently. It's also a
great way to share work quickly with the design team so they can get a feel for the component early on and get
to use it rather than having to wait for one or more development cycles to see the final product.

I also normalized the css to make it more consistent across the board for the browser testing.

I would have liked to set up tests with React Testing Library and Cypress.

I would have liked to use useContext for some of the state to make it a bit nicer to share through the components.

More of, and nicer looking error handling.

I built a basic button component to use with the clear filter and dropdown select button. After I finished build all 3 of those components, I realised that only one multiselect menu should be open at any one time. I tried to fix it with what was there but the way the basic button is but, it wasn't an easy fix so I had to leave it :(

If I fix those multiselect menus I can easily close the menus on click of the clear menu button. And I'd like to fade them in and out nicely like they do in the gif.

I didn't get to add the pointy triangles to the top of the multiselect list.

I would have liked to spend some time studying accessibility and applying my findings to this app.

I'd have used more sass mixins and variables. And added some breakpoints to the filters.

Please forgive any off colours. My screen quality was so bad that I had to look at it from an angle to spot colour differences. It's only by chance I noticed that there were slightly different colours on the screenshots :D

Which brings me on to another challenge, I can't test against latest safari. I have 15.6.1 because I'm still on Catalina :D it seems fine in 15.6.1 though.

## How did you deviate from the directions, if at all, and why?

I set up a few tools to help me with th development process. Eslint and prettier to keep consistency.

## Is there anything else you'd like to let us know?

I hadn't used parcel before. I thought that was pretty cool compared to webpack configs. There are a couple of small
issues I'd like to give you a heads up on.

1. All the filters work great individually.
   1. When you use the movies/books radio button, it filters down to only books or movies. It's when you select a genre it will return any movies also that match that filter.

Thats all I can think of at the moment. Thanks very much :)
