# ssim

http://en.wikipedia.org/wiki/Structural_similarity

The structural similarity (SSIM) index is a method for measuring the similarity between two images. The SSIM index is a 
full reference metric; in other words, the measuring of image quality based on an initial uncompressed or distortion-free 
image as reference. SSIM is designed to improve on traditional methods like peak signal-to-noise ratio (PSNR) and mean 
squared error (MSE), which have proven to be inconsistent with human eye perception.


# example

```
var ssim = require('ssim');
var result = ssim(image1, image2);

// for better performance it maybe better to operate on windows of image data then average the results.
```

# license

MIT
