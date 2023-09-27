const uniqid = require("uniqid");

const cubes = [];

exports.create = (cubeData) => {
    const id = uniqid();
    console.log({id});
    const newCube = {
        id,
        ...cubeData,
    };
       
    
    cubes.push(newCube);
    return newCube
    
};
exports.getAll = () => {
    return [...cubes];
};