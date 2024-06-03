import { createSlice } from "@reduxjs/toolkit";

const GiaiPT = (a, b, c, d, e) => {
  const result = [];

  const alpha = (8 * b - 3 * Math.pow(a, 2)) / (8 * a);
  const beta = (Math.pow(a, 3) * e - 4 * a * b * d + 8 * c * Math.pow(a, 2) - 3 * Math.pow(b, 2)) / (8 * Math.pow(a, 2));
  const gamma = (16 * a * b * b * c - 64 * Math.pow(a, 2) * b * e - 16 * Math.pow(b, 3) * d + 16 * Math.pow(a, 3) * c * c + 256 * Math.pow(a, 4) * e - 3 * Math.pow(a, 2) * Math.pow(b, 2) * d) / (256 * Math.pow(a, 3));

  const delta = Math.pow(beta, 2) - 4 * alpha * gamma;
  if (delta > 0) {
    const sqrtAlpha = Math.sqrt(alpha);
    const p = (-2 * Math.pow(beta, 2) + 3 * alpha * gamma) / (2 * Math.pow(sqrtAlpha, 3));
    // const q = (Math.pow(beta, 3) - 4 * alpha * beta * gamma + 8 * Math.pow(alpha, 2) * delta) / (8 * Math.pow(alpha, 3));

    const acosPDividedBy2 = Math.acos(p / 2);
    const sqrtNeg2POver3 = Math.sqrt(-2 * p / 3);
    const oneThirdSqrtAlpha = sqrtAlpha / 3;

    for (let i = 0; i < 4; i++) {
      result.push(
        -b / (4 * a) - oneThirdSqrtAlpha * Math.cos((acosPDividedBy2 + 2 * Math.PI * i) / 3) - sqrtNeg2POver3 * Math.cos((acosPDividedBy2 + 2 * Math.PI * i) / 3)
      );
    }
  }

  return result;
};

const initialState = {
  result: [],
};

const GPT = createSlice({
  name: "GPT",
  initialState,
  reducers: {
    GiaiPhuongTrinhBac4: (state, action) => {
      const { a, b, c, d, e } = action.payload;
      const A = parseInt(a);
      const B = parseInt(b);
      const C = parseInt(c);
      const D = parseInt(d);
      const E = parseInt(e);
      state.result = GiaiPT(A, B, C, D, E);
    },
  },
});

export const { GiaiPhuongTrinhBac4 } = GPT.actions;
export default GPT.reducer;