import { selector } from "recoil";
import factorsState from "../atoms/factorsState";
import choicesState from "../atoms/choicesState";
import factorWeightState from "../atoms/factorWeightState";

function scaleNumber(input, inMin, inMax, outMin, outMax) {
    return ((input - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
  }

const choicesWithWeights = selector({
    key: 'choicesWithWeights',
    get: ({ get }) => {
      const factors = get(factorsState);
      const choices = get(choicesState);
      const choicesWeights = get(factorWeightState);
  
      return choices.map((choice) => {
        const weight = factors.reduce(
          (sum, factor) =>
            sum + (choicesWeights[factor.id]?.[choice.id] || 0) * factor.weight,0
        );

        const inMin = -10000;
        const inMax = 10000;
        const outMin = 0;
        const outMax = 10;
        const scaledWeight = scaleNumber(weight, inMin, inMax, outMin, outMax);

        return { ...choice, weight: scaledWeight };
      });
    },
  });

  export default choicesWithWeights;
  