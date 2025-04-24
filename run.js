data = [

    {

        id: 1,

        name: "Pedro"

    },

    {

        id: 2,

        name: "John"

    },

    {

        id: 3,

        name: "Vitor"

    }

]



function concat() {

    return (obj) => {

        obj.id_name = obj.id + " - " + obj.name;

        return obj;

    }

}



function addition(n1, n2) {

    return n1 + n2;

}



module.exports = {

    concat,

    addition

}