export default function setUpGame(first100Words) {
  if (!localStorage.first100Wrong) {
    localStorage.first100Wrong = first100Words;
  }
}
