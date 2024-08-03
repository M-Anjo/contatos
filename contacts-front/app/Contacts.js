let contacts = [{key:4, name:"khi", phone:"09091215"}, {key:2, name:"mig", phone:"12345678"}, {key:1, name:"edu", phone:"69696969"}, {key:3, name:"adam", phone:"89228922"}]

function compareNames(contact1, contact2) {
  if(contact1.name < contact2.name) {
    return -1
  }
  else if (contact1.name === contact2.name) {
    return 0
  }
  else {
    return 1
  }
}

export default contacts.sort(compareNames)
