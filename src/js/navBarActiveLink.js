import $ from "jquery";

$(window).on("scroll", () => {
  // Set initials values
  const scrollPosition = $(document).scrollTop() + 100;
  const visibleSections = $("section:visible");
  const documentHeight = document.body.offsetHeight;

  // Go throught all the visible linked sections on the page
  visibleSections.each((i, el) => {
    const currentSection = el;
    const currentSectionTopCoordinate = currentSection.offsetTop;

    const nextSection = $(visibleSections[i + 1])[0];
    // nextSectionTopCoordinate if logic is added because of the last element in visibleSections (this element don't have next element to compare)
    const nextSectionTopCoordinate = nextSection ? nextSection.offsetTop : documentHeight;

    const linkToUpdate = $(`#${currentSection.id}-link`);

    // Check if scrollPosition is in between currentSection and nextSection top coordinate
    if (
      currentSectionTopCoordinate <= scrollPosition &&
      scrollPosition < nextSectionTopCoordinate
    ) {
      // If true add "active" class to current linkToUpdate element
      linkToUpdate.addClass("active");
    } else {
      // Else remove "active" class from current linkToUpdate element
      linkToUpdate.removeClass("active");
    }
  });
});
