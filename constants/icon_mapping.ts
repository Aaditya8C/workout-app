export const icons = {
    arms:require("../assets/images/armsicon.png"),
    legs:require("../assets/images/legsicon.png"),
    chest:require("../assets/images/chesticon.png"),
    cardio:require("../assets/images/welcome.png"),
    shoudlers:require("../assets/images/shouldericon.png"),
    back:require("../assets/images/backicon.png"),
    abs:require("../assets/images/coreicon.png"),
}

export const getIcon = (bodyPart: string) => {
    if (bodyPart.includes("arm")) {
      return icons.arms;
    }
    if (bodyPart.includes("back")) {
      return icons.back;
    }
    if (bodyPart.includes("leg")) {
      return icons.legs;
    }
    if (bodyPart.includes("cardio")) {
      return icons.cardio;
    }
    if (bodyPart.includes("chest")) {
      return icons.chest;
    }
    if (bodyPart.includes("shoulders")) {
      return icons.shoudlers;
    }
    if (bodyPart.includes("waist") || bodyPart.includes("abs")) {
      return icons.abs;
    }
    return null;
  };

