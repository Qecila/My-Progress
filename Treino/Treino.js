let userName = getFirstName("Alice Silva Queiroz")
console.log("Seja bem vinda " + userName)
function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}