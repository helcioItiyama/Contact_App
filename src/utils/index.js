export function orderContacts (contacts, atribute) {
  return contacts.sort((a, b) => (a[atribute] > b[atribute]) ? 1 : (a[atribute] === b[atribute]) ? ((a.size > b.size) ? 1 : -1) : -1 )
};

export function orderByDate (contacts) {
  return contacts.sort((a, b)  => a.admissionDate > b.admissionDate ? 1 : a.admissionDate < b.admissionDate ? -1 : 0)
};

export function filterByName (contacts, letters) {
  return contacts.filter(contact => contact.name.includes(letters));
}