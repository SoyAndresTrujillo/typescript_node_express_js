import bcrypt from 'bcrypt';

const password = '12con31traseña09';

bcrypt.hash(password, 10, async function(error: any, hash: any) {
  console.log(hash);

  const isTrue = await bcrypt.compare(password, hash);
  console.log(isTrue);
});