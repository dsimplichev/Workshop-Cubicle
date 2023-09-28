const uniqid = require("uniqid");

const cubes = [];

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid()
        ...cubeData,
    };
       
    
    cubes.push(newCube);
    return newCube
    
};
exports.getAll = (search, from, to) => {
    let filterCubes = [...cubes];

    if(search) {
        filterCubes = filterCubes.filter((cube) => {
            
        })
    }
};