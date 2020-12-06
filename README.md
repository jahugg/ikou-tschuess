# ikou-tschuess
Shopping Window Pojection Installation for IKOU TSCHUESS

# notes
- blobs are initialized via javascript (default 10)
- blob animations are controled via css animations
- projection cropping is set via css custom properties
- animations use random values between 30s and 60s
- every 3rd blob is colored white

# improvements
- using css transform animations only could improve performance but they can not be stacked on the same element
- control size via css custom property

# helpful keyboard controls for setup
use the following keyboard controls for setup checks

toggle tile mask: *m*

toggle cropping frame: *n*

toggle white background: *b*

# instructions for setup
git clone to your dir
yarn start
open url *localhost:1234*