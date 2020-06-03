### 2D Mapping GUI that generates a 2D matrix. 
The *map* is the visual representation of the 2D matrix that you want to create.
#
By using this tool, you can define the number of rows/columns your map has, as well as how big the tile of the mapping will be. 
#
After setting the parameters of the map, you can then *populate it using the symbols* (images) found on the right side of the screen, by selecting the image (clicking it once) and then clicking on the map cells which you want to add it to. 
#
Once you are finished with your map, you can then press the **SHOW** button and your layout will apear as a 2D text matrix in a pop-up message.
#
The text representing the images in the matrix is their **filename without their extension**.
### Exception!
The only image file that does not get represented by it's filename is ***delete***. Instead, it add a space character (' ').
# SETUP to add own images
1) Add images to **img/** folder
2) Run **generate_html.py** using Python3 
3) Voila! You have added your own symbols.

# Preview
You can get a taste of how the application works by accessing https://snoobism.github.io/2D-Mapping-Tool/ (currently using sprites from https://snoobism.github.io/roguelite-game/)

