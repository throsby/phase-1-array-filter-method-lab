// Code your solution here

function findMatching(arr,str) {
    return arr.filter((e) => {
        return str.toLowerCase() === e.toLowerCase()
    })
}

function fuzzyMatch(arr,str) {
    return arr.filter((e)=> {
        console.log(e.substring(0,1))
        return e.substring(0,1).toLowerCase() === str.substring(0,1).toLowerCase()
    })
}

function matchName(arr,str) {
    return arr.filter((e) => {       
        return e.name.toLowerCase() === str.toLowerCase()
    })
}