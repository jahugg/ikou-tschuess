# ikou-tschuess
Shopping Window Pojection Installation for IKOU TSCHUESS

# notes
- use config.json to adjust settings
- blobs are generated via javascript
- blob animations are still controled via css animations
- projection cropping is set via config.json
- animations use random values between 30s and 60s
- every 3rd blob is colored white

# improvements
- using css transform animations only could improve performance but they can not be stacked on the same element

# helpful keyboard controls for setup
Use **m** to toggle debug mode showing white background and disabling clip-mask

# instructions for setup
git clone to your dir
yarn start
open url *localhost:1234*