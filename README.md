# ikou-tschuess
Shopping Window Pojection Installation for IKOU TSCHUESS

# notes
- use config.json to adjust settings
- blobs are generated via javascript
- blob animations are still controled via css animations (animation values are random between 30 and 60s)
- projection cropping is set via config.json
- every 3rd blob is colored white

# next improvements
- using css transform animations only could improve performance but they can not be stacked on the same element
- use static units for app size
- write script to dynamically change masks via mouse input

# helpful keyboard controls for setup
Use **m** to toggle debug mode showing white background and disabling clip-mask

# instructions for setup
git clone to your dir
yarn start
open url *localhost:1234*