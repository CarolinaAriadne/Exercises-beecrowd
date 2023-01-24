let lines = ["invertebrado", "anelideo", "onivoro", ""];

// const vertebrado = {
//   ave: {
//     carnivoro: "aguia",
//     onivoro: "pomba",
//   },
//   mamifero: {
//     onivoro: "homem",
//     herbivoro: "vaca",
//   },
// };

// const invertebrado = {
//   inseto: {
//     hematofago: "pulga",
//     herbivoro: "lagarta",
//   },
//   anelideo: {
//     hematofago: "sanguessuga",
//     onivoro: "minhoca",
//   },
// };

if (lines[0] === "vertebrado") {
  if (lines[1] === "ave") {
    if (lines[2] === "carnivoro") {
      console.log("aguia");
    }
    if (lines[2] === "onivoro") {
      console.log("pomba");
    }
  }
  if (lines[1] === "mamifero") {
    if (lines[2] === "onivoro") {
      console.log("homem");
    }
    if (lines[2] === "herbivoro") {
      console.log("vaca");
    }
  }
}
if (lines[0] === "invertebrado") {
  if (lines[1] === "inseto") {
    if (lines[2] === "hematofago") {
      console.log("pulga");
    }
    if (lines[2] === "herbivoro") {
      console.log("lagarta");
    }
  }
  if (lines[1] === "anelideo") {
    if (lines[2] === "hematofago") {
      console.log("sanguessuga");
    }
    if (lines[2] === "onivoro") {
      console.log("minhoca");
    }
  }
}
