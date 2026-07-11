function isLegal(user: { age: number }): boolean {
  if (user.age >= 18) {
    return true;
  }
  return false;
}

console.log(isLegal({ age: 15 }));
