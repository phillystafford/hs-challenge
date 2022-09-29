import React from 'react';
import Separator from '../Separator/Separator';
import Blurb from '../Blurb/Blurb';
import Media from '../Media/Media';

function ExercisePage() {
  return (
    <>
      <Separator title="Exercise 1 - Testimonial Block" />
      <Blurb
        description="Gingerbread tart cupcake cake muffin cookie liquorice tiramisu.
            Toffee cupcake cake cake croissant icing carrot cake cookie. Dessert
            chocolate bar apple pie sesame snaps liquorice carrot cake cookie
            danish."
        author="Indiana Jones, Archaeologist"
        ctaText="Tell Me More"
      />
      <Separator title="Exercise 2 - Filterable Content" />
      <Media />
    </>
  );
}

export default ExercisePage;
