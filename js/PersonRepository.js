var Person1 = { Id: "001", Name: "N1", Phone: "051" }
var Person2 = { Id: "002", Name: "N2", Phone: "052" }
var Person3 = { Id: "003", Name: "N3", Phone: "053" }

var Persons = [Person1, Person2, Person3];

function Add(person){
    if(CheckIfNewPersinIsValid(person))
    {
        Persons.push(person);
    }    
}

function CheckIfNewPersinIsValid(person)
{
    if(GetPersonIndex(person.Id) > -1){
        return false;
    }
}

function GetPerson(personId){
    var index = GetPersonIndex(personId);
    if(index > -1){
            return Persons[index];
    }
    return null;
}

function GetPersonIndex(personId){
    for(i = 0; i < Persons.length; i++){
        if(Persons[i].id == personId){
            return i;
        }
    }
    return -1;
}

function GetAll(){
    return Persons;
} 

function Delete(personId){
    Persons.splice(GetPersonIndex(personId) ,1);
}

function Update(person){
    var index = GetPersonIndex(person.Id);
    if(index > -1){
        Persons[index] = person;
    }
}

function divClick(){
	  $("div:hidden").show("fast");
}

function GetNextID(){
var newID;
	for(i = 0; i < Persons.length; i++){
        if(Persons[i].id > newID){
            newID = Persons[i].id;
        }
	newID++;
    
    return newID;
}

