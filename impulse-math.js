const ImpulseMath = {
  EPSILON: 0.0001,
  BIAS_RELATIVE: 0.95,
  BIAS_ABSOLUTE: 0.01,
  DT: 1 / 60,
  GRAVITY: new Vec2(0, 50),
  PENETRATION_ALLOWANCE: 0.05,
  PENETRATION_CORRECTION: 0.4,
  clamp(min, max, a) {
    return (a < min ? min : (a > max ? max : a));
  },
  random(min, max) {
    if (String(min).indexOf('.') === -1 && String(max).indexOf('.') === -1) {
      return Math.random() * (max - min) + min;
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};
ImpulseMath.EPSILON_SQ = ImpulseMath.EPSILON * ImpulseMath.EPSILON;
ImpulseMath.RESTING = ImpulseMath.GRAVITY.mul(ImpulseMath.DT).lengthSq() + ImpulseMath.EPSILON;
ImpulseMath.equal = (a, b) => Math.abs(a - b) <= ImpulseMath.EPSILON;
ImpulseMath.gt = (a, b) => a >= b * ImpulseMath.BIAS_RELATIVE + a * ImpulseMath.BIAS_ABSOLUTE;
