var average    = require('average');
var variance   = require('variance');
var covariance = require('covariance');

// http://en.wikipedia.org/wiki/Structural_similarity
module.exports = function ssim(x, y, options) {
    options = options || {};

    var K1    = 'K1' in options ? options.K1 : 0.01;
    var K2    = 'K2' in options ? options.K2 : 0.03;
    var L     = 'L'  in options ? options.L  : 255;
    var alpha = 'alpha' in options ? options.alpha : 1;
    var beta  = 'beta'  in options ? options.beta  : 1;
    var gamma = 'gamma' in options ? options.gamma : 1;

    var C1 = (K1 * L) * (K1 * L);
    var C2 = (K2 * L) * (K2 * L);
    var C3 = C2 / 2;

    function luminance(x, y) {
        var ux = average(x);
        var uy = average(y);

        return (2 * ux * uy + C1) / ((ux * ux) + (uy * uy) + C1);
    }

    function contrast(x, y) {
        var sx2 = variance(x);
        var sy2 = variance(y);
        var sx = Math.sqrt(sx2);
        var sy = Math.sqrt(sy2);

        return (2 * sx * sy + C2) / (sx2 + sy2 + C2);
    }

    function structure(x, y) {
        var sx = Math.sqrt(variance(x));
        var sy = Math.sqrt(variance(y));
        var sxy = covariance(x, y);

        return (sxy + C3) / (sx * sy + C3);   
    }

    var l = Math.pow(luminance(x, y), alpha);
    var c = Math.pow(contrast(x, y), beta);
    var s = Math.pow(structure(x, y), gamma);

    return l * c * s;
};