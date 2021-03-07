const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");

jest.mock('fs');
test("creates a new zookeeper", () => {
    const zookeeper = createNewZookeeper (
        { name: "Darlene", id: "jhgjhakdjlkja"},
        zookeepers
    )

    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe("jhgjhakdjlkja");
});

test("filters by query", () => {
    const startingZookeepers = [
        {
            id: "3",
            name: "Erica",
            favoriteAnimal: "gorilla",
            age: 28
        },
        {
            id: "4",
            name: "Noel",
            favoriteAnimal: "bear",
            age: 33
        },
    ]

    const updatedZookeepers = filterByQuery({ favoriteAnimal: "gorilla"}, startingZookeepers);

    expect(updatedZookeepers.length).toEqual(1);

});

test("finds by id", () => {
    const startingZookeepers = [
        {
            id: "3",
            name: "Erica",
            favoriteAnimal: "gorilla",
            age: "28"
        },
        {
            id: "4",
            name: "Noel",
            favoriteAnimal: "bear",
            age: "33"
        },
    ];

    const result = findById("3", startingZookeepers);

    expect(result.name).toBe("Erica");

});

test("validates zookeeper age", () => {
    const zookeeper = {
        id: "3",
        name: "Erica",
        favoriteAnimal: "gorilla",
        age: 28
    };

    const invalidZookeeper = {
        id: "3",
        name: "Erica",
        favoriteAnimal: "gorilla",
        age: "jalkal"
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
})