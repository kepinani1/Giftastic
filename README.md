# Giftastic

Objective of Giftastic:

1. User provides search term, and a button is generated;
2. User clicks on button, and gifs appear on the webpage;
3. Gifs are initially generated as still, but on click, will animate;
4. Animated gifs, on click, will also revert to still state;

Other Considerations:

1. Gifs will be generated from Giphy API data pull;
2. Gifs will need to change state (still to animate, animate to still);
3. Buttons generated, on click, will need to produce new gifs;

Technical Approach:

1. Ensure AJAX call from Giphy API (ensure functionality of key and API user search terms);
2. Ensure gifs of the same size, are limited to 10, and float left (display);
3. Ensure buttons append to the screen upon adding a new search term;
4. Ensure new gifs appear on click of buttons;

Challenges:

1. I was able to append buttons to the screen upon adding new search terms but was unable to get gifs to appear from these newly added buttons. The buttons that were already generated in my array, however, were producing gifs. This will be a part of the game that I will need to fix for the future.
